FROM mcr.microsoft.com/devcontainers/python:3.11

# تثبيت Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# تثبيت أدوات إضافية
RUN apt-get update && apt-get install -y \
    sqlite3 \
    curl \
    wget \
    git \
    make \
    && rm -rf /var/lib/apt/lists/*

# تثبيت أدوات Python
RUN pip install --upgrade pip \
    && pip install black flake8 pytest pytest-cov mkdocs mkdocs-material

WORKDIR /workspace
