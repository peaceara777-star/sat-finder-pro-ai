#!/bin/bash
# مثال استخدام Sat Finder Pro AI API مع curl

BASE_URL="http://localhost:5000/api"

echo "🛰️ Sat Finder Pro AI - API Examples"
echo "===================================="

# 1. جلب حالة API
echo ""
echo "1. حالة API:"
curl -s "$BASE_URL/status" | jq .

# 2. جلب جميع الأقمار
echo ""
echo "2. الأقمار المتاحة:"
curl -s "$BASE_URL/satellites" | jq '.[].name_ar'

# 3. البحث عن تردد
echo ""
echo "3. البحث عن 'الجزيرة':"
curl -s "$BASE_URL/frequencies/search?q=الجزيرة" | jq '.[0]'

# 4. جلب الإصلاحات
echo ""
echo "4. فئات الإصلاحات:"
curl -s "$BASE_URL/repairs" | jq '.[].category' | sort -u

echo ""
echo "===================================="
echo "✅ تم!"
