# 🔧 مرجع API - Sat Finder Pro AI

## نظرة عامة
API متاح على: `http://localhost:5000/api` (Python) أو `http://localhost:3000/api` (Node.js)

## نقاط النهاية

### الأقمار الصناعية

#### `GET /api/satellites`
الحصول على جميع الأقمار

**الاستجابة:**
```json
[
  {
    "id": 1,
    "name_ar": "نايل سات",
    "orbital_position": "7.0W",
    "status": "active"
  }
]{
  "question": "كيف أوجه الطبق نحو نايل سات؟",
  "api_key": "your_gemini_api_key"
}// جلب جميع الأقمار
const response = await fetch('http://localhost:5000/api/satellites');
const satellites = await response.json();

// بحث عن تردد
const searchResponse = await fetch('http://localhost:5000/api/frequencies/search?q=الجزيرة');
const frequencies = await searchResponse.json();
---

## 📄 **تاسعاً: ملفات أمثلة**

### 1. مثال Python

```bash
cat > examples/python/api_example.py << 'EOF'
#!/usr/bin/env python3
"""
مثال استخدام Sat Finder Pro AI API مع Python
"""

import requests
import json

BASE_URL = "http://localhost:5000/api"

def get_satellites():
    """جلب جميع الأقمار"""
    response = requests.get(f"{BASE_URL}/satellites")
    if response.status_code == 200:
        return response.json()
    return []

def search_frequencies(query):
    """البحث عن تردد"""
    response = requests.get(f"{BASE_URL}/frequencies/search", params={"q": query})
    if response.status_code == 200:
        return response.json()
    return []

def ask_ai(question, api_key):
    """سؤال المساعد الذكي"""
    response = requests.post(
        f"{BASE_URL}/ai/ask",
        json={"question": question, "api_key": api_key}
    )
    if response.status_code == 200:
        return response.json().get("response", "")
    return "عذراً، لم أستطع الإجابة"

if __name__ == "__main__":
    # مثال: جلب الأقمار
    satellites = get_satellites()
    print(f"عدد الأقمار: {len(satellites)}")
    
    # مثال: بحث عن تردد
    results = search_frequencies("الجزيرة")
    print(f"نتائج البحث: {len(results)}")
    
    # مثال: سؤال المساعد (يحتاج مفتاح API)
    # answer = ask_ai("كيف أوجه الطبق؟", "your_api_key")
    # print(answer)
