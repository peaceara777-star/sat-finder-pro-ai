-- =====================================================
-- SAT FINDER PRO AI - مخطط قاعدة البيانات العلائقية
-- =====================================================

-- جدول الأقمار الصناعية
CREATE TABLE IF NOT EXISTS satellites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name_ar VARCHAR(100) NOT NULL,
    name_en VARCHAR(100),
    orbital_position VARCHAR(20) NOT NULL, -- مثال: 7.0°W
    region VARCHAR(50), -- عربي، أوروبي، آسيوي
    coverage TEXT,
    launch_date DATE,
    status VARCHAR(20) DEFAULT 'active', -- active, inactive, planned
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول الترددات
CREATE TABLE IF NOT EXISTS frequencies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    satellite_id INTEGER NOT NULL,
    channel_name_ar VARCHAR(200) NOT NULL,
    channel_name_en VARCHAR(200),
    frequency INTEGER NOT NULL, -- MHz
    polarization VARCHAR(1) NOT NULL, -- V, H, L, R
    symbol_rate INTEGER NOT NULL, -- kS/s
    fec VARCHAR(10) DEFAULT 'Auto', -- FEC مثل 3/4, 5/6
    modulation VARCHAR(20) DEFAULT 'DVB-S2', -- DVB-S, DVB-S2
    category VARCHAR(50), -- أخبار، رياضة، ترفيه، دينية، إلخ
    language VARCHAR(50) DEFAULT 'العربية',
    encrypted BOOLEAN DEFAULT 0,
    encryption_system VARCHAR(50), -- Irdeto, Viaccess, etc.
    is_hd BOOLEAN DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    verified_by VARCHAR(100),
    verified_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (satellite_id) REFERENCES satellites(id) ON DELETE CASCADE
);

-- جدول باقات القنوات
CREATE TABLE IF NOT EXISTS bouquets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    satellite_id INTEGER NOT NULL,
    provider VARCHAR(100),
    total_channels INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (satellite_id) REFERENCES satellites(id) ON DELETE CASCADE
);

-- جدول ربط الترددات بالباقات
CREATE TABLE IF NOT EXISTS bouquet_frequencies (
    bouquet_id INTEGER NOT NULL,
    frequency_id INTEGER NOT NULL,
    channel_number INTEGER,
    PRIMARY KEY (bouquet_id, frequency_id),
    FOREIGN KEY (bouquet_id) REFERENCES bouquets(id) ON DELETE CASCADE,
    FOREIGN KEY (frequency_id) REFERENCES frequencies(id) ON DELETE CASCADE
);

-- جدول الأعطال والإصلاحات
CREATE TABLE IF NOT EXISTS repairs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category VARCHAR(50) NOT NULL, -- signal, video, audio, lnb, receiver, installation, weather
    title_ar VARCHAR(200) NOT NULL,
    title_en VARCHAR(200),
    severity VARCHAR(20) DEFAULT 'medium', -- critical, medium, light
    causes TEXT, -- أسباب المشكلة (مفصولة بفواصل أو JSON)
    solutions TEXT, -- الحلول (مفصولة بفواصل أو JSON)
    tools TEXT, -- الأدوات المطلوبة
    estimated_time INTEGER, -- الوقت المقدر بالدقائق
    difficulty_level VARCHAR(20) DEFAULT 'متوسط', -- مبتدئ، متوسط، متقدم
    views_count INTEGER DEFAULT 0,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول المواقع الجغرافية (للبوصلة)
CREATE TABLE IF NOT EXISTS locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city_ar VARCHAR(100) NOT NULL,
    city_en VARCHAR(100),
    country_ar VARCHAR(100),
    country_en VARCHAR(100),
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    timezone VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول زوايا التوجيه لكل قمر حسب الموقع
CREATE TABLE IF NOT EXISTS satellite_angles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    satellite_id INTEGER NOT NULL,
    location_id INTEGER NOT NULL,
    azimuth DECIMAL(6, 2), -- زاوية السمت
    elevation DECIMAL(6, 2), -- زاوية الارتفاع
    lnb_skew DECIMAL(6, 2), -- زاوية لف LNB
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(satellite_id, location_id),
    FOREIGN KEY (satellite_id) REFERENCES satellites(id) ON DELETE CASCADE,
    FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE
);

-- جدول سجل التحديثات
CREATE TABLE IF NOT EXISTS update_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    table_name VARCHAR(50),
    record_id INTEGER,
    action VARCHAR(20), -- INSERT, UPDATE, DELETE
    user_name VARCHAR(100),
    changes TEXT, -- JSON of changes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول المستخدمين (للوحة الإدارية)
CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    role VARCHAR(20) DEFAULT 'editor', -- admin, editor, viewer
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول إحصائيات الاستخدام
CREATE TABLE IF NOT EXISTS usage_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATE NOT NULL,
    satellite_views INTEGER DEFAULT 0,
    frequency_searches INTEGER DEFAULT 0,
    repair_views INTEGER DEFAULT 0,
    ai_queries INTEGER DEFAULT 0,
    compass_uses INTEGER DEFAULT 0,
    UNIQUE(date)
);

-- =====================================================
-- المؤشرات لتحسين الأداء
-- =====================================================

CREATE INDEX idx_freq_satellite ON frequencies(satellite_id);
CREATE INDEX idx_freq_category ON frequencies(category);
CREATE INDEX idx_freq_encrypted ON frequencies(encrypted);
CREATE INDEX idx_freq_frequency ON frequencies(frequency);
CREATE INDEX idx_repairs_category ON repairs(category);
CREATE INDEX idx_repairs_severity ON repairs(severity);
CREATE INDEX idx_sat_angles_sat ON satellite_angles(satellite_id);
CREATE INDEX idx_sat_angles_loc ON satellite_angles(location_id);

-- =====================================================
-- إدخال بيانات أولية
-- =====================================================

-- الأقمار الصناعية
INSERT OR IGNORE INTO satellites (name_ar, name_en, orbital_position, region, status) VALUES
('نايل سات', 'Nilesat', '7.0°W', 'عربي', 'active'),
('عرب سات', 'Arabsat', '26.0°E', 'عربي', 'active'),
('هوت بيرد', 'Hotbird', '13.0°E', 'أوروبي', 'active'),
('يوتلسات', 'Eutelsat', '7.0°E', 'أوروبي', 'active'),
('أسترا', 'Astra', '19.2°E', 'أوروبي', 'active'),
('تركسات', 'Turksat', '42.0°E', 'آسيوي', 'active'),
('ياه سات', 'Yahsat', '52.5°E', 'عربي', 'active'),
('بدر', 'Badr', '26.0°E', 'عربي', 'active'),
('إنتلسات', 'Intelsat', '45.0°W', 'أمريكي', 'active'),
('ثور', 'Thor', '0.8°W', 'أوروبي', 'active');

-- ترددات نايل سات
INSERT OR IGNORE INTO frequencies (satellite_id, channel_name_ar, frequency, polarization, symbol_rate, category, encrypted, is_hd) VALUES
(1, 'الجزيرة', 10971, 'V', 27500, 'أخبار', 0, 0),
(1, 'MBC 1', 11470, 'V', 27500, 'ترفيه', 0, 0),
(1, 'MBC 2', 11470, 'V', 27500, 'أفلام', 0, 0),
(1, 'MBC 3', 11470, 'V', 27500, 'أطفال', 0, 0),
(1, 'MBC 4', 11470, 'V', 27500, 'ترفيه', 0, 0),
(1, 'BeIN Sports News', 11013, 'H', 27500, 'رياضة', 1, 1),
(1, 'الجزيرة الإنجليزية', 10971, 'V', 27500, 'أخبار', 0, 0),
(1, 'العربية', 11747, 'V', 27500, 'أخبار', 0, 0),
(1, 'الحدث', 11747, 'V', 27500, 'أخبار', 0, 0),
(1, 'Sky News عربية', 11977, 'V', 27500, 'أخبار', 0, 0);

-- ترددات عرب سات
INSERT OR IGNORE INTO frequencies (satellite_id, channel_name_ar, frequency, polarization, symbol_rate, category, encrypted, is_hd) VALUES
(2, 'Rotana Cinema', 11766, 'H', 27500, 'أفلام', 1, 1),
(2, 'Rotana Classic', 11766, 'H', 27500, 'أفلام', 1, 0),
(2, 'Rotana Music', 11766, 'H', 27500, 'موسيقى', 1, 0),
(2, 'Rotana Khalijia', 11766, 'H', 27500, 'منوعات', 1, 0),
(2, 'SSC Sports 1', 12418, 'H', 27500, 'رياضة', 1, 1),
(2, 'SSC Sports 2', 12418, 'H', 27500, 'رياضة', 1, 1);

-- ترددات هوت بيرد
INSERT OR IGNORE INTO frequencies (satellite_id, channel_name_ar, frequency, polarization, symbol_rate, category, encrypted, is_hd) VALUES
(3, 'Euronews', 12539, 'H', 27500, 'أخبار', 0, 0),
(3, 'BBC World News', 12539, 'H', 27500, 'أخبار', 0, 0),
(3, 'France 24', 12539, 'H', 27500, 'أخبار', 0, 0),
(3, 'DW', 12539, 'H', 27500, 'أخبار', 0, 0);

-- الأعطال والإصلاحات
INSERT OR IGNORE INTO repairs (category, title_ar, severity, causes, solutions, tools, difficulty_level) VALUES
('signal', 'ضعف الإشارة أو تقطعها', 'medium', 
 '["سوء الأحوال الجوية", "عدم دقة توجيه الطبق", "وجود عوائق أمام الطبق", "تلف في LNB", "كابل إشارة تالف"]',
 '["أعد توجيه الطبق بدقة باستخدام جهاز قياس الإشارة", "تأكد من خلو المسار بين الطبق والقمر من أي عوائق", "افحص كابل الإشارة وتأكد من سلامة التوصيلات", "جرب استبدال LNB بآخر جديد", "تأكد من إعدادات LNB في الرسيفر"]',
 '["جهاز قياس إشارة", "مفك", "شريط عازل", "LNB احتياطي"]',
 'متوسط'),
('signal', 'لا توجد إشارة إطلاقاً', 'critical',
 '["انقطاع كامل في الكابل", "عطل كامل في LNB", "إعدادات خاطئة في الرسيفر", "الطبق موجه لقمر آخر"]',
 '["تأكد من توصيلات الكابل من الطبق إلى الرسيفر", "أعد تشغيل الرسيفر", "تأكد من إعدادات القمر والتردد في الرسيفر", "تأكد من إعدادات LNB (عادة 9750/10600)", "أعد توجيه الطبق باستخدام بوصلة وزاوية صحيحة"]',
 '["جهاز قياس إشارة", "بوصلة", "كابل احتياطي", "LNB احتياطي"]',
 'متوسط'),
('video', 'تقطع في الصورة', 'medium',
 '["ضعف الإشارة", "تداخل كهرومغناطيسي", "مشكلة في HDMI", "حرارة زائدة في الرسيفر"]',
 '["حسن استقبال الإشارة", "أبعد الأجهزة الكهربائية عن الرسيفر والكابلات", "جرب كابل HDMI آخر", "تأكد من تهوية الرسيفر"]',
 '["كابل HDMI", "جهاز قياس إشارة"]',
 'مبتدئ'),
('video', 'الصورة متجمدة أو بطيئة', 'light',
 '["ضعف الإشارة المؤقت", "ارتفاع حرارة الجهاز", "مشكلة في البث من المصدر"]',
 '["أعد تشغيل الرسيفر", "انتظر تحسن الإشارة", "تأكد من تهوية الجهاز", "جرب قناة أخرى للتأكد"]',
 '[]',
 'مبتدئ'),
('lnb', 'بعض الترددات لا تعمل', 'medium',
 '["عطل جزئي في LNB", "إعدادات LNB غير صحيحة", "مشكلة في Diseqc"]',
 '["تأكد من إعدادات LNB (Universal 9750-10600)", "جرب LNB آخر", "تأكد من إعدادات Diseqc إذا كنت تستخدم أكثر من LNB"]',
 '["LNB احتياطي", "جهاز قياس إشارة"]',
 'متوسط'),
('installation', 'صعوبة في توجيه الطبق', 'medium',
 '["عدم معرفة الزوايا الصحيحة", "عدم استخدام أدوات مساعدة", "موقع غير مناسب"]',
 '["استخدم تطبيق Sat Finder Pro AI لمعرفة الزوايا", "استخدم جهاز قياس إشارة", "تأكد من ثبات حامل الطبق", "ابدأ بتحريك الطبق ببطء أفقياً ثم عمودياً"]',
 '["جهاز قياس إشارة", "بوصلة", "مفتاح ربط", "مستوى مياه"]',
 'متقدم');

-- المواقع
INSERT OR IGNORE INTO locations (city_ar, country_ar, latitude, longitude) VALUES
('الرياض', 'السعودية', 24.7136, 46.6753),
('جدة', 'السعودية', 21.5433, 39.1728),
('القاهرة', 'مصر', 30.0444, 31.2357),
('دبي', 'الإمارات', 25.2048, 55.2708),
('الدار البيضاء', 'المغرب', 33.5731, -7.5898),
('الجزائر', 'الجزائر', 36.7538, 3.0588),
('تونس', 'تونس', 33.8869, 9.5375),
('الدوحة', 'قطر', 25.2854, 51.5310),
('الكويت', 'الكويت', 29.3759, 47.9774),
('مسقط', 'عمان', 23.5880, 58.3829);

-- مستخدم إداري افتراضي (كلمة المرور: admin123)
INSERT OR IGNORE INTO admin_users (username, password_hash, email, role) VALUES
('admin', '$2b$10$YourHashedPasswordHere', 'admin@satfinder.com', 'admin');
