# دليل المساهمة

شكراً لاهتمامك بالمساهمة في Sat Finder Pro AI! 🎉

## 📋 كيفية المساهمة

### 1. الإبلاغ عن الأخطاء
- استخدم قالب `bug_report.md`
- قدم خطوات واضحة لإعادة الإنتاج
- أضف لقطات شاشة إن أمكن

### 2. اقتراح ميزات
- استخدم قالب `feature_request.md`
- اشرح لماذا هذه الميزة مفيدة
- اقترح كيفية تنفيذها

### 3. المساهمة بالكود

#### الخطوات:
1. Fork المستودع
2. إنشاء فرع: `git checkout -b feature/amazing-feature`
3. Commit التغييرات: `git commit -m 'إضافة ميزة رائعة'`
4. Push إلى الفرع: `git push origin feature/amazing-feature`
5. افتح Pull Request

#### معايير الكود:
- **Python**: اتبع PEP 8، استخدم Black للتنسيق
- **JavaScript**: استخدم Prettier، ESLint
- **Commits**: استخدم [Conventional Commits](https://www.conventionalcommits.org/)

#### أنواع الـ Commits:
- `feat`: ميزة جديدة
- `fix`: إصلاح خطأ
- `docs`: تحديث التوثيق
- `style`: تنسيق الكود
- `refactor`: إعادة هيكلة
- `test`: إضافة اختبارات
- `chore`: مهام روتينية

### 4. التوثيق
- حدث README.md إذا لزم الأمر
- أضف تعليقات JSDoc/Pydoc
- حدث API documentation

## 🧪 الاختبارات

قبل تقديم PR:
```bash
# Python
pytest tests/ -v --cov=src
black . --check
flake8 .

# JavaScript
npm test
npm run lint
📝 قائمة المراجعة

· هل الكود يتبع معايير المشروع؟
· هل أضفت اختبارات للتغييرات؟
· هل جميع الاختبارات تجتاز؟
· هل حدثت التوثيق؟
· هل commit message واضح؟

💬 أسئلة؟

افتح Issue بنوع question أو تواصل معنا.

شكراً لمساهمتك! 🙏
