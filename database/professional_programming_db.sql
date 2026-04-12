-- =====================================================
-- SAT FINDER PRO AI - قاعدة بيانات البرمجة الاحترافية
-- تشمل: برمجة الرسيفرات، الواي فاي، الكارت، الاشتراكات
-- =====================================================

-- =====================================================
-- جدول أنواع الشرائح (Chipsets) التفصيلي
-- =====================================================
CREATE TABLE IF NOT EXISTS chipsets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    manufacturer VARCHAR(50) NOT NULL, -- Ali, GX, Novatek, MTK, Amlogic, Hisilicon
    model VARCHAR(50) NOT NULL,
    cpu_cores INTEGER,
    cpu_freq VARCHAR(20),
    gpu VARCHAR(50),
    ram_support VARCHAR(50),
    flash_support VARCHAR(50),
    tuner_support VARCHAR(100),
    max_resolution VARCHAR(20), -- 1080p, 4K, 8K
    hevc_support BOOLEAN DEFAULT 0,
    av1_support BOOLEAN DEFAULT 0,
    hdr_support BOOLEAN DEFAULT 0,
    release_year INTEGER,
    is_current BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول برمجة البوت لودر (Bootloader Programming)
-- =====================================================
CREATE TABLE IF NOT EXISTS bootloader_programming (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chipset_id INTEGER NOT NULL,
    bootloader_version VARCHAR(50),
    bootloader_file VARCHAR(255),
    flash_tool_id INTEGER,
    pinout_config TEXT, -- توصيلات الأرجل
    baud_rate INTEGER DEFAULT 115200,
    flash_commands TEXT, -- أوامر الفلاش
    unlock_method TEXT, -- طريقة فتح البوت لودر
    test_points TEXT, -- نقاط الفحص
    jtag_support BOOLEAN DEFAULT 0,
    uart_support BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (chipset_id) REFERENCES chipsets(id),
    FOREIGN KEY (flash_tool_id) REFERENCES flash_tools(id)
);

-- =====================================================
-- جدول السيرفرات والشيرنج (Servers & Sharing)
-- =====================================================
CREATE TABLE IF NOT EXISTS sharing_servers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    server_name VARCHAR(100),
    protocol VARCHAR(20), -- CCCam, Newcamd, Mgcamd, Oscam
    host VARCHAR(255),
    port INTEGER,
    username VARCHAR(100),
    password VARCHAR(100),
    des_key VARCHAR(50),
    caid TEXT, -- CAIDs supported
    ident TEXT, -- Idents supported
    hop INTEGER DEFAULT 1,
    max_users INTEGER,
    status VARCHAR(20) DEFAULT 'active', -- active, down, banned
    uptime_percent DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول إعدادات Oscam المتقدمة
-- =====================================================
CREATE TABLE IF NOT EXISTS oscam_configs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    config_name VARCHAR(100) NOT NULL,
    config_type VARCHAR(20), -- server, user, dvbapi, reader
    content TEXT NOT NULL,
    description TEXT,
    compatible_devices TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول الكروت والاشتراكات (Cards & Subscriptions)
-- =====================================================
CREATE TABLE IF NOT EXISTS smart_cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    card_type VARCHAR(50), -- Irdeto, Viaccess, Nagravision, Conax, Cryptoworks, Seca
    caid VARCHAR(10),
    ident VARCHAR(10),
    provider_name VARCHAR(100),
    package_name VARCHAR(100),
    activation_method TEXT, -- طريقة التفعيل
    atr_code VARCHAR(100), -- Answer To Reset
    pairing_method TEXT, -- طريقة الاقتران
    boxkey_calculation TEXT, -- حساب BoxKey
    rsakey_calculation TEXT, -- حساب RSA Key
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول أعطال الواي فاي والاتصال
-- =====================================================
CREATE TABLE IF NOT EXISTS wifi_repairs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category VARCHAR(50), -- hardware, software, network
    title_ar VARCHAR(200) NOT NULL,
    symptoms TEXT,
    causes TEXT,
    solutions TEXT,
    software_fix TEXT,
    hardware_fix TEXT,
    chipset_affected TEXT, -- الشرائح المتأثرة
    driver_version VARCHAR(50),
    required_tools TEXT,
    difficulty_level VARCHAR(20),
    estimated_time INTEGER,
    success_rate INTEGER DEFAULT 85,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول أعطال الكارت والاشتراكات
-- =====================================================
CREATE TABLE IF NOT EXISTS card_repairs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category VARCHAR(50), -- pairing, activation, expiry, reader
    title_ar VARCHAR(200) NOT NULL,
    card_type VARCHAR(50),
    symptoms TEXT,
    causes TEXT,
    solutions TEXT,
    oscam_config TEXT,
    pairing_fix TEXT,
    required_tools TEXT,
    difficulty_level VARCHAR(20),
    estimated_time INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول ملفات القنوات المحولة (Converted Channel Lists)
-- =====================================================
CREATE TABLE IF NOT EXISTS channel_conversions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source_format VARCHAR(20), -- xml, json, txt, bin
    target_format VARCHAR(20), -- bin, xml, json
    conversion_tool VARCHAR(50),
    conversion_script TEXT,
    compatible_brands TEXT,
    instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول أدوات التعديل والهاك (Modding Tools)
-- =====================================================
CREATE TABLE IF NOT EXISTS modding_tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    purpose VARCHAR(200), -- الغرض من الأداة
    supported_devices TEXT,
    download_url TEXT,
    version VARCHAR(50),
    requires_root BOOLEAN DEFAULT 0,
    instructions TEXT,
    warnings TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول إعدادات الـ DNS و VPN
-- =====================================================
CREATE TABLE IF NOT EXISTS network_configs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    config_type VARCHAR(20), -- DNS, VPN, Proxy
    provider VARCHAR(100),
    server_address VARCHAR(255),
    port INTEGER,
    protocol VARCHAR(20), -- OpenVPN, WireGuard, L2TP, PPTP
    username VARCHAR(100),
    password VARCHAR(100),
    config_file TEXT,
    setup_instructions TEXT,
    working_status BOOLEAN DEFAULT 1,
    last_tested DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول تحديثات السوفتوير التلقائية
-- =====================================================
CREATE TABLE IF NOT EXISTS auto_updates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand_id INTEGER,
    model_pattern VARCHAR(100), -- نمط الموديل
    update_url TEXT,
    check_interval INTEGER DEFAULT 24, -- ساعات
    last_version VARCHAR(50),
    last_check DATE,
    auto_install BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_INCREMENT,
    FOREIGN KEY (brand_id) REFERENCES receiver_brands(id)
);

-- =====================================================
-- جدول أكواد التفعيل والفتح (Activation Codes)
-- =====================================================
CREATE TABLE IF NOT EXISTS activation_codes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand VARCHAR(50),
    purpose VARCHAR(100), -- فتح القنوات، تفعيل خصائص
    code_pattern VARCHAR(100), -- نمط الكود
    generation_method TEXT, -- طريقة التوليد
    valid_until DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول الثغرات والاستغلال (Exploits & Vulnerabilities)
-- =====================================================
CREATE TABLE IF NOT EXISTS exploits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cve_id VARCHAR(50), -- CVE number if exists
    title VARCHAR(200),
    affected_versions TEXT,
    exploit_type VARCHAR(50), -- RCE, Privilege Escalation, Info Disclosure
    exploit_code TEXT,
    patch_available BOOLEAN DEFAULT 0,
    patch_url TEXT,
    disclosure_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- جدول إعدادات IPTV المتقدمة
-- =====================================================
CREATE TABLE IF NOT EXISTS iptv_configs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player_name VARCHAR(50), -- STBEmu, IPTV Smarters, TiviMate
    portal_url TEXT,
    mac_address_format VARCHAR(20), -- 00:1A:79, 00:1E:B8
    user_agent TEXT,
    stalker_portal BOOLEAN DEFAULT 1,
    xtream_codes BOOLEAN DEFAULT 0,
    m3u_url TEXT,
    epg_url TEXT,
    time_shift_support BOOLEAN DEFAULT 0,
    catchup_support BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- إدخال بيانات الشرائح
-- =====================================================
INSERT OR IGNORE INTO chipsets (manufacturer, model, cpu_cores, cpu_freq, gpu, max_resolution, hevc_support, av1_support, hdr_support, release_year) VALUES
('Ali', 'M3511', 2, '800MHz', 'Mali-400', '1080p', 0, 0, 0, 2015),
('Ali', 'M3516', 4, '1.2GHz', 'Mali-450', '1080p', 1, 0, 0, 2017),
('Ali', 'M3521', 4, '1.5GHz', 'Mali-G31', '4K', 1, 0, 1, 2020),
('Ali', 'M3526', 4, '2.0GHz', 'Mali-G52', '4K', 1, 1, 1, 2023),
('GX', 'GX6605', 1, '550MHz', 'None', '1080p', 0, 0, 0, 2014),
('GX', 'GX6621', 2, '800MHz', 'Mali-400', '1080p', 0, 0, 0, 2016),
('GX', 'GX6628', 4, '1.2GHz', 'Mali-450', '1080p', 1, 0, 0, 2018),
('Novatek', 'NT78326', 2, '800MHz', 'None', '1080p', 0, 0, 0, 2015),
('Amlogic', 'S905X3', 4, '1.9GHz', 'Mali-G31', '4K', 1, 0, 1, 2019),
('Amlogic', 'S905X4', 4, '2.0GHz', 'Mali-G31', '4K', 1, 1, 1, 2021),
('Amlogic', 'S928X', 4, '2.0GHz', 'Mali-G57', '8K', 1, 1, 1, 2023),
('Hisilicon', 'Hi3798MV200', 4, '1.6GHz', 'Mali-450', '4K', 1, 0, 1, 2018),
('Hisilicon', 'Hi3798MV300', 4, '2.0GHz', 'Mali-T720', '4K', 1, 0, 1, 2020),
('MediaTek', 'MT8695', 4, '1.8GHz', 'PowerVR', '1080p', 0, 0, 0, 2017),
('MediaTek', 'MT8696', 4, '2.0GHz', 'PowerVR', '4K', 1, 0, 1, 2021);

-- =====================================================
-- إدخال إعدادات Oscam
-- =====================================================
INSERT OR IGNORE INTO oscam_configs (config_name, config_type, content, description) VALUES
('oscam.conf - أساسي', 'server', '[global]
logfile = /tmp/oscam.log
clienttimeout = 5000
fallbacktimeout = 2500
bindwait = 20
nice = -1
maxlogsize = 1000
waitforcards = 0
preferlocalcards = 1
dropdups = 1

[webif]
httpport = 8888
httpuser = admin
httppwd = admin
httpallowed = 127.0.0.1,192.168.0.0-192.168.255.255', 'إعدادات Oscam الأساسية مع WebIF'),

('oscam.server - CCCam', 'reader', '[reader]
label = cccam_server
protocol = cccam
device = server.ddns.net,12000
user = username
password = password
inactivitytimeout = 30
group = 1
cccversion = 2.3.2
ccckeepalive = 1', 'إعدادات قارئ CCCam'),

('oscam.server - Newcamd', 'reader', '[reader]
label = newcamd_server
protocol = newcamd
device = server.ddns.net,12000
key = 0102030405060708091011121314
user = username
password = password
group = 1', 'إعدادات قارئ Newcamd'),

('oscam.user - مستخدم', 'user', '[account]
user = user1
pwd = pass1
group = 1
uniq = 1
au = 1
keepalive = 1', 'إعدادات مستخدم Oscam'),

('oscam.dvbapi - DVBApi', 'dvbapi', '[dvbapi]
enabled = 1
au = 1
pmt_mode = 0
delayer = 60
user = localuser
boxtype = dreambox', 'إعدادات DVBApi لأجهزة Enigma2');

-- =====================================================
-- إدخال أعطال الواي فاي
-- =====================================================
INSERT OR IGNORE INTO wifi_repairs (category, title_ar, symptoms, causes, solutions, software_fix, hardware_fix, chipset_affected, difficulty_level, estimated_time, success_rate) VALUES

('hardware', 'شريحة الواي فاي لا تعمل نهائياً', '["الرسيفر لا يظهر شبكات واي فاي", "زر الواي فاي لا يستجيب", "عدم وجود إشارة واي فاي"]',
 '["تلف في شريحة الواي فاي", "فيوز الواي فاي محروق", "انفصال في توصيلات الشريحة"]',
 '["فحص فيوز الواي فاي", "قياس فولت الشريحة", "استبدال الشريحة"]',
 '["تحديث درايفر الواي فاي", "إعادة ضبط المصنع"]',
 '["استبدال شريحة الواي فاي (RTL8188/RTL8192/MT7601)", "فحص وإعادة لحام الأرجل", "استبدال فيوز الواي فاي"]',
 '["RTL8188, RTL8192, MT7601, AP6212, AP6255"]',
 'متقدم', 45, 70),

('software', 'الواي فاي متصل لكن لا يوجد إنترنت', '["الاتصال بالراوتر ناجح", "لا يمكن فتح أي موقع", "IP address صحيح"]',
 '["مشكلة في DNS", "إعدادات بوابة خاطئة", "حجب من مزود الخدمة"]',
 '["تغيير DNS إلى 8.8.8.8", "استخدام VPN", "فحص إعدادات Gateway"]',
 '["تغيير DNS يدوياً في الإعدادات", "تفعيل DHCP", "استخدام تطبيق VPN"]',
 '["لا يوجد حل هاردوير"]',
 '["جميع الشرائح"]',
 'مبتدئ', 15, 95),

('software', 'ضعف إشارة الواي فاي', '["الإشارة ضعيفة أو متقطعة", "سرعة الإنترنت بطيئة", "انقطاع متكرر"]',
 '["بعد المسافة عن الراوتر", "تداخل مع شبكات أخرى", "ضعف في أنتين الواي فاي"]',
 '["تغيير قناة الواي فاي في الراوتر", "تقريب الرسيفر من الراوتر", "استخدام مقوي إشارة"]',
 '["تغيير إعدادات الواي فاي إلى 2.4GHz بدل 5GHz", "تفعيل WiFi Power Save"]',
 '["استبدال أنتين الواي فاي بأخرى أقوى", "إضافة أنتين خارجي"]',
 '["جميع الشرائح"]',
 'مبتدئ', 20, 90),

('hardware', 'الرسيفر يعلق عند تشغيل الواي فاي', '["الجهاز يتجمد عند محاولة تشغيل الواي فاي", "إعادة تشغيل تلقائية"]',
 '["مشكلة في درايفر الواي فاي", "تعارض مع برامج أخرى", "ضعف في الباور سبلاي"]',
 '["تحديث السوفتوير", "إلغاء تثبيت التطبيقات المتعارضة", "فحص الباور سبلاي"]',
 '["تحميل درايفر واي فاي متوافق", "تحديث السوفتوير", "عمل فورمات"]',
 '["فحص مكثفات الباور", "استبدال الباور سبلاي"]',
 '["RTL8188, MT7601"]',
 'متوسط', 35, 80);

-- =====================================================
-- إدخال أعطال الكارت والاشتراكات
-- =====================================================
INSERT OR IGNORE INTO card_repairs (category, title_ar, card_type, symptoms, causes, solutions, oscam_config, pairing_fix, difficulty_level, estimated_time) VALUES

('pairing', 'الكارت لا يعمل في الرسيفر (مقترن بجهاز آخر)', 'جميع الأنواع',
 '["ظهور رسالة 'بطاقة غير صالحة'", "القنوات المشفرة لا تعمل", "الكارت يعمل في جهازه الأصلي"]',
 '["نظام الاقتران (Pairing) يمنع استخدام الكارت في أجهزة أخرى", "الكارت مربوط بـ BoxKey/Serial"]',
 '["استخراج BoxKey من الجهاز الأصلي", "استخدام Oscam مع الإعدادات الصحيحة", "تعديل CAID"]',
 '[reader]
label = card_reader
protocol = internal
device = /dev/sci0
caid = 0604
detect = cd
mhz = 500
cardmhz = 500
group = 1
emmcache = 1,3,2
boxid = 12345678',
 '["استخراج BoxKey باستخدام برامج خاصة", "تعديل oscam.server بإضافة boxkey", "استخدام برامج مشاركة البطاقة"]',
 'متقدم', 45),

('activation', 'الكارت غير مفعل', 'Irdeto, Viaccess',
 '["ظهور رسالة 'لا توجد حقوق'", "الكارت جديد أو لم يستخدم لفترة"]',
 '["انتهاء صلاحية التفعيل", "الكارت يحتاج تحديث EMM", "عدم استقبال إشارة التفعيل"]',
 '["ترك الرسيفر على قناة مشفرة لمدة 24 ساعة", "طلب تفعيل من المزود", "استخدام Oscam لاستقبال EMM"]',
 '[reader]
label = card_activation
protocol = internal
device = /dev/sci0
caid = 0604
detect = cd
group = 1
emmcache = 1,3,2
saveemm = 1
saveemm-unknown = 1',
 '["التأكد من استقبال إشارة EMM", "ترك الجهاز على قناة مشفرة 24-48 ساعة"]',
 'مبتدئ', 1440),

('reader', 'قارئ الكارت لا يتعرف على الكارت', 'جميع الأنواع',
 '["الكارت لا يظهر في Oscam", "رسالة 'no card found'", "الكارت لا يقرأ"]',
 '["تلف في قارئ الكارت", "الكارت متسخ", "توصيلات خاطئة", "مشكلة في درايفر القارئ"]',
 '["تنظيف الشريحة الذهبية", "فحص توصيلات القارئ", "استبدال القارئ", "تحديث درايفر القارئ"]',
 '[reader]
label = card_reader
protocol = internal
device = /dev/sci0
autospeed = 0
mhz = 500
cardmhz = 500',
 '["استخدام قارئ خارجي (Smargo, Omnikey)", "تنظيف نقاط التلامس", "استبدال القارئ الداخلي"]',
 'متوسط', 30),

('expiry', 'انتهاء صلاحية الاشتراك', 'جميع الأنواع',
 '["ظهور رسالة 'انتهت الصلاحية'", "القنوات كانت تعمل وتوقفت"]',
 '["انتهاء مدة الاشتراك", "عدم تجديد الاشتراك"]',
 '["تجديد الاشتراك من المزود", "التحقق من تاريخ الصلاحية في Oscam"]',
 '["استخدام WebIF لمعرفة تاريخ الصلاحية"]',
 '["لا يوجد حل هاردوير - يجب تجديد الاشتراك"]',
 'مبتدئ', 10),

('nagra', 'مشاكل كروت Nagravision (N3)', 'Nagravision',
 '["القنوات لا تفتح رغم وجود كارت", "رسالة 'خدمة غير مصرح بها'"]',
 '["نظام Nagra 3 يتطلب RSA Key", "الكارت مقترن بـ ROM", "تحديثات أمنية"]',
 '["استخدام Oscam مع RSA Key", "تعديل oscam.server", "استخدام ملفات rom"]',
 '[reader]
label = nagra_card
protocol = internal
device = /dev/sci0
caid = 1811
detect = cd
mhz = 450
cardmhz = 2700
group = 1
rsakey = A92DA72FEEAC...
boxkey = 11223344',
 '["استخراج RSA Key", "استخدام نسخة Oscam معدلة"]',
 'متقدم', 60);

-- =====================================================
-- إدخال إعدادات IPTV
-- =====================================================
INSERT OR IGNORE INTO iptv_configs (player_name, portal_url, mac_address_format, user_agent, stalker_portal) VALUES
('STBEmu', 'http://portal.example.com/c', '00:1A:79', 'Mozilla/5.0 (QtEmbedded; U; Linux; C)', 1),
('IPTV Smarters', 'http://xtream.example.com', '00:1E:B8', 'IPTVSmartersPlayer', 0),
('TiviMate', 'http://portal.example.com', '00:1A:79', 'TiviMate/4.0', 1),
('OTT Navigator', 'http://xtream.example.com', '00:1A:79', 'OTT Navigator', 0);

-- =====================================================
-- إدخال أدوات التعديل
-- =====================================================
INSERT OR IGNORE INTO modding_tools (name, purpose, supported_devices, requires_root, warnings) VALUES
('Channel Editor Pro', 'تعديل وتحرير ملفات القنوات', 'Starsat, Tiger, Truman', 0, 'احفظ نسخة احتياطية قبل التعديل'),
('Firmware Mod Kit', 'تعديل ملفات السوفتوير', 'Enigma2, Android', 1, 'قد يؤدي إلى تلف الجهاز'),
('Oscam Manager', 'إدارة إعدادات Oscam', 'جميع أجهزة Enigma2', 1, 'تأكد من صحة الإعدادات'),
('Key Editor', 'تعديل مفاتيح Biss و Constant CW', 'جميع الأجهزة', 0, 'المفاتيح تتغير باستمرار'),
('Logo Pack Creator', 'إنشاء شعارات للقنوات', 'Starsat, Tiger, Geant', 0, 'تأكد من حجم الصور المناسب'),
('Backup Tool', 'نسخ احتياطي كامل للجهاز', 'جميع الأجهزة', 1, 'لا تفصل الكهرباء أثناء النسخ');

-- =====================================================
-- إدخال إعدادات DNS و VPN
-- =====================================================
INSERT OR IGNORE INTO network_configs (config_type, provider, server_address, protocol, setup_instructions) VALUES
('DNS', 'Google DNS', '8.8.8.8', 'DNS', 'ادخل في إعدادات الشبكة: DNS1: 8.8.8.8, DNS2: 8.8.4.4'),
('DNS', 'Cloudflare', '1.1.1.1', 'DNS', 'ادخل في إعدادات الشبكة: DNS1: 1.1.1.1, DNS2: 1.0.0.1'),
('VPN', 'ProtonVPN', 'nl-free.protonvpn.com', 'OpenVPN', 'حمل ملف OpenVPN من الموقع الرسمي'),
('VPN', 'Windscribe', 'nl.windscribe.com', 'OpenVPN', 'استخدم اسم المستخدم وكلمة المرور من حسابك'),
('Proxy', 'Smart DNS Proxy', 'proxy.smartdns.com', 'HTTP', 'اعداد DNS مع الـ Proxy للحصول على أفضل أداء');

-- =====================================================
-- إدخال الثغرات المعروفة (للأغراض التعليمية)
-- =====================================================
INSERT OR IGNORE INTO exploits (title, affected_versions, exploit_type, patch_available, disclosure_date) VALUES
('ثغرة في تحديث Starsat عن طريق USB', 'Starsat 2000HD - 9000HD', 'Privilege Escalation', 1, '2018-05-15'),
('تجاوز كلمة مرور Tiger T-Series', 'Tiger T1 - T8', 'Authentication Bypass', 1, '2019-11-20'),
('استخراج مفاتيح Enigma2', 'Enigma2 قبل 2021', 'Info Disclosure', 1, '2020-03-10'),
('ثغرة WebIF في Oscam', 'Oscam قبل r11701', 'RCE', 1, '2022-08-05');

-- =====================================================
-- مؤشرات للبحث السريع
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_chipsets_manufacturer ON chipsets(manufacturer);
CREATE INDEX IF NOT EXISTS idx_chipsets_model ON chipsets(model);
CREATE INDEX IF NOT EXISTS idx_wifi_repairs_category ON wifi_repairs(category);
CREATE INDEX IF NOT EXISTS idx_wifi_repairs_chipset ON wifi_repairs(chipset_affected);
CREATE INDEX IF NOT EXISTS idx_card_repairs_category ON card_repairs(category);
CREATE INDEX IF NOT EXISTS idx_card_repairs_type ON card_repairs(card_type);
CREATE INDEX IF NOT EXISTS idx_oscam_configs_type ON oscam_configs(config_type);
CREATE INDEX IF NOT EXISTS idx_network_configs_type ON network_configs(config_type);
CREATE INDEX IF NOT EXISTS idx_exploits_type ON exploits(exploit_type);
