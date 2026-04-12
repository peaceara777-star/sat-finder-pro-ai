# Sat Finder Pro AI - Makefile
# الإصدار 4.1.0

.PHONY: help install run test clean docker-build docker-up docker-down db-init db-backup

# الألوان
GREEN=\033[0;32m
YELLOW=\033[1;33m
RED=\033[0;31m
NC=\033[0m

help:
@echo "$(GREEN)Sat Finder Pro AI - الأوامر المتاحة:$(NC)"
@echo "  $(YELLOW)make install$(NC)      - تثبيت التبعيات"
@echo "  $(YELLOW)make run$(NC)          - تشغيل التطبيق"
@echo "  $(YELLOW)make test$(NC)         - تشغيل الاختبارات"
@echo "  $(YELLOW)make clean$(NC)        - تنظيف الملفات المؤقتة"
@echo "  $(YELLOW)make docker-build$(NC) - بناء صورة Docker"
@echo "  $(YELLOW)make docker-up$(NC)    - تشغيل Docker Compose"
@echo "  $(YELLOW)make docker-down$(NC)  - إيقاف Docker Compose"
@echo "  $(YELLOW)make db-init$(NC)      - تهيئة قاعدة البيانات"
@echo "  $(YELLOW)make db-backup$(NC)    - نسخ احتياطي للقاعدة"
@echo "  $(YELLOW)make logs$(NC)         - عرض السجلات"
@echo "  $(YELLOW)make deploy$(NC)       - نشر التطبيق"

install:
@echo "$(GREEN)📦 تثبيت التبعيات...$(NC)"
pip install -r requirements.txt
@echo "$(GREEN)✅ تم التثبيت$(NC)"

run:
@echo "$(GREEN)🚀 تشغيل التطبيق...$(NC)"
python app.py

test:
@echo "$(GREEN)🧪 تشغيل الاختبارات...$(NC)"
pytest tests/ -v --cov=src --cov-report=html

clean:
@echo "$(GREEN)🧹 تنظيف الملفات المؤقتة...$(NC)"
find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
find . -type f -name "*.pyc" -delete
find . -type f -name "*.pyo" -delete
find . -type f -name "*.log" -delete
rm -rf .pytest_cache .coverage htmlcov
@echo "$(GREEN)✅ تم التنظيف$(NC)"

docker-build:
@echo "$(GREEN)🐳 بناء صورة Docker...$(NC)"
docker build -t sat-finder-pro-ai:latest .

docker-up:
@echo "$(GREEN)🐳 تشغيل Docker Compose...$(NC)"
docker-compose up -d
@echo "$(GREEN)✅ التطبيق يعمل على http://localhost$(NC)"

docker-down:
@echo "$(GREEN)🐳 إيقاف Docker Compose...$(NC)"
docker-compose down

db-init:
@echo "$(GREEN)🗄️ تهيئة قاعدة البيانات...$(NC)"
mkdir -p database
sqlite3 database/satfinder.db < database/schema.sql
sqlite3 database/satfinder.db < database/advanced_repairs.sql
sqlite3 database/satfinder.db < database/professional_programming_db.sql
@echo "$(GREEN)✅ تم تهيئة قاعدة البيانات$(NC)"

db-backup:
@echo "$(GREEN)💾 نسخ احتياطي لقاعدة البيانات...$(NC)"
mkdir -p backups
cp database/satfinder.db backups/satfinder_$(shell date +%Y%m%d_%H%M%S).db
@echo "$(GREEN)✅ تم النسخ الاحتياطي$(NC)"

logs:
@echo "$(GREEN)📋 عرض السجلات...$(NC)"
docker-compose logs -f

deploy:
@echo "$(GREEN)🚀 نشر التطبيق...$(NC)"
git pull origin main
docker-compose down
docker-compose build
docker-compose up -d
@echo "$(GREEN)✅ تم النشر$(NC)"

dev:
@echo "$(GREEN)🔧 تشغيل وضع التطوير...$(NC)"
FLASK_ENV=development python app.py

lint:
@echo "$(GREEN)🔍 فحص الكود...$(NC)"
flake8 app.py src/ --max-line-length=100
black app.py src/ --check

format:
@echo "$(GREEN)🎨 تنسيق الكود...$(NC)"
black app.py src/

docs:
@echo "$(GREEN)📚 بناء التوثيق...$(NC)"
mkdocs build
@echo "$(GREEN)✅ تم بناء التوثيق في مجلد site/$(NC)"

docs-serve:
@echo "$(GREEN)📚 تشغيل خادم التوثيق...$(NC)"
mkdocs serve
