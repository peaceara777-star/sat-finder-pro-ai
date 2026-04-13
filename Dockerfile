# Sat Finder Pro AI - Dockerfile
FROM python:3.14-slim

# إعدادات البيئة
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    TZ=Asia/Riyadh \
    FLASK_ENV=production

# تثبيت التبعيات النظامية
RUN apt-get update && apt-get install -y --no-install-recommends \
    sqlite3 \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone

# إنشاء مستخدم غير root
RUN useradd -m -u 1000 -s /bin/bash satfinder

# إعداد مجلد العمل
WORKDIR /app

# نسخ ملفات التبعيات
COPY requirements.txt .

# تثبيت تبعيات Python
RUN pip install --no-cache-dir -r requirements.txt

# نسخ المشروع
COPY --chown=satfinder:satfinder . .

# إنشاء المجلدات المطلوبة
RUN mkdir -p database data logs \
    && chown -R satfinder:satfinder /app

# تغيير المستخدم
USER satfinder

# المنفذ
EXPOSE 5000

# فحص الصحة
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:5000/api/status || exit 1

# تشغيل التطبيق
CMD ["python", "app.py"]
