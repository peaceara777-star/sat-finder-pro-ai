cd ~/sat_finder_webapp

cat > satellites_full_database.js << 'EOF'
// ============================================================
// قاعدة بيانات الأقمار الصناعية والأعطال - الإصدار النهائي الشامل
// Sat Finder Pro AI - Version 4.0.0 Final
// ============================================================

const SATELLITES_DATABASE = {
    arabic: [
        {
            id: 'nilesat_7w',
            name: 'نايل سات',
            nameEn: 'Nilesat',
            position: '7.0°W',
            longitude: 7.0,
            direction: 'W',
            coverage: 'الشرق الأوسط وشمال أفريقيا',
            operator: 'الشركة المصرية للأقمار الصناعية',
            launchYear: 1998,
            satellites: ['Nilesat 101', 'Nilesat 102', 'Nilesat 201', 'Nilesat 301'],
            beams: ['موجه', 'شامل'],
            frequencies: [
                { name: 'الجزيرة', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'الجزيرة مباشر', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'الجزيرة الإنجليزية', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'MBC 1', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'ترفيه', encrypted: false },
                { name: 'MBC 2', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'أفلام', encrypted: false },
                { name: 'MBC 3', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: false },
                { name: 'MBC 4', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'ترفيه', encrypted: false },
                { name: 'MBC Action', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'أكشن', encrypted: false },
                { name: 'MBC Drama', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'دراما', encrypted: false },
                { name: 'العربية', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'الحدث', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'روتانا سينما', freq: 11746, pol: 'V', sr: 27500, fec: '3/4', category: 'أفلام', encrypted: true },
                { name: 'روتانا كلاسيك', freq: 11746, pol: 'V', sr: 27500, fec: '3/4', category: 'أفلام', encrypted: true },
                { name: 'روتانا كوميدي', freq: 11746, pol: 'V', sr: 27500, fec: '3/4', category: 'كوميدي', encrypted: true },
                { name: 'روتانا دراما', freq: 11746, pol: 'V', sr: 27500, fec: '3/4', category: 'دراما', encrypted: true },
                { name: 'روتانا موسيقى', freq: 11746, pol: 'V', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: true },
                { name: 'روتانا خليجية', freq: 11746, pol: 'V', sr: 27500, fec: '3/4', category: 'خليجية', encrypted: true },
                { name: 'سكاي نيوز عربية', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'BBC Arabic', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'فرانس 24 عربي', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'DW عربية', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'الحرة', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'CNBC عربية', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'اقتصاد', encrypted: false },
                { name: 'بي إن سبورت 1', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true },
                { name: 'بي إن سبورت 2', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true },
                { name: 'بي إن سبورت 3', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true },
                { name: 'بي إن سبورت 4', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true },
                { name: 'بي إن سبورت 5', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true },
                { name: 'بي إن سبورت 6', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true },
                { name: 'بي إن سبورت 7', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true },
                { name: 'بي إن سبورت الإخبارية', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: false },
                { name: 'القاهرة والناس', freq: 11765, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'النهار', freq: 11785, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'صدى البلد', freq: 11785, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'DMC', freq: 11785, pol: 'V', sr: 27500, fec: '5/6', category: 'ترفيه', encrypted: false },
                { name: 'المحور', freq: 11765, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'الرحمة', freq: 10891, pol: 'H', sr: 27500, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'الناس', freq: 12054, pol: 'V', sr: 27500, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'القرآن الكريم', freq: 12054, pol: 'V', sr: 27500, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'السنة النبوية', freq: 12054, pol: 'V', sr: 27500, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'المجد', freq: 11958, pol: 'H', sr: 27500, fec: '3/4', category: 'دينية', encrypted: false },
                { name: 'طيور الجنة', freq: 11315, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: false },
                { name: 'كراميش', freq: 11315, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: false },
                { name: 'سبيستون', freq: 11315, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: false },
                { name: 'كوكب كمبليت', freq: 11315, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: false },
                { name: 'ناشيونال جيوغرافيك', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
                { name: 'ناشيونال جيوغرافيك أبوظبي', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: false },
                { name: 'ديسكفري', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
                { name: 'الجزيرة الوثائقية', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'وثائقي', encrypted: false },
                { name: 'الآن', freq: 12034, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'الغد', freq: 12034, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'روسيا اليوم', freq: 12207, pol: 'V', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'TRT عربي', freq: 12207, pol: 'V', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'i24 News', freq: 12207, pol: 'V', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'فوكس موفيز', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'أفلام', encrypted: true },
                { name: 'فوكس أكشن', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'أكشن', encrypted: true },
                { name: 'فوكس فاميلي', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'عائلي', encrypted: true },
                { name: 'ستار موفيز', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'أفلام', encrypted: true },
                { name: 'OSN Cinema', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'أفلام', encrypted: true },
                { name: 'OSN Action', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'أكشن', encrypted: true },
                { name: 'OSN Comedy', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'كوميدي', encrypted: true },
                { name: 'MTV', freq: 11526, pol: 'H', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: true },
                { name: 'VH1', freq: 11526, pol: 'H', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: true },
                { name: 'نيكلوديون', freq: 11526, pol: 'H', sr: 27500, fec: '3/4', category: 'أطفال', encrypted: true },
                { name: 'كرتون نتورك', freq: 11526, pol: 'H', sr: 27500, fec: '3/4', category: 'أطفال', encrypted: true },
                { name: 'بوميرانغ', freq: 11526, pol: 'H', sr: 27500, fec: '3/4', category: 'أطفال', encrypted: true },
                { name: 'ديزني', freq: 11526, pol: 'H', sr: 27500, fec: '3/4', category: 'أطفال', encrypted: true },
                { name: 'ديزني جونيور', freq: 11526, pol: 'H', sr: 27500, fec: '3/4', category: 'أطفال', encrypted: true },
                { name: 'قناة مصر', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'القناة الأولى المصرية', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'القناة الثانية المصرية', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'نايل دراما', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'دراما', encrypted: false },
                { name: 'نايل سينما', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'أفلام', encrypted: false },
                { name: 'نايل لايف', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'نايل سبورت', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'نايل كوميدي', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'كوميدي', encrypted: false },
                { name: 'نايل العائلة', freq: 11842, pol: 'V', sr: 27500, fec: '5/6', category: 'عائلي', encrypted: false },
                { name: 'اون تايم سبورت 1', freq: 11861, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'اون تايم سبورت 2', freq: 11861, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'اون تايم سبورت 3', freq: 11861, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'قناة الأهلي', freq: 12341, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: false },
                { name: 'قناة الزمالك', freq: 12341, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: false }
            ]
        },
        {
            id: 'arabsat_26e',
            name: 'عرب سات',
            nameEn: 'Arabsat',
            position: '26.0°E',
            longitude: 26.0,
            direction: 'E',
            coverage: 'الوطن العربي وأجزاء من أوروبا',
            operator: 'المؤسسة العربية للاتصالات الفضائية',
            launchYear: 1985,
            satellites: ['Arabsat 5A', 'Arabsat 5C', 'Arabsat 6A', 'Badr 4', 'Badr 5', 'Badr 6', 'Badr 7', 'Badr 8'],
            beams: ['موجه', 'شامل', 'EMENA', 'BSS'],
            frequencies: [
                { name: 'القناة السعودية', freq: 12149, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'SBC', freq: 12149, pol: 'H', sr: 27500, fec: '5/6', category: 'ترفيه', encrypted: false },
                { name: 'الإخبارية السعودية', freq: 12149, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'الرياضية السعودية 1', freq: 12149, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الرياضية السعودية 2', freq: 12149, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الرياضية السعودية 3', freq: 12149, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الرياضية السعودية 4', freq: 12149, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'السعودية قرآن', freq: 12054, pol: 'V', sr: 27500, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'السعودية سنة', freq: 12054, pol: 'V', sr: 27500, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'ثقافية', freq: 12149, pol: 'H', sr: 27500, fec: '5/6', category: 'ثقافية', encrypted: false },
                { name: 'إم بي سي برو سبورت', freq: 12380, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'SSC 1', freq: 12380, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'SSC 2', freq: 12380, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'SSC 3', freq: 12380, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'SSC 4', freq: 12380, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'SSC 5', freq: 12380, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'SSC Extra', freq: 12380, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'قناة الكويت', freq: 12523, pol: 'V', sr: 27500, fec: '3/4', category: 'حكومية', encrypted: false },
                { name: 'الكويت الرياضية', freq: 12523, pol: 'V', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: false },
                { name: 'الكويت بلس', freq: 12523, pol: 'V', sr: 27500, fec: '3/4', category: 'منوعات', encrypted: false },
                { name: 'تلفزيون البحرين', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'البحرين الرياضية', freq: 12226, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'تلفزيون قطر', freq: 12245, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'الكأس 1', freq: 12245, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الكأس 2', freq: 12245, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الكأس 3', freq: 12245, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الكأس 4', freq: 12245, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الكأس 5', freq: 12245, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'تلفزيون سلطنة عمان', freq: 12437, pol: 'V', sr: 27500, fec: '3/4', category: 'حكومية', encrypted: false },
                { name: 'عمان الرياضية', freq: 12437, pol: 'V', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: false },
                { name: 'تلفزيون الإمارات', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'دبي الرياضية 1', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'دبي الرياضية 2', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'دبي الرياضية 3', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'أبوظبي الرياضية 1', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'أبوظبي الرياضية 2', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'أبوظبي الرياضية 3', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'أبوظبي الرياضية 4', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'أبوظبي دراما', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'دراما', encrypted: false },
                { name: 'الإمارات', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'الشارقة', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'الشارقة الرياضية', freq: 11804, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'تلفزيون الأردن', freq: 12034, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'الأردن الرياضية', freq: 12034, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'رؤيا', freq: 12034, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'المملكة', freq: 12034, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'LBC', freq: 11938, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'LDC', freq: 11938, pol: 'V', sr: 27500, fec: '5/6', category: 'دراما', encrypted: false },
                { name: 'الجديد', freq: 11938, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'MTV لبنان', freq: 11938, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'تلفزيون لبنان', freq: 11938, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'المنار', freq: 11938, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'NBN', freq: 11938, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'OTV', freq: 11938, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'سوريا', freq: 12073, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'سوريا دراما', freq: 12073, pol: 'H', sr: 27500, fec: '5/6', category: 'دراما', encrypted: false },
                { name: 'سما', freq: 12073, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'نور الشام', freq: 12073, pol: 'H', sr: 27500, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'اليمن', freq: 12456, pol: 'V', sr: 27500, fec: '3/4', category: 'حكومية', encrypted: false },
                { name: 'اليمن اليوم', freq: 12456, pol: 'V', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'السعيدة', freq: 12456, pol: 'V', sr: 27500, fec: '3/4', category: 'منوعات', encrypted: false },
                { name: 'ليبيا الوطنية', freq: 12683, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'ليبيا الرياضية', freq: 12683, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الجزائرية', freq: 12245, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'الجزائرية 3', freq: 12245, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'الشروق', freq: 12245, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'النهار', freq: 12245, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'المغربية', freq: 11476, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'الرياضية المغربية', freq: 11476, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: '2M', freq: 11476, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'ميدي 1 تي في', freq: 11476, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'تونس 7', freq: 12360, pol: 'H', sr: 27500, fec: '3/4', category: 'حكومية', encrypted: false },
                { name: 'تونسنا', freq: 12360, pol: 'H', sr: 27500, fec: '3/4', category: 'منوعات', encrypted: false },
                { name: 'الحوار التونسي', freq: 12360, pol: 'H', sr: 27500, fec: '3/4', category: 'منوعات', encrypted: false },
                { name: 'نسمة', freq: 12360, pol: 'H', sr: 27500, fec: '3/4', category: 'منوعات', encrypted: false },
                { name: 'قناة السودان', freq: 12562, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'النيل الأزرق', freq: 12562, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'الصومال', freq: 12562, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'العراقية', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'العراقية الرياضية', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'الشرقية', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'الرافدين', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'الفلوجة', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'آسيا سات', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'كردستان', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'كردستان 24', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'روداو', freq: 11785, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'فلسطين', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'فلسطين اليوم', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'الأقصى', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'القدس', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'معاً', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false }
            ]
        }
    ]
};

// ============================================================
// قاعدة بيانات الأعطال والإصلاحات - الإصدار النهائي الشامل
// ============================================================

const REPAIR_DATABASE = {
    // مشاكل الإشارة
    signal: {
        'no_signal': {
            title: '🚫 لا توجد إشارة',
            severity: 'حرج',
            causes: [
                'انقطاع الكيبل أو تلفه',
                'تلف وحدة LNB',
                'اتجاه الطبق غير صحيح',
                'عائق أمام الطبق (شجرة، مبنى، جدار)',
                'عطل في وحدة التغذية بالرسيفر',
                'فصل التيار الكهربائي عن LNB',
                'التردد المدخل غير صحيح',
                'دخول ماء إلى الكيبل أو LNB',
                'تلف في منفذ LNB بالرسيفر',
                'عدم توافق LNB مع الرسيفر'
            ],
            solutions: [
                'فحص الكيبل من الرسيفر إلى LNB واستبداله إذا كان تالفاً',
                'فحص فيشة F-Type وتأكد من إحكام ربطها وعدم وجود تماس',
                'إعادة توجيه الطبق باستخدام البوصلة الذكية في التطبيق',
                'إزالة أي عوائق أمام الطبق أو تغيير موقع التركيب',
                'إعادة تشغيل الرسيفر (افصل الكهرباء 30 ثانية)',
                'فحص إعدادات التردد والاستقطاب ومعدل الترميز',
                'تجربة منفذ LNB آخر في الرسيفر',
                'استبدال LNB إذا كان تالفاً (يفضل Inverto أو Star Gold)',
                'فحص وحدة التغذية في الرسيفر (البور سبلاي)',
                'قياس فولتية LNB (يجب أن تكون 13V أو 18V)'
            ],
            tools: ['جهاز فحص الكيبل', 'جهاز قياس الإشارة (Sat Finder)', 'بوصلة', 'LNB جديد', 'كيبل RG6', 'فيش F-Type', 'مفك', 'شريط عازل', 'جهاز قياس الفولت']
        },
        'weak_signal': {
            title: '📶 ضعف الإشارة',
            severity: 'متوسط',
            causes: [
                'اتجاه الطبق غير دقيق (خطأ بضع درجات)',
                'حجم الطبق غير مناسب للمنطقة الجغرافية',
                'LNB ضعيف أو تالف أو رديء الجودة',
                'كيبل طويل جداً (أكثر من 50 متر)',
                'كيبل رديء الجودة (RG59 بدل RG6)',
                'عائق جزئي أمام الطبق (أغصان شجرة، حافة مبنى)',
                'ظروف جوية سيئة (أمطار غزيرة، ثلوج، غيوم كثيفة)',
                'عدم ضبط زاوية الاستقطاب (Skew/LNB Tilt)',
                'تردد LNB غير مضبوط في إعدادات الرسيفر',
                'وجود ماء أو رطوبة داخل الكيبل أو الفيش',
                'تآكل في الفيش أو الموصلات',
                'استخدام مقسم إشارة رديء'
            ],
            solutions: [
                'إعادة ضبط زاوية السمت والارتفاع بدقة باستخدام التطبيق',
                'استخدام طبق بحجم مناسب (يفضل 90 سم فأكثر للمناطق الحدودية)',
                'استبدال LNB بنوع عالي الجودة (Inverto Black Ultra, Star Gold)',
                'استخدام كيبل RG6 عالي الجودة وتقصير المسافة قدر الإمكان',
                'تركيب مقوي إشارة (Line Amplifier) للمسافات الطويلة',
                'إزالة العوائق أو تغيير موقع الطبق إلى مكان مفتوح',
                'انتظار تحسن الطقس (تأثير مؤقت)',
                'ضبط زاوية لف LNB حسب موقعك الجغرافي (موجود في التطبيق)',
                'ضبط تردد LNB في الرسيفر (Universal: 9750/10600)',
                'فحص وتجفيف الكيبل والفيش أو استبدالها',
                'تنظيف الموصلات بمنظف خاص',
                'استخدام مقسم إشارة عالي الجودة'
            ],
            tools: ['جهاز قياس الإشارة', 'بوصلة', 'LNB احترافي', 'كيبل RG6', 'مقوي إشارة', 'منظف موصلات', 'شريط عازل للماء']
        },
        'signal_drop': {
            title: '📉 تقطع الإشارة',
            severity: 'متوسط',
            causes: [
                'توصيلات غير محكمة (فيشة مرتخية)',
                'تداخل كهربائي من أجهزة قريبة',
                'مشكلة في مصدر الطاقة (البور سبلاي)',
                'ارتفاع حرارة LNB بسبب أشعة الشمس المباشرة',
                'وجود ماء أو رطوبة في الكيبل أو الفيش',
                'تلف جزئي في وحدة LNB',
                'تداخل شمسي (Solar Outage) - ظاهرة مؤقتة',
                'تشويش من أجهزة إلكترونية (راوتر، ميكروويف)',
                'تلف في الكيبل (قطع داخلي غير ظاهر)',
                'مشكلة في منظم الجهد الكهربائي'
            ],
            solutions: [
                'فحص جميع التوصيلات وإحكام ربطها يدوياً',
                'إبعاد الكيبل عن أسلاك الكهرباء والأجهزة الإلكترونية',
                'فحص مصدر طاقة الرسيفر واستبداله إذا كان تالفاً',
                'تظليل LNB من أشعة الشمس المباشرة بغطاء واقي',
                'فحص الكيبل واستبدال الأجزاء التالفة',
                'استبدال LNB بآخر جديد',
                'انتظار انتهاء فترة التداخل الشمسي (10-15 دقيقة)',
                'استخدام كيبل مزدوج الدرع (Double Shield)',
                'فحص الكيبل بجهاز فحص الاستمرارية',
                'تركيب منظم جهد كهربائي (Stabilizer)'
            ],
            tools: ['جهاز فحص الكيبل', 'LNB جديد', 'عازل شمسي للـ LNB', 'كيبل مزدوج الدرع', 'فيش F-Type', 'منظم جهد']
        },
        'interference': {
            title: '📡 تداخل الإشارات',
            severity: 'متوسط',
            causes: [
                'تداخل من قمر صناعي مجاور',
                'إشارات 4G/5G قريبة من ترددات LNB',
                'أجهزة إلكترونية قريبة تسبب تشويش',
                'انعكاس الإشارة من أسطح معدنية',
                'LNB رديء لا يعزل الإشارات المجاورة'
            ],
            solutions: [
                'ضبط زاوية الطبق بدقة أكبر',
                'تركيب فلتر 4G/5G على مدخل LNB',
                'إبعاد الأجهزة الإلكترونية عن الكيبل',
                'تغيير موقع الطبق قليلاً',
                'استبدال LNB بنوع عالي الجودة مع PLL',
                'استخدام طبق بعمق بؤري أكبر'
            ],
            tools: ['فلتر 4G/5G', 'LNB PLL', 'جهاز قياس الطيف', 'طبق أكبر']
        }
    },
    
    // مشاكل الصورة
    video: {
        'pixelation': {
            title: '🔲 تقطيع الصورة (تكسير/بكسلة)',
            severity: 'متوسط',
            causes: [
                'ضعف الإشارة أقل من 50%',
                'مشكلة في التردد أو الترميز (Symbol Rate)',
                'LNB تالف أو حساسيته منخفضة',
                'كيبل رديء يسبب فقد في الإشارة',
                'مشكلة في معالج الرسيفر',
                'ارتفاع حرارة الرسيفر',
                'تداخل كهرومغناطيسي',
                'الطبق صغير جداً للمنطقة'
            ],
            solutions: [
                'تحسين قوة الإشارة بضبط الطبق (استهدف 70%+)',
                'التأكد من صحة إعدادات التردد ومعدل الترميز',
                'استبدال LNB بنوع عالي الحساسية',
                'استبدال الكيبل بنوع RG6 عالي الجودة',
                'إعادة تشغيل الرسيفر (Cold Reboot)',
                'تهوية الرسيفر جيداً (لا تضعه فوق أجهزة أخرى)',
                'إبعاد الكيبل عن مصادر التداخل',
                'استخدام طبق بحجم أكبر'
            ],
            tools: ['جهاز قياس الإشارة', 'LNB عالي الحساسية', 'كيبل RG6', 'مروحة تبريد']
        },
        'freezing': {
            title: '⏸️ توقف الصورة (تعليق/تجمد)',
            severity: 'متوسط',
            causes: [
                'ضعف الإشارة',
                'مشكلة في البث من المصدر',
                'ارتفاع حرارة الرسيفر',
                'سعة تخزين الرسيفر ممتلئة',
                'برنامج الرسيفر (سوفت وير) قديم',
                'مشكلة في الهارد ديسك (لأجهزة التسجيل)',
                'ذاكرة RAM ممتلئة',
                'القناة مشفرة والإشارة ضعيفة'
            ],
            solutions: [
                'تحسين الإشارة بضبط الطبق',
                'التحقق من القنوات الأخرى (إذا الكل معلق فالمشكلة منك)',
                'فصل الرسيفر 30 ثانية وإعادة تشغيله',
                'تهوية الجهاز وتنظيفه من الغبار',
                'مسح الملفات المؤقتة والغير ضرورية',
                'تحديث سوفت وير الرسيفر من موقع الشركة',
                'فحص الهارد ديسك واستبداله إذا كان تالفاً',
                'إعادة ضبط المصنع (Factory Reset)'
            ],
            tools: ['ريموت كنترول', 'فلاشة لتحديث السوفت وير', 'هارد ديسك جديد', 'منفاخ هواء للتنظيف']
        },
        'black_screen': {
            title: '⬛ شاشة سوداء',
            severity: 'حرج',
            causes: [
                'القناة مشفرة وتحتاج اشتراك',
                'انتهاء صلاحية الاشتراك',
                'مشكلة في كيبل HDMI',
                'الرسيفر في وضع الاستعداد (Standby)',
                'تلف في مخرج الفيديو بالرسيفر',
                'إعدادات دقة العرض غير متوافقة مع التلفزيون',
                'تفعيل HDCP والحماية تمنع العرض',
                'تلف في مدخل HDMI بالتلفزيون'
            ],
            solutions: [
                'التأكد من حالة الاشتراك وصلاحية الباقة',
                'فحص كيبل HDMI واستبداله بآخر جديد',
                'تجربة منفذ HDMI آخر في التلفزيون',
                'الضغط على زر Power في الريموت (وليس Standby)',
                'تجربة كيبل AV (ثلاثي الألوان) كبديل',
                'تغيير دقة العرض في إعدادات الرسيفر إلى 1080i أو 720p',
                'تعطيل HDCP في إعدادات الرسيفر إن أمكن',
                'تجربة الرسيفر على تلفزيون آخر'
            ],
            tools: ['كيبل HDMI جديد', 'كيبل AV', 'ريموت كنترول']
        },
        'green_screen': {
            title: '🟢 شاشة خضراء',
            severity: 'متوسط',
            causes: [
                'مشكلة في HDMI Handshake (مصافحة)',
                'إعدادات دقة العرض غير متوافقة',
                'تلف في كيبل HDMI',
                'مشكلة في التلفزيون',
                'HDCP غير متوافق'
            ],
            solutions: [
                'فصل وإعادة توصيل كيبل HDMI بقوة',
                'تغيير دقة العرض في إعدادات الرسيفر',
                'استبدال كيبل HDMI بآخر عالي الجودة',
                'إعادة تشغيل التلفزيون والرسيفر معاً',
                'فصل الكهرباء عن الجهازين 5 دقائق'
            ],
            tools: ['كيبل HDMI جديد عالي الجودة']
        },
        'no_hd_signal': {
            title: '📺 القنوات HD لا تعمل',
            severity: 'متوسط',
            causes: [
                'الرسيفر لا يدعم HD',
                'كيبل HDMI رديء لا يدعم النطاق الترددي العالي',
                'التلفزيون لا يدعم دقة HD',
                'إعدادات الرسيفر على SD فقط',
                'القناة HD تحتاج اشتراك خاص'
            ],
            solutions: [
                'التأكد من أن الرسيفر يدعم HD (مكتوب عليه HD أو Full HD)',
                'استخدام كيبل HDMI 1.4 أو 2.0',
                'ضبط إعدادات الفيديو في الرسيفر على 1080i أو 1080p',
                'التأكد من دعم التلفزيون لدقة HD',
                'التحقق من الاشتراك في باقة HD'
            ],
            tools: ['كيبل HDMI 2.0', 'ريموت كنترول']
        }
    },
    
    // مشاكل الصوت
    audio: {
        'no_sound': {
            title: '🔇 لا يوجد صوت',
            severity: 'متوسط',
            causes: [
                'كتم الصوت مفعل (Mute)',
                'مشكلة في كيبل الصوت (بصري أو AUX)',
                'إعدادات الصوت في الرسيفر خاطئة',
                'القناة تبث بدون صوت (مؤقتاً)',
                'تلف في مخرج الصوت بالرسيفر',
                'مشكلة في نظام الصوت الخارجي'
            ],
            solutions: [
                'التأكد من إلغاء كتم الصوت ورفع مستوى الصوت',
                'فحص توصيلات الصوت (كيبل AUX أو بصري)',
                'تجربة قناة أخرى للتأكد',
                'تغيير إعدادات الصوت في الرسيفر (PCM/Bitstream)',
                'تجربة مخرج صوت آخر إن وجد',
                'فحص نظام الصوت الخارجي وإعداداته'
            ],
            tools: ['كيبل صوت', 'ريموت كنترول']
        },
        'audio_delay': {
            title: '⏱️ تأخر الصوت عن الصورة',
            severity: 'خفيف',
            causes: [
                'مشكلة في معالجة الإشارة',
                'إعدادات Audio Delay غير مضبوطة',
                'مشكلة في البث',
                'استخدام HDMI ARC',
                'نظام صوت خارجي يسبب تأخير'
            ],
            solutions: [
                'ضبط إعدادات Audio Delay في الرسيفر (جرب قيماً من 50-200ms)',
                'إعادة تشغيل الرسيفر',
                'تغيير القناة والعودة',
                'فصل وإعادة توصيل HDMI',
                'في نظام الصوت الخارجي: جرب وضع Direct أو Pure'
            ],
            tools: ['ريموت كنترول']
        },
        'audio_noise': {
            title: '🔊 تشويش أو طنين في الصوت',
            severity: 'متوسط',
            causes: [
                'تداخل كهربائي',
                'تأريض غير صحيح',
                'كيبل صوت تالف',
                'مشكلة في LNB تسبب تداخل',
                'قناة صوت مضبوطة على تردد خاطئ'
            ],
            solutions: [
                'إبعاد كيبل الصوت عن كيابل الكهرباء',
                'التأكد من التأريض الصحيح للرسيفر والتلفزيون',
                'استبدال كيبل الصوت',
                'فحص LNB والكيبل المحوري',
                'تغيير إعدادات القناة الصوتية (Audio Track)'
            ],
            tools: ['كيبل صوت جديد', 'جهاز فحص التأريض']
        }
    },
    
    // مشاكل LNB
    lnb: {
        'lnb_failure': {
            title: '📡 عطل كامل في LNB',
            severity: 'حرج',
            causes: [
                'تلف بسبب الصواعق',
                'دخول ماء إلى داخل LNB',
                'انتهاء العمر الافتراضي (3-5 سنوات)',
                'تماس كهربائي',
                'ارتفاع حرارة شديد',
                'عيوب تصنيع'
            ],
            solutions: [
                'استبدال LNB بآخر جديد',
                'تركيب واقي صواعق (Surge Protector)',
                'عزل الوصلات بشريط عازل للماء (Self-amalgamating Tape)',
                'استخدام LNB من ماركة موثوقة (Inverto, Star Gold, Technomate)',
                'تركيب غطاء واقي للـ LNB من الشمس والمطر',
                'فحص التوصيلات الأرضية'
            ],
            tools: ['LNB جديد', 'شريط عازل', 'واقي صواعق', 'غطاء LNB', 'جهاز فحص LNB']
        },
        'lnb_short': {
            title: '⚡ تماس كهربائي في LNB',
            severity: 'حرج',
            causes: [
                'دخول ماء إلى الفيشة أو الموصل',
                'تلف العازل في الكيبل',
                'تركيب خاطئ للفيشة (أسلاك متلامسة)',
                'تآكل في الموصلات بسبب الرطوبة',
                'تلف في وحدة التغذية بالرسيفر'
            ],
            solutions: [
                'فصل الكيبل وتنظيف الفيشة جيداً',
                'قص جزء من الكيبل وتركيب فيشة F-Type جديدة',
                'استخدام شريط عازل للماء على الوصلة',
                'استبدال الكيبل بالكامل إذا كان متآكلاً',
                'فحص فولتية الرسيفر (يجب أن لا تتجاوز 18V)'
            ],
            tools: ['فيش F-Type', 'قاطع كيبل', 'شريط عازل', 'كيبل جديد', 'جهاز قياس الفولت']
        },
        'lnb_noise': {
            title: '📳 تشويش وضوضاء في الإشارة من LNB',
            severity: 'متوسط',
            causes: [
                'LNB رديء الجودة (صيني مقلد)',
                'تداخل من أجهزة إلكترونية قريبة',
                'عدم ثبات LNB في الحامل (اهتزاز)',
                'انعكاسات من أسطح معدنية قريبة',
                'تردد LNB غير مستقر (Local Oscillator Drift)'
            ],
            solutions: [
                'استبدال LNB بنوع عالي الجودة مع PLL (Phase-Locked Loop)',
                'إبعاد الكيبل عن مصادر التداخل (راوتر، هواتف)',
                'تثبيت LNB بإحكام باستخدام الرباطات',
                'تغيير موقع الطبق قليلاً لتجنب الانعكاسات',
                'استخدام LNB من نوع Universal PLL'
            ],
            tools: ['LNB PLL عالي الجودة', 'رباطات تثبيت', 'جهاز قياس الطيف']
        },
        'lnb_compatibility': {
            title: '🔄 LNB غير متوافق',
            severity: 'متوسط',
            causes: [
                'استخدام LNB Ku-Band مع قمر C-Band',
                'تردد LNB غير متوافق مع الرسيفر',
                'استخدام LNB Wideband مع رسيفر عادي',
                'استخدام LNB Universal مع نظام Unicable'
            ],
            solutions: [
                'التأكد من نوع القمر (Ku أو C) وشراء LNB المناسب',
                'ضبط تردد LNB الصحيح في إعدادات الرسيفر',
                'استخدام محول Wideband to Universal',
                'استبدال LNB بالنوع المتوافق مع النظام'
            ],
            tools: ['LNB متوافق', 'محول Wideband', 'دليل الترددات']
        }
    },
    
    // مشاكل الرسيفر
    receiver: {
        'receiver_boot': {
            title: '🔌 الرسيفر لا يعمل / لا يقلع',
            severity: 'حرج',
            causes: [
                'عطل في البور سبلاي (وحدة التغذية)',
                'تلف في الفلاشة الداخلية (البرنامج الثابت)',
                'مشكلة في زر الباور أو كيبل الكهرباء',
                'ارتفاع كهربائي أتلف مكونات داخلية',
                'تلف مكثفات البور سبلاي'
            ],
            solutions: [
                'فحص كيبل الكهرباء والمحول (Adapter)',
                'تجربة منفذ كهرباء آخر',
                'فصل الجهاز 30 دقيقة وإعادة توصيله',
                'فحص البور سبلاي واستبداله إذا لزم (سهل لمعظم الرسيفرات)',
                'فحص المكثفات واستبدال المنتفخة منها',
                'إرسال الجهاز للصيانة المتخصصة'
            ],
            tools: ['محول كهرباء احتياطي', 'جهاز فحص الفولت', 'مفك', 'مكثفات بديلة', 'كاوية لحام']
        },
        'receiver_hang': {
            title: '🔄 الرسيفر يعلق باستمرار',
            severity: 'متوسط',
            causes: [
                'ارتفاع حرارة الجهاز (سوء تهوية)',
                'ضعف الإشارة يسبب معالجة زائدة',
                'سوفت وير قديم أو غير مستقر',
                'ذاكرة ممتلئة (Flash/RAM)',
                'مشكلة في الهارد ديسك (قطاعات تالفة)',
                'فيروس في ملفات القنوات'
            ],
            solutions: [
                'تهوية الجهاز جيداً (ارفعه عن السطح)',
                'تحسين الإشارة لتقليل أخطاء المعالجة',
                'تحديث السوفت وير من موقع الشركة الرسمي',
                'مسح القنوات غير المستخدمة والملفات المؤقتة',
                'فحص الهارد ديسك على الكمبيوتر أو استبداله',
                'عمل فورمات كامل وإعادة تحميل القنوات'
            ],
            tools: ['فلاشة لتحديث السوفت وير', 'ريموت كنترول', 'هارد ديسك جديد', 'مروحة تبريد USB']
        },
        'receiver_remote': {
            title: '📱 الريموت كنترول لا يعمل',
            severity: 'خفيف',
            causes: [
                'بطاريات فارغة أو ضعيفة',
                'تلف في حساس IR في الرسيفر',
                'عائق بين الريموت والرسيفر',
                'تلف في الريموت نفسه (سقوط/رطوبة)',
                'تردد الريموت تغير'
            ],
            solutions: [
                'تغيير البطاريات بأخرى جديدة',
                'تنظيف حساس IR في الرسيفر بقطعة قماش ناعمة',
                'إزالة العوائق (زجاج، أبواب)',
                'تجربة ريموت بديل (Universal Remote)',
                'استخدام تطبيق ريموت على الهاتف (إذا كان الرسيفر يدعم)',
                'فحص الريموت بكاميرا الهاتف (يجب رؤية ضوء IR عند الضغط)'
            ],
            tools: ['بطاريات AAA', 'قطعة قماش للتنظيف', 'ريموت يونيفرسال', 'هاتف بكاميرا']
        },
        'receiver_update': {
            title: '💾 مشكلة في تحديث السوفت وير',
            severity: 'حرج',
            causes: [
                'ملف التحديث غير متوافق مع موديل الرسيفر',
                'انقطاع الكهرباء أثناء التحديث',
                'فلاشة تالفة أو بها Bad Sectors',
                'نفاذ مساحة التخزين المؤقتة',
                'نسخة السوفت وير تالفة'
            ],
            solutions: [
                'التأكد من تحميل الملف الصحيح لطراز الرسيفر بالضبط',
                'استخدام فلاشة مهيأة FAT32 (وليس NTFS)',
                'عدم فصل الكهرباء أبداً أثناء التحديث',
                'مسح ملفات غير ضرورية قبل التحديث',
                'استخدام خاصية Recovery Mode إذا فشل التحديث',
                'تحميل نسخة سابقة مستقرة (Stable Version)'
            ],
            tools: ['فلاشة USB', 'كمبيوتر لتحميل الملف', 'برنامج تهيئة الفلاشات']
        },
        'receiver_channels': {
            title: '📋 اختفاء القنوات',
            severity: 'متوسط',
            causes: [
                'مسح غير مقصود للقنوات',
                'تغيير ترددات القنوات من المصدر',
                'عطل في ذاكرة الرسيفر',
                'فصل الكهرباء المفاجئ',
                'تحديث سوفت وير تلقائي'
            ],
            solutions: [
                'عمل بحث تلقائي (Auto Scan) من جديد',
                'إدخال الترددات الجديدة يدوياً',
                'عمل فورمات للرسيفر وإعادة البحث',
                'استخدام خاصية Backup للقنوات',
                'تحديث قائمة القنوات من ملف خارجي'
            ],
            tools: ['فلاشة USB', 'ملف قنوات حديث', 'ريموت كنترول']
        }
    },
    
    // مشاكل التركيب
    installation: {
        'dish_alignment': {
            title: '📐 صعوبة في توجيه الطبق',
            severity: 'متوسط',
            causes: [
                'عدم معرفة الزوايا الصحيحة للموقع',
                'عدم استواء القاعدة (غير عمودية)',
                'رياح قوية تؤثر على الدقة',
                'عدم وجود رؤية واضحة للقمر',
                'استخدام بوصلة غير دقيقة',
                'القطب (Pole) غير عمودي تماماً'
            ],
            solutions: [
                'استخدام تطبيق Sat Finder Pro لحساب الزوايا بدقة',
                'التأكد من استواء القاعدة باستخدام ميزان ماء',
                'التركيب في يوم هادئ الرياح',
                'استخدام جهاز قياس الإشارة (Sat Finder)',
                'البدء بالاتجاه التقريبي ثم الضبط الدقيق بالميليمتر',
                'التأكد من عمودية القطب تماماً قبل تركيب الطبق'
            ],
            tools: ['بوصلة رقمية', 'ميزان ماء', 'جهاز قياس إشارة', 'مفاتيح ربط', 'تطبيق Sat Finder Pro']
        },
        'cable_routing': {
            title: '🔌 مشاكل تمديد الكيبل',
            severity: 'متوسط',
            causes: [
                'كيبل طويل جداً يضعف الإشارة (أكثر من 50 متر)',
                'ثني الكيبل بزاوية حادة (أقل من 90 درجة)',
                'مرور الكيبل قرب أسلاك كهرباء ذات جهد عالي',
                'عدم عزل الوصلات الخارجية من الماء',
                'استخدام كيبل رديء (نحاس مطلي وليس صلب)'
            ],
            solutions: [
                'استخدام مقوي إشارة (Line Amplifier) للمسافات الطويلة',
                'تجنب الثني الحاد للكيبل (اجعل الانحناءات دائرية)',
                'إبعاد الكيبل عن أسلاك الكهرباء مسافة 30 سم على الأقل',
                'عزل الوصلات الخارجية بشريط عازل للماء',
                'استخدام كيبل نحاس صلب (Solid Copper) وليس CCS'
            ],
            tools: ['مقوي إشارة', 'شريط عازل للماء', 'مشابك تثبيت', 'كيبل نحاس صلب', 'جهاز فحص الكيبل']
        },
        'multi_lnb': {
            title: '🛰️ مشاكل تركيب عدة LNB',
            severity: 'متقدم',
            causes: [
                'عدم ضبط المسافات بين LNB بدقة',
                'استخدام حامل غير مناسب لحجم الطبق',
                'تداخل بين LNB',
                'استخدام DiSEqC Switch رديء',
                'عدم ضبط زوايا Skew لكل LNB على حدة'
            ],
            solutions: [
                'استخدام حامل متعدد متوافق مع حجم وشكل الطبق',
                'ضبط المسافات بدقة حسب الأقمار المستهدفة (استخدم جدول المسافات)',
                'استخدام DiSEqC Switch عالي الجودة',
                'ضبط إعدادات DiSEqC في الرسيفر لكل قمر (Port 1,2,3,4)',
                'ضبط Skew لكل LNB على حدة'
            ],
            tools: ['حامل متعدد LNB', 'DiSEqC Switch', 'جهاز قياس إشارة', 'جدول المسافات بين الأقمار']
        },
        'motor_dish': {
            title: '⚙️ مشاكل الطبق المتحرك (Motor)',
            severity: 'متقدم',
            causes: [
                'عدم ضبط زاوية Declination بشكل صحيح',
                'المحرك لا يستجيب لأوامر DiSEqC',
                'حدود المحرك الشرقية/الغربية مضبوطة خطأ',
                'القطب غير عمودي',
                'المحرك عالق بسبب الصدأ'
            ],
            solutions: [
                'ضبط زاوية Declination حسب موقعك الجغرافي',
                'فحص كيبل DiSEqC والتوصيلات',
                'إعادة ضبط حدود المحرك (Software Limits)',
                'التأكد من عمودية القطب بالميزان',
                'تشحيم المحرك وتنظيفه من الصدأ',
                'إعادة تعيين المحرك (Reset Motor)'
            ],
            tools: ['ميزان ماء', 'جهاز قياس زوايا', 'شحم', 'ريموت كنترول']
        }
    },
    
    // مشاكل الطقس
    weather: {
        'rain_fade': {
            title: '🌧️ تأثير الأمطار على الإشارة',
            severity: 'موسمي',
            causes: [
                'امتصاص قطرات الماء لموجات Ku-Band',
                'تجمع الماء على سطح الطبق (عدسة مائية)',
                'دخول ماء إلى LNB أو الكيبل',
                'غيوم كثيفة محملة بالمطر',
                'حجم الطبق صغير لا يتحمل التوهين'
            ],
            solutions: [
                'استخدام طبق بحجم أكبر (120 سم للمناطق المطيرة)',
                'تركيب غطاء شفاف للـ LNB (Rain Cover)',
                'عزل الوصلات بشريط عازل للماء',
                'استخدام LNB عالي الحساسية (High Gain)',
                'تنظيف سطح الطبق من الماء بشكل دوري',
                'تقبل أن الإشارة ستضعف مؤقتاً أثناء الأمطار الغزيرة'
            ],
            tools: ['طبق أكبر', 'غطاء LNB', 'شريط عازل', 'LNB High Gain', 'منشفة لتنظيف الطبق']
        },
        'snow_effect': {
            title: '❄️ تأثير الثلوج',
            severity: 'موسمي',
            causes: [
                'تراكم الثلج على الطبق يغير شكله الهندسي',
                'تغطية LNB بالثلج يمنع استقبال الإشارة',
                'وزن الثلج يغير زاوية الطبق',
                'تكون جليد على سطح الطبق'
            ],
            solutions: [
                'تنظيف الطبق من الثلج بانتظام بفرشاة ناعمة',
                'استخدام غطاء واقي للطبق (Dish Cover)',
                'تركيب سخان للطبق (Dish Heater)',
                'استخدام طبق مقوى (Heavy Duty)',
                'رش سطح الطبق بمادة مانعة للتجمد'
            ],
            tools: ['فرشاة تنظيف ناعمة', 'غطاء طبق', 'سخان طبق', 'مادة مانعة للتجمد']
        },
        'wind_effect': {
            title: '💨 تأثير الرياح القوية',
            severity: 'موسمي',
            causes: [
                'تحرك الطبق من مكانه',
                'اهتزاز الطبق أثناء هبوب الرياح',
                'سقوط الطبق بالكامل',
                'الرياح تغير زاوية LNB'
            ],
            solutions: [
                'تثبيت القاعدة بمسامير قوية في الجدار أو الأرض',
                'استخدام حامل متين (Heavy Duty Mount)',
                'تقوية البراغي والرباطات',
                'تركيب الطبق في مكان محمي من الرياح',
                'استخدام قاعدة خرسانية ثقيلة'
            ],
            tools: ['مسامير تثبيت كبيرة', 'قاعدة خرسانية', 'رباطات معدنية', 'مفاتيح ربط كبيرة']
        },
        'solar_outage': {
            title: '☀️ التداخل الشمسي',
            severity: 'مؤقت',
            causes: [
                'مرور الشمس خلف القمر الصناعي (الاعتدال الربيعي والخريفي)',
                'توجيه الطبق مباشرة نحو الشمس',
                'ضوضاء شمسية تغمر إشارة القمر'
            ],
            solutions: [
                'انتظار انتهاء فترة التداخل (5-15 دقيقة يومياً)',
                'تستمر الظاهرة 3-7 أيام في مارس وسبتمبر',
                'لا يمكن فعل شيء - ظاهرة فلكية طبيعية',
                'استخدام طبق أكبر يقلل مدة الانقطاع'
            ],
            tools: ['لا توجد أدوات - انتظار فقط']
        }
    },
    
    // مشاكل متقدمة
    advanced: {
        'hdmi_hdcp': {
            title: '🔒 مشاكل HDCP وحماية المحتوى',
            severity: 'متقدم',
            causes: [
                'التلفزيون لا يدعم HDCP 2.2',
                'كيبل HDMI قديم لا يدعم HDCP',
                'استخدام مقسم HDMI يزيل HDCP',
                'تعارض بين أجهزة متعددة'
            ],
            solutions: [
                'التأكد من دعم التلفزيون لـ HDCP 2.2',
                'استخدام كيبل HDMI 2.0 أو 2.1',
                'إزالة مقسم HDMI وجرب توصيل مباشر',
                'تعطيل HDCP في إعدادات الرسيفر إن أمكن',
                'استخدام محول HDMI to Component'
            ],
            tools: ['كيبل HDMI 2.1', 'محول HDMI to Component']
        },
        'diseqc_issues': {
            title: '🔄 مشاكل DiSEqC Switch',
            severity: 'متقدم',
            causes: [
                'DiSEqC Switch تالف',
                'توصيل خاطئ للمنافذ',
                'عدم توافق DiSEqC مع الرسيفر',
                'طول كيبل طويل يضعف إشارة DiSEqC',
                'عدم تفعيل DiSEqC في إعدادات الرسيفر'
            ],
            solutions: [
                'استبدال DiSEqC Switch بآخر جديد',
                'التأكد من توصيل كل LNB في المنفذ الصحيح',
                'استخدام DiSEqC متوافق (1.0 أو 1.1 أو 1.2)',
                'تقصير طول الكيبل أو استخدام مقوي',
                'تفعيل DiSEqC في إعدادات كل قمر في الرسيفر'
            ],
            tools: ['DiSEqC Switch جديد', 'جهاز فحص DiSEqC']
        },
        'iptv_buffering': {
            title: '📡 تقطيع IPTV',
            severity: 'متوسط',
            causes: [
                'سرعة إنترنت منخفضة',
                'ازدحام الشبكة',
                'خادم IPTV بعيد أو ضعيف',
                'ذاكرة الرسيفر ممتلئة',
                'استخدام WiFi بدل كيبل'
            ],
            solutions: [
                'زيادة سرعة الإنترنت (10 Mbps على الأقل للـ HD)',
                'استخدام كيبل Ethernet بدل WiFi',
                'تغيير مزود IPTV أو الخادم',
                'مسح ذاكرة التخزين المؤقت',
                'إغلاق التطبيقات الأخرى في الرسيفر',
                'استخدام VPN لتحسين الاتصال'
            ],
            tools: ['كيبل Ethernet', 'راوتر قوي', 'VPN']
        }
    }
};

// تصدير البيانات
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SATELLITES_DATABASE, REPAIR_DATABASE };
}
EOF

echo "✅ تم تحديث قاعدة بيانات الأعطال والإصلاحات الشاملة"
