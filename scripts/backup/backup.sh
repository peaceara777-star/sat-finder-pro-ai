#!/bin/bash
# Sat Finder Pro AI - Backup Script

set -e

echo "💾 بدء عملية النسخ الاحتياطي..."
echo "================================"

# المتغيرات
BACKUP_ROOT="/var/backups/sat-finder-pro-ai"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="$BACKUP_ROOT/$TIMESTAMP"

# إنشاء مجلد النسخ الاحتياطي
mkdir -p "$BACKUP_DIR"

# 1. نسخ قاعدة البيانات
echo "🗄️ نسخ قاعدة البيانات..."
cp database/satfinder.db "$BACKUP_DIR/"

# 2. نسخ ملفات الإعدادات
echo "⚙️ نسخ ملفات الإعدادات..."
cp -r config/ "$BACKUP_DIR/"

# 3. نسخ ملفات البيانات
echo "📊 نسخ ملفات البيانات..."
cp -r data/ "$BACKUP_DIR/"

# 4. نسخ السجلات
echo "📋 نسخ السجلات..."
cp -r logs/ "$BACKUP_DIR/" 2>/dev/null || true

# 5. ضغط النسخة الاحتياطية
echo "📦 ضغط النسخة الاحتياطية..."
cd "$BACKUP_ROOT"
tar -czf "backup_$TIMESTAMP.tar.gz" "$TIMESTAMP"
rm -rf "$TIMESTAMP"

# 6. تنظيف النسخ القديمة (الاحتفاظ بآخر 30 نسخة)
echo "🧹 تنظيف النسخ القديمة..."
ls -t backup_*.tar.gz | tail -n +31 | xargs -r rm

# 7. مزامنة مع التخزين السحابي (اختياري)
# rclone sync "$BACKUP_ROOT" remote:sat-finder-backups/

echo "✅ تم النسخ الاحتياطي بنجاح!"
echo "📁 موقع النسخة: $BACKUP_ROOT/backup_$TIMESTAMP.tar.gz"
echo "================================"
