#!/bin/bash
# Sat Finder Pro AI - Monitoring Script

echo "📊 تقرير المراقبة - $(date)"
echo "================================"

# 1. فحص حالة API
echo "🌐 فحص حالة API..."
API_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000/api/status)
if [ "$API_STATUS" = "200" ]; then
    echo "✅ API: يعمل (HTTP $API_STATUS)"
else
    echo "❌ API: متوقف (HTTP $API_STATUS)"
fi

# 2. فحص قاعدة البيانات
echo "🗄️ فحص قاعدة البيانات..."
if [ -f "database/satfinder.db" ]; then
    DB_SIZE=$(du -h database/satfinder.db | cut -f1)
    echo "✅ قاعدة البيانات: موجودة ($DB_SIZE)"
else
    echo "❌ قاعدة البيانات: غير موجودة"
fi

# 3. فحص استخدام القرص
echo "💾 استخدام القرص:"
df -h . | tail -1 | awk '{print "   المساحة المستخدمة: " $5 " (" $3 "/" $2 ")"}'

# 4. فحص استخدام الذاكرة
echo "🧠 استخدام الذاكرة:"
free -h | grep Mem | awk '{print "   المستخدم: " $3 " / المجموع: " $2}'

# 5. فحص العمليات
echo "🔄 العمليات النشطة:"
ps aux | grep -E "python.*app.py|node.*server.js" | grep -v grep | wc -l | awk '{print "   عدد العمليات: " $1}'

# 6. فحص السجلات للأخطاء
echo "📋 آخر الأخطاء في السجلات:"
tail -5 logs/error/error.log 2>/dev/null | head -3 || echo "   لا توجد أخطاء حديثة"

echo "================================"
