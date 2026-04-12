-- =====================================================
-- SAT FINDER PRO AI - قاعدة بيانات الإصلاحات المتطورة
-- تشمل: الرسيفرات، البرمجة، السوفتوير، البوت لودر
-- =====================================================

-- =====================================================
-- جدول ماركات الرسيفرات
-- =====================================================
CREATE TABLE IF NOT EXISTS receiver_brands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name_ar VARCHAR(100) NOT NULL,
    name_en VARCHAR(100),
    website VARCHAR(255),
    support_url VARCHAR(255),
    popularity INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول موديلات الرسيفرات
-- =====================================================
CREATE TABLE IF NOT EXISTS receiver_models (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand_id INTEGER NOT NULL,
    model_name VARCHAR(100) NOT NULL,
    chipset VARCHAR(100), -- Ali 3511, GX6605, etc.
    processor VARCHAR(100),
    ram VARCHAR(50),
    flash_size VARCHAR(50),
    tuner_type VARCHAR(50), -- DVB-S2, DVB-S2X, etc.
    has_4k BOOLEAN DEFAULT 0,
    has_hevc BOOLEAN DEFAULT 0,
    has_wifi BOOLEAN DEFAULT 0,
    has_bluetooth BOOLEAN DEFAULT 0,
    release_year INTEGER,
    is_supported BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (brand_id) REFERENCES receiver_brands(id)
);

-- =====================================================
-- جدول أنواع السوفتوير
-- =====================================================
CREATE TABLE IF NOT EXISTS software_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL, -- Official, Modified, Enigma2, Android, etc.
    description TEXT
);

-- =====================================================
-- جدول السوفتويرات والإصدارات
-- =====================================================
CREATE TABLE IF NOT EXISTS receiver_software (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    model_id INTEGER NOT NULL,
    software_type_id INTEGER NOT NULL,
    version VARCHAR(50),
    release_date DATE,
    file_name VARCHAR(255),
    file_size VARCHAR(50),
    download_url TEXT,
    changelog TEXT,
    is_stable BOOLEAN DEFAULT 1,
    requires_loader BOOLEAN DEFAULT 0,
    installation_method TEXT, -- USB, RS232, Online, etc.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (model_id) REFERENCES receiver_models(id),
    FOREIGN KEY (software_type_id) REFERENCES software_types(id)
);

-- =====================================================
-- جدول البوت لودر
-- =====================================================
CREATE TABLE IF NOT EXISTS bootloaders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    model_id INTEGER NOT NULL,
    version VARCHAR(50),
    file_name VARCHAR(255),
    download_url TEXT,
    flash_tool VARCHAR(100), -- AliFlash, GXLoader, etc.
    instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (model_id) REFERENCES receiver_models(id)
);

-- =====================================================
-- جدول أدوات البرمجة والفلاش
-- =====================================================
CREATE TABLE IF NOT EXISTS flash_tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    supported_chipsets TEXT, -- Ali, GX, Novatek, etc.
    download_url TEXT,
    version VARCHAR(50),
    platform VARCHAR(50), -- Windows, Linux, Mac
    instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول أعطال الرسيفرات (مفصل)
-- =====================================================
CREATE TABLE IF NOT EXISTS receiver_repairs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category VARCHAR(50) NOT NULL, -- power, boot, tuner, video, audio, network, remote, display, usb, hdmi
    title_ar VARCHAR(200) NOT NULL,
    title_en VARCHAR(200),
    severity VARCHAR(20) DEFAULT 'medium',
    symptoms TEXT, -- أعراض المشكلة
    causes TEXT, -- الأسباب المحتملة
    solutions TEXT, -- الحلول
    required_tools TEXT, -- الأدوات المطلوبة
    software_solution TEXT, -- حل برمجي
    hardware_solution TEXT, -- حل هاردوير
    affected_models TEXT, -- الموديلات المتأثرة
    affected_chipsets TEXT, -- الشرائح المتأثرة
    difficulty_level VARCHAR(20) DEFAULT 'متوسط',
    estimated_time INTEGER, -- بالدقائق
    success_rate INTEGER DEFAULT 85, -- نسبة النجاح %
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول رموز الخطأ (Error Codes)
-- =====================================================
CREATE TABLE IF NOT EXISTS error_codes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    receiver_brand_id INTEGER,
    error_code VARCHAR(50) NOT NULL,
    meaning_ar TEXT NOT NULL,
    meaning_en TEXT,
    causes TEXT,
    solutions TEXT,
    display_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (receiver_brand_id) REFERENCES receiver_brands(id)
);

-- =====================================================
-- جدول ملفات القنوات (Channel Lists)
-- =====================================================
CREATE TABLE IF NOT EXISTS channel_lists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    region VARCHAR(50), -- عربي، أوروبي، آسيوي
    satellite_count INTEGER,
    channel_count INTEGER,
    file_name VARCHAR(255),
    download_url TEXT,
    compatible_models TEXT,
    updated_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول الشروحات والدروس
-- =====================================================
CREATE TABLE IF NOT EXISTS tutorials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_ar VARCHAR(200) NOT NULL,
    title_en VARCHAR(200),
    category VARCHAR(50), -- flashing, setup, repair, installation
    difficulty VARCHAR(20),
    content TEXT,
    video_url TEXT,
    required_tools TEXT,
    steps TEXT, -- JSON array of steps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- إدخال ماركات الرسيفرات
-- =====================================================
INSERT OR IGNORE INTO receiver_brands (name_ar, name_en, website) VALUES
('ستار سات', 'Starsat', 'http://starsat.com'),
('تايجر', 'Tiger', 'http://tiger-sat.com'),
('ترومان', 'Truman', 'http://truman.tv'),
('ميديا ستار', 'Mediastar', 'http://mediastar.com'),
('جيو ستار', 'Geostar', ''),
('بي إن سبورت', 'BeIN Sports', 'https://www.bein.com'),
('هيوماكس', 'Humax', 'https://www.humaxdigital.com'),
('فوريفر', 'Forever', ''),
('أيكون', 'Icone', ''),
('فيجا', 'Vega', ''),
('إي ستار', 'Estar', ''),
('تكنوسات', 'Technosat', ''),
('فيوجن', 'Fusion', ''),
('سامسونج', 'Samsung', ''),
('إل جي', 'LG', ''),
('سوني', 'Sony', ''),
('باناسونيك', 'Panasonic', ''),
('دريم بوكس', 'Dreambox', 'https://www.dream-multimedia-tv.de'),
('فيو', 'Vu+', 'https://www.vuplus.com'),
('جيجابلو', 'Gigablue', ''),
('إديسون', 'Edision', ''),
('أوكتاجون', 'Octagon', ''),
('فورمس', 'Formuler', ''),
('أميكو', 'Amiko', '');

-- =====================================================
-- إدخال أنواع السوفتوير
-- =====================================================
INSERT OR IGNORE INTO software_types (name, description) VALUES
('رسمي', 'سوفتوير رسمي من الشركة المصنعة'),
('معدل', 'سوفتوير معدل مع إضافات'),
('إنجما 2', 'Enigma2 - نظام مفتوح المصدر'),
('أندرويد', 'Android TV OS'),
('لاينكس', 'Linux based'),
('بوت لودر', 'Bootloader only'),
('ريcovery', 'Recovery software');

-- =====================================================
-- إدخال أدوات الفلاش
-- =====================================================
INSERT OR IGNORE INTO flash_tools (name, supported_chipsets, platform, version) VALUES
('AliFlash Tool', 'Ali 3511, 3516, 3521, 3526', 'Windows', '2.0.8'),
('GXLoader', 'GX6605, GX6621, GX6628', 'Windows', '3.1.2'),
('Novatek Flash Tool', 'Novatek NT78326', 'Windows', '1.5.0'),
('MTK Flash Tool', 'MediaTek MTK series', 'Windows/Linux', '5.1.6'),
('USB Burning Tool', 'Amlogic S905, S912', 'Windows', '2.2.0'),
('Phoenix Suit', 'Allwinner H3, H6', 'Windows/Linux', '1.1.0'),
('DreamUp', 'Dreambox', 'Windows', '1.3.3'),
('Vu+ Util', 'Vu+', 'Windows/Mac', '2.1.0');

-- =====================================================
-- إدخال رموز الخطأ الشائعة
-- =====================================================
INSERT OR IGNORE INTO error_codes (error_code, meaning_ar, causes, solutions) VALUES
('E001', 'خطأ في البوت لودر', '["تلف البوت لودر", "انقطاع كهرباء أثناء التحديث"]', '["إعادة تحميل البوت لودر عن طريق RS232", "استخدام أداة الفلاش المناسبة"]'),
('E002', 'خطأ في الذاكرة الداخلية', '["تلف في الفلاشة الداخلية", "Bad sectors"]', '["استبدال الفلاشة الداخلية", "عمل Low Level Format"]'),
('E003', 'خطأ في التردد', '["تردد غير صحيح", "إشارة ضعيفة"]', '["التأكد من التردد الصحيح", "تحسين استقبال الإشارة"]'),
('E004', 'فشل في تحميل السوفتوير', '["ملف غير متوافق", "فلاشة USB تالفة"]', '["استخدام ملف صحيح للموديل", "تهيئة الفلاشة FAT32", "استخدام فلاشة سليمة"]'),
('E005', 'خطأ في تحديث القنوات', '["ملف قنوات تالف", "ذاكرة ممتلئة"]', '["استخدام ملف قنوات سليم", "حذف القنوات القديمة أولاً"]'),
('ERR01', 'عدم وجود إشارة', '["كابل غير موصول", "LNB تالف"]', '["فحص توصيلات الكابل", "استبدال LNB"]'),
('ERR02', 'بطاقة غير صالحة', '["انتهاء صلاحية الكارد", "كارد غير مدعوم"]', '["تجديد الاشتراك", "التأكد من توافق الكارد"]'),
('ERR03', 'فشل في الاتصال بالإنترنت', '["كابل شبكة غير موصول", "إعدادات IP خاطئة"]', '["فحص كابل الشبكة", "ضبط إعدادات DHCP"]'),
('L100', 'خطأ في LNB', '["شورت في الكابل", "LNB تالف"]', '["فحص الكابل", "استبدال LNB"]');

-- =====================================================
-- إدخال أعطال الرسيفرات الشاملة
-- =====================================================
INSERT OR IGNORE INTO receiver_repairs (category, title_ar, severity, symptoms, causes, solutions, software_solution, hardware_solution, required_tools, difficulty_level, estimated_time, success_rate) VALUES

-- أعطال الباور
('power', 'الرسيفر لا يعمل نهائياً (لمبة الباور لا تضيء)', 'critical',
 '["لا توجد أي استجابة عند الضغط على زر الباور", "لمبة الباور مطفية", "لا يوجد صوت أو صورة"]',
 '["عطل في مصدر الطاقة الداخلي", "فيوز محروق", "مكثفات منتفخة", "تلف في دائرة الباور"]',
 '["فحص مصدر الطاقة الخارجي", "استبدال فيوز الباور", "استبدال المكثفات المنتفخة", "فحص الفولت على مخارج الباور سبلاي"]',
 '["لا يوجد حل برمجي - المشكلة هاردوير"]',
 '["فحص واستبدال مكثفات الباور", "استبدال آيسي الباور", "استبدال الباور سبلاي بالكامل"]',
 '["ملتيميتر", "مفك", "مكثفات بديلة", "كاوية لحام", "فيوز"]',
 'متقدم', 45, 80),

('power', 'الرسيفر يفصل ويعمل بشكل متقطع', 'medium',
 '["الجهاز يعمل لبعض الوقت ثم يفصل", "إعادة تشغيل تلقائية متكررة"]',
 '["ارتفاع حرارة المعالج", "ضعف في مصدر الطاقة", "مكثفات تالفة"]',
 '["تنظيف فتحات التهوية", "فحص مروحة التبريد", "استبدال الباور سبلاي"]',
 '["تحديث السوفتوير قد يحل مشكلة إدارة الطاقة"]',
 '["استبدال مكثفات الباور", "إضافة مشتت حراري", "استبدال مروحة التبريد"]',
 '["مروحة تبريد", "معجون حراري", "مكثفات", "ملتيميتر"]',
 'متوسط', 30, 85),

-- أعطال البوت والإقلاع
('boot', 'الرسيفر معلق على شاشة البداية (Boot Loop)', 'critical',
 '["الجهاز يعلق على شعار الشركة", "يعيد التشغيل باستمرار", "لا يكمل الإقلاع"]',
 '["تلف في ملفات النظام", "سوفتوير غير متوافق", "مشكلة في الذاكرة الداخلية"]',
 '["محاولة الدخول إلى وضع Recovery", "تحميل سوفتوير جديد", "عمل فورمات كامل"]',
 '["تحميل بوت لودر جديد", "تحميل سوفتوير رسمي", "استخدام أداة الفلاش المناسبة"]',
 '["استبدال الفلاشة الداخلية (NAND/NOR)", "فحص واستبدال RAM"]',
 '["فلاشة USB", "كابل RS232", "برنامج Loader", "ملف سوفتوير"]',
 'متقدم', 60, 75),

('boot', 'ظهور رسالة "ON" أو "BOOT" فقط', 'medium',
 '["ظهور كلمة ON فقط على الشاشة", "الجهاز لا يستجيب"]',
 '["مشكلة في البوت لودر", "تلف في ملفات الإقلاع", "انقطاع كهرباء أثناء التحديث"]',
 '["إعادة تحميل البوت لودر", "استخدام أداة Recovery", "تحميل سوفتوير عن طريق RS232"]',
 '["استخدام برنامج AliFlash أو GXLoader", "تحميل ملف bootloader.bin"]',
 '["استبدال IC الفلاشة", "فحص توصيلات الفلاشة"]',
 '["كابل RS232", "برنامج فلاش", "ملف بوت لودر"]',
 'متوسط', 45, 90),

-- أعطال التيونر والإشارة
('tuner', 'لا توجد إشارة نهائياً (0% Signal)', 'critical',
 '["قوة الإشارة 0%", "جودة الإشارة 0%", "لا يتم استقبال أي قمر"]',
 '["تلف في التيونر", "عطل في IC التيونر", "مشكلة في دائرة LNB"]',
 '["فحص فولت LNB (13V/18V)", "استبدال التيونر", "فحص مكثفات التيونر"]',
 '["تحديث السوفتوير", "إعادة ضبط المصنع"]',
 '["استبدال IC التيونر", "استبدال مكثفات التيونر", "استبدال البوردة بالكامل"]',
 '["ملتيميتر", "كاوية لحام", "تيونر بديل", "مكثفات 1000µF"]',
 'متقدم', 60, 70),

('tuner', 'الإشارة ضعيفة أو متقطعة', 'medium',
 '["تقطع في الصورة والصوت", "الإشارة غير مستقرة", "بعض الترددات لا تعمل"]',
 '["ضعف في التيونر", "مكثفات التيونر بدأت في التلف", "مشكلة في LNB"]',
 '["فحص وتغيير مكثفات التيونر", "استخدام LNB عالي الجودة", "تحسين التوصيلات"]',
 '["تحديث قاعدة بيانات الترددات", "ضبط إعدادات LNB"]',
 '["استبدال المكثفات الكيميائية في دائرة التيونر", "فحص فولت LNB"]',
 '["ملتيميتر", "مكثفات 1000µF 25V", "كاوية لحام"]',
 'متوسط', 40, 85),

-- أعطال الصورة
('video', 'لا توجد صورة (شاشة سوداء)', 'critical',
 '["الصوت يعمل لكن لا توجد صورة", "شاشة سوداء تماماً", "ظهور رسالة No Signal"]',
 '["عطل في مخرج HDMI", "تلف في IC الفيديو", "كابل HDMI تالف"]',
 '["تجربة كابل HDMI آخر", "تجربة مخرج AV", "فحص IC الفيديو"]',
 '["تغيير إعدادات دقة العرض", "إعادة ضبط المصنع"]',
 '["استبدال IC الفيديو", "فحص واستبدال منفذ HDMI"]',
 '["كابل HDMI", "كابل AV", "ملتيميتر", "IC فيديو بديل"]',
 'متوسط', 30, 80),

('video', 'الصورة متقطعة أو بها تشويش', 'medium',
 '["ظهور مربعات خضراء", "تشوه في الصورة", "تقطع مستمر"]',
 '["ضعف في الإشارة", "حرارة زائدة", "مشكلة في RAM"]',
 '["تحسين الإشارة", "تبريد الجهاز", "فحص RAM"]',
 '["تحديث السوفتوير", "تغيير إعدادات الفيديو"]',
 '["استبدال RAM", "إعادة لحام IC الفيديو"]',
 '["مروحة تبريد", "معجون حراري", "جهاز قياس إشارة"]',
 'متوسط', 35, 75),

-- أعطال HDMI
('hdmi', 'الرسيفر لا يشتغل على HDMI', 'medium',
 '["الجهاز يعمل على AV لكن لا يعمل على HDMI", "تلفزيون لا يتعرف على الرسيفر"]',
 '["عطل في منفذ HDMI", "تلف في IC HDMI", "كابل HDMI غير متوافق"]',
 '["تجربة كابل HDMI آخر", "تجربة منفذ HDMI آخر في التلفزيون", "فحص IC HDMI"]',
 '["تغيير إعدادات HDMI في الرسيفر", "تغيير HDCP"]',
 '["استبدال IC HDMI", "استبدال منفذ HDMI", "فحص المقاومات حول IC HDMI"]',
 '["كابل HDMI", "ملتيميتر", "IC HDMI بديل", "عدسة مكبرة"]',
 'متقدم', 45, 70),

-- أعطال الصوت
('audio', 'لا يوجد صوت نهائياً', 'medium',
 '["الصورة تعمل بدون صوت", "جميع القنوات بدون صوت"]',
 '["كابل صوت غير موصول", "إعدادات الصوت خاطئة", "عطل في IC الصوت"]',
 '["فحص كابل الصوت", "تغيير إعدادات الصوت", "فحص IC الصوت"]',
 '["تغيير إعدادات الصوت من PCM إلى Bitstream", "إعادة ضبط المصنع"]',
 '["استبدال IC الصوت", "فحص واستبدال المكثفات حول IC الصوت"]',
 '["كابل صوت", "ملتيميتر", "IC صوت بديل"]',
 'متوسط', 25, 85),

-- أعطال الريموت
('remote', 'الريموت كنترول لا يعمل', 'light',
 '["الجهاز لا يستجيب للريموت", "بعض الأزرار لا تعمل"]',
 '["بطاريات فارغة", "حساس الريموت تالف", "عطل في الريموت نفسه"]',
 '["تغيير البطاريات", "تنظيف حساس الريموت", "فحص الريموت بكاميرا الجوال"]',
 '["لا يوجد حل برمجي"]',
 '["استبدال حساس IR", "تنظيف نقاط التلامس في الريموت", "استبدال الريموت"]',
 '["بطاريات AAA", "كحول للتنظيف", "قطن", "ريموت بديل"]',
 'مبتدئ', 10, 95),

-- أعطال الشاشة الأمامية
('display', 'الشاشة الأمامية لا تعمل', 'light',
 '["الشاشة الأمامية مطفية", "لا تظهر أي معلومات"]',
 '["عطل في شاشة العرض", "فيوز الشاشة محروق", "كابل الشاشة مفصول"]',
 '["فحص توصيل كابل الشاشة", "فحص فيوز الشاشة", "استبدال الشاشة"]',
 '["لا يوجد حل برمجي"]',
 '["استبدال شاشة العرض", "استبدال فيوز الشاشة", "إعادة لحام توصيلات الشاشة"]',
 '["ملتيميتر", "كاوية لحام", "شاشة بديلة", "فيوز"]',
 'متوسط', 20, 80),

-- أعطال USB
('usb', 'منفذ USB لا يعمل', 'medium',
 '["الفلاشة لا تظهر", "الجهاز لا يتعرف على USB", "خطأ في قراءة الملفات"]',
 '["منفذ USB تالف", "عطل في IC USB", "فلاشة غير متوافقة"]',
 '["تجربة فلاشة أخرى", "تهيئة الفلاشة FAT32", "فحص فولت USB (5V)"]',
 '["تحديث السوفتوير"]',
 '["استبدال منفذ USB", "فحص واستبدال IC USB", "فحص الفيوز الخاص بـ USB"]',
 '["ملتيميتر", "فلاشة USB", "كاوية لحام", "منفذ USB بديل"]',
 'متوسط', 30, 75);

-- =====================================================
-- إدخال ملفات قنوات جاهزة
-- =====================================================
INSERT OR IGNORE INTO channel_lists (name, region, satellite_count, channel_count, compatible_models, updated_date) VALUES
('القنوات العربية - مارس 2026', 'عربي', 8, 3500, 'Starsat, Tiger, Truman, Mediastar', '2026-03-15'),
('القنوات الأوروبية - أبريل 2026', 'أوروبي', 12, 5000, 'Starsat, Geant, Galaxy', '2026-04-01'),
('باقة بي إن سبورت', 'عربي', 3, 150, 'BeIN, Humax', '2026-04-10'),
('القنوات الرياضية العالمية', 'عالمي', 15, 800, 'جميع الأجهزة', '2026-04-05');

-- =====================================================
-- إدخال دروس وشروحات
-- =====================================================
INSERT OR IGNORE INTO tutorials (title_ar, category, difficulty, content, required_tools, steps) VALUES
('كيفية تحميل سوفتوير عن طريق USB', 'flashing', 'مبتدئ',
 'شرح كامل لطريقة تحميل السوفتوير باستخدام فلاشة USB لجميع أنواع الرسيفرات',
 '["فلاشة USB", "ملف السوفتوير المناسب", "كمبيوتر"]',
 '["1. حمل ملف السوفتوير المناسب لجهازك", "2. انسخ الملف إلى الفلاشة (يجب أن يكون باسم update.bin أو factory.bin)", "3. افصل الكهرباء عن الرسيفر", "4. أدخل الفلاشة في المنفذ الأمامي", "5. شغل الرسيفر وانتظر حتى تظهر رسالة التحديث", "6. لا تفصل الكهرباء حتى يكتمل التحديث"]'),

('استخدام برنامج AliFlash Tool', 'flashing', 'متقدم',
 'شرح استخدام برنامج AliFlash Tool لتحميل السوفتوير والبوت لودر',
 '["كابل RS232 to USB", "برنامج AliFlash Tool", "ملف البوت لودر والسوفتوير", "كمبيوتر"]',
 '["1. ثبت برنامج AliFlash Tool", "2. وصل كابل RS232 بين الرسيفر والكمبيوتر", "3. افتح البرنامج واختر المنفذ الصحيح", "4. اختر ملف البوت لودر", "5. اضغط Start ثم شغل الرسيفر", "6. انتظر حتى يكتمل التحميل"]'),

('كيفية فحص مكثفات الباور سبلاي', 'repair', 'متوسط',
 'شرح طريقة فحص وتغيير المكثفات التالفة في بوردة الباور',
 '["ملتيميتر", "كاوية لحام", "مكثفات بديلة", "مفك"]',
 '["1. افصل الكهرباء وافتح غطاء الرسيفر", "2. افحص المكثفات بصرياً (أي انتفاخ أو تسريب)", "3. استخدم الملتيميتر لقياس المكثفات", "4. انزع المكثف التالف واستبدله بآخر بنفس القيمة", "5. تأكد من القطبية الصحيحة", "6. أعد تجميع الجهاز وجربه"]'),

('حل مشكلة تعليق الجهاز على BOOT', 'repair', 'متقدم',
 'حلول متكاملة لمشكلة تعليق الرسيفر على شاشة البداية',
 '["فلاشة USB", "كابل RS232", "برنامج فلاش", "ملتيميتر"]',
 '["1. جرب الدخول لوضع Recovery (اضغط Menu مع التشغيل)", "2. حمل سوفتوير جديد عن طريق USB", "3. إذا لم ينجح، استخدم RS232 لتحميل البوت لودر", "4. افحص فولتات الباور سبلاي", "5. افحص المكثفات حول المعالج والذاكرة", "6. استبدل الفلاشة الداخلية إذا لزم الأمر"]');

-- =====================================================
-- مؤشرات للبحث السريع
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_receiver_repairs_category ON receiver_repairs(category);
CREATE INDEX IF NOT EXISTS idx_receiver_repairs_severity ON receiver_repairs(severity);
CREATE INDEX IF NOT EXISTS idx_receiver_repairs_difficulty ON receiver_repairs(difficulty_level);
CREATE INDEX IF NOT EXISTS idx_receiver_models_brand ON receiver_models(brand_id);
CREATE INDEX IF NOT EXISTS idx_error_codes_brand ON error_codes(receiver_brand_id);
CREATE INDEX IF NOT EXISTS idx_software_model ON receiver_software(model_id);
