#!/bin/bash
# Sat Finder Pro AI - Deployment Script

set -e

echo "🚀 بدء عملية النشر..."
echo "================================"

# الألوان
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# المتغيرات
APP_NAME="sat-finder-pro-ai"
DEPLOY_DIR="/var/www/$APP_NAME"
BACKUP_DIR="/var/backups/$APP_NAME"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# 1. نسخ احتياطي قبل النشر
echo -e "${YELLOW}📦 إنشاء نسخ احتياطي...${NC}"
mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz" .

# 2. تحديث الكود
echo -e "${YELLOW}📥 تحديث الكود من Git...${NC}"
git pull origin main

# 3. تثبيت التبعيات
echo -e "${YELLOW}📦 تثبيت التبعيات...${NC}"
pip install -r requirements.txt
cd server && npm install && cd ..

# 4. تهيئة قاعدة البيانات
echo -e "${YELLOW}🗄️ تهيئة قاعدة البيانات...${NC}"
python -c "from app import init_db; init_db()"

# 5. بناء الواجهة
echo -e "${YELLOW}🎨 بناء الواجهة...${NC}"
# أضف أوامر بناء الواجهة هنا

# 6. إعادة تشغيل الخدمات
echo -e "${YELLOW}🔄 إعادة تشغيل الخدمات...${NC}"
sudo systemctl restart $APP_NAME
sudo systemctl restart nginx

# 7. فحص الصحة
echo -e "${YELLOW}🏥 فحص الصحة...${NC}"
sleep 5
curl -f http://localhost:5000/api/status || {
    echo -e "${RED}❌ فشل فحص الصحة!${NC}"
    echo -e "${YELLOW}🔄 جاري استعادة النسخة السابقة...${NC}"
    tar -xzf "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz"
    sudo systemctl restart $APP_NAME
    exit 1
}

echo -e "${GREEN}✅ تم النشر بنجاح!${NC}"
echo "================================"
