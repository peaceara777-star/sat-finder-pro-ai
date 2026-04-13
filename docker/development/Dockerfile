# Development Dockerfile
FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    FLASK_ENV=development

RUN apt-get update && apt-get install -y \
    curl \
    git \
    sqlite3 \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip \
    && pip install flask flask-cors python-dotenv \
    && pip install black flake8 pytest pytest-cov

WORKDIR /app

EXPOSE 5000

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0", "--port=5000", "--debug"]
