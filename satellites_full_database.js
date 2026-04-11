cd ~/sat_finder_webapp

cat > satellites_full_database.js << 'EOF'
// ============================================================
// قاعدة بيانات الأقمار الصناعية الكاملة
// Sat Finder Pro AI - الإصدار النهائي الشامل
// ============================================================

const SATELLITES_DATABASE = {
    // الأقمار العربية
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
                { name: 'قناة الزمالك', freq: 12341, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: false },
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
                { name: 'معاً', freq: 11861, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
            ]
        },
        {
            id: 'esra_52e',
            name: 'إسراء',
            nameEn: 'Esra',
            position: '52.5°E',
            longitude: 52.5,
            direction: 'E',
            coverage: 'الشرق الأوسط',
            operator: 'إسراء',
            frequencies: []
        },
        {
            id: 'yahsat_52e',
            name: 'ياه سات',
            nameEn: 'Yahsat',
            position: '52.5°E',
            longitude: 52.5,
            direction: 'E',
            coverage: 'الشرق الأوسط وأفريقيا وآسيا',
            operator: 'الياه للاتصالات الفضائية',
            launchYear: 2011,
            satellites: ['Yahsat 1A', 'Yahsat 1B', 'Al Yah 2', 'Al Yah 3'],
            frequencies: [
                { name: 'قناة أبوظبي', freq: 11958, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'الإمارات', freq: 11958, pol: 'V', sr: 27500, fec: '5/6', category: 'حكومية', encrypted: false },
                { name: 'بينونة', freq: 11958, pol: 'V', sr: 27500, fec: '5/6', category: 'منوعات', encrypted: false },
                { name: 'ناشيونال جيوغرافيك أبوظبي HD', freq: 11958, pol: 'V', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: false },
                { name: 'فوكس موفيز HD', freq: 11958, pol: 'V', sr: 27500, fec: '5/6', category: 'أفلام', encrypted: true },
                { name: 'ستار موفيز HD', freq: 11958, pol: 'V', sr: 27500, fec: '5/6', category: 'أفلام', encrypted: true },
                { name: 'OSN', freq: 11958, pol: 'V', sr: 27500, fec: '5/6', category: 'باقة', encrypted: true },
            ]
        },
        {
            id: 'badr_26e',
            name: 'بدر',
            nameEn: 'Badr',
            position: '26.0°E',
            longitude: 26.0,
            direction: 'E',
            coverage: 'الشرق الأوسط',
            operator: 'عرب سات',
            satellites: ['Badr 4', 'Badr 5', 'Badr 6', 'Badr 7', 'Badr 8'],
            frequencies: []
        }
    ],
    
    // الأقمار الأوروبية
    european: [
        {
            id: 'hotbird_13e',
            name: 'هوت بيرد',
            nameEn: 'Hotbird',
            position: '13.0°E',
            longitude: 13.0,
            direction: 'E',
            coverage: 'أوروبا والشرق الأوسط وشمال أفريقيا',
            operator: 'يوتل سات',
            launchYear: 1995,
            satellites: ['Hotbird 13B', 'Hotbird 13C', 'Hotbird 13E', 'Hotbird 13F', 'Hotbird 13G'],
            frequencies: [
                { name: 'فرانس 24 عربي', freq: 11681, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'فرانس 24 إنجليزي', freq: 11681, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'فرانس 24 فرنسي', freq: 11681, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'DW عربية', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'DW إنجليزي', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'BBC World News', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'CNN International', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'Sky News', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'Euronews', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'Al Jazeera English', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'TRT World', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'RAI Italia', freq: 10992, pol: 'V', sr: 27500, fec: '2/3', category: 'إيطالي', encrypted: false },
                { name: 'RAI 1', freq: 10992, pol: 'V', sr: 27500, fec: '2/3', category: 'إيطالي', encrypted: false },
                { name: 'RAI 2', freq: 10992, pol: 'V', sr: 27500, fec: '2/3', category: 'إيطالي', encrypted: false },
                { name: 'RAI 3', freq: 10992, pol: 'V', sr: 27500, fec: '2/3', category: 'إيطالي', encrypted: false },
                { name: 'RAI News 24', freq: 10992, pol: 'V', sr: 27500, fec: '2/3', category: 'أخبار', encrypted: false },
                { name: 'Mediaset Italia', freq: 11432, pol: 'V', sr: 27500, fec: '3/4', category: 'إيطالي', encrypted: true },
                { name: 'Canale 5', freq: 11432, pol: 'V', sr: 27500, fec: '3/4', category: 'إيطالي', encrypted: true },
                { name: 'Italia 1', freq: 11432, pol: 'V', sr: 27500, fec: '3/4', category: 'إيطالي', encrypted: true },
                { name: 'Rete 4', freq: 11432, pol: 'V', sr: 27500, fec: '3/4', category: 'إيطالي', encrypted: true },
                { name: 'TF1', freq: 10834, pol: 'V', sr: 27500, fec: '3/4', category: 'فرنسي', encrypted: true },
                { name: 'France 2', freq: 10834, pol: 'V', sr: 27500, fec: '3/4', category: 'فرنسي', encrypted: false },
                { name: 'France 3', freq: 10834, pol: 'V', sr: 27500, fec: '3/4', category: 'فرنسي', encrypted: false },
                { name: 'France 5', freq: 10834, pol: 'V', sr: 27500, fec: '3/4', category: 'فرنسي', encrypted: false },
                { name: 'M6', freq: 10834, pol: 'V', sr: 27500, fec: '3/4', category: 'فرنسي', encrypted: true },
                { name: 'Arte', freq: 10834, pol: 'V', sr: 27500, fec: '3/4', category: 'ثقافي', encrypted: false },
                { name: 'TV5 Monde', freq: 10834, pol: 'V', sr: 27500, fec: '3/4', category: 'فرنسي', encrypted: false },
                { name: 'RTL', freq: 12111, pol: 'V', sr: 27500, fec: '3/4', category: 'ألماني', encrypted: false },
                { name: 'Sat.1', freq: 12111, pol: 'V', sr: 27500, fec: '3/4', category: 'ألماني', encrypted: false },
                { name: 'ProSieben', freq: 12111, pol: 'V', sr: 27500, fec: '3/4', category: 'ألماني', encrypted: false },
                { name: 'Vox', freq: 12111, pol: 'V', sr: 27500, fec: '3/4', category: 'ألماني', encrypted: false },
                { name: 'RTL II', freq: 12111, pol: 'V', sr: 27500, fec: '3/4', category: 'ألماني', encrypted: false },
                { name: 'Kabel 1', freq: 12111, pol: 'V', sr: 27500, fec: '3/4', category: 'ألماني', encrypted: false },
                { name: 'ZDF', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'ألماني', encrypted: false },
                { name: 'ARD', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'ألماني', encrypted: false },
                { name: '3sat', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'ألماني', encrypted: false },
                { name: 'Phoenix', freq: 11054, pol: 'H', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: false },
                { name: 'TVE Internacional', freq: 11727, pol: 'V', sr: 27500, fec: '3/4', category: 'إسباني', encrypted: false },
                { name: 'Canal 24 Horas', freq: 11727, pol: 'V', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'Antena 3', freq: 11727, pol: 'V', sr: 27500, fec: '3/4', category: 'إسباني', encrypted: true },
                { name: 'Telecinco', freq: 11727, pol: 'V', sr: 27500, fec: '3/4', category: 'إسباني', encrypted: true },
                { name: 'RTP Internacional', freq: 10758, pol: 'V', sr: 27500, fec: '5/6', category: 'برتغالي', encrypted: false },
                { name: 'TRT 1', freq: 11096, pol: 'H', sr: 30000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'TRT Haber', freq: 11096, pol: 'H', sr: 30000, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'TRT Spor', freq: 11096, pol: 'H', sr: 30000, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'TRT Belgesel', freq: 11096, pol: 'H', sr: 30000, fec: '5/6', category: 'وثائقي', encrypted: false },
                { name: 'TRT Çocuk', freq: 11096, pol: 'H', sr: 30000, fec: '5/6', category: 'أطفال', encrypted: false },
                { name: 'TRT Müzik', freq: 11096, pol: 'H', sr: 30000, fec: '5/6', category: 'موسيقى', encrypted: false },
                { name: 'TRT Kurdî', freq: 11096, pol: 'H', sr: 30000, fec: '5/6', category: 'كردي', encrypted: false },
                { name: 'TRT Arabi', freq: 11096, pol: 'H', sr: 30000, fec: '5/6', category: 'عربي', encrypted: false },
                { name: 'Bloomberg', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'اقتصاد', encrypted: false },
                { name: 'CNBC Europe', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'اقتصاد', encrypted: false },
                { name: 'Fashion TV', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'موضة', encrypted: false },
                { name: 'Travel Channel', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'سفر', encrypted: true },
                { name: 'Food Network', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'طبخ', encrypted: true },
                { name: 'E! Entertainment', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'ترفيه', encrypted: true },
                { name: 'MTV Europe', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: true },
                { name: 'VH1 Europe', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: true },
                { name: 'Mezzo', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: true },
                { name: 'Stingray iConcerts', freq: 11642, pol: 'H', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: true },
                { name: 'Disney Channel', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: true },
                { name: 'Disney Junior', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: true },
                { name: 'Nickelodeon', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: true },
                { name: 'Nick Jr.', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: true },
                { name: 'Cartoon Network', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: true },
                { name: 'Boomerang', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: true },
                { name: 'Baby TV', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: true },
                { name: 'Duck TV', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'أطفال', encrypted: true },
                { name: 'National Geographic', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
                { name: 'Nat Geo Wild', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
                { name: 'Discovery Channel', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
                { name: 'Animal Planet', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
                { name: 'History', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
                { name: 'Crime & Investigation', freq: 10719, pol: 'V', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
                { name: 'Eurosport 1', freq: 11278, pol: 'V', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'Eurosport 2', freq: 11278, pol: 'V', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'Extreme Sports', freq: 11278, pol: 'V', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'Motorsport.tv', freq: 11278, pol: 'V', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'Fight Network', freq: 11278, pol: 'V', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'Ginx eSports TV', freq: 11278, pol: 'V', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: true },
                { name: 'Fox', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'ترفيه', encrypted: true },
                { name: 'Fox Life', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'ترفيه', encrypted: true },
                { name: 'Fox Crime', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'جريمة', encrypted: true },
                { name: 'Comedy Central', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'كوميدي', encrypted: true },
                { name: 'TLC', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'واقعي', encrypted: true },
                { name: 'ID', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'جريمة', encrypted: true },
                { name: 'BBC First', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'دراما', encrypted: true },
                { name: 'BBC Brit', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'ترفيه', encrypted: true },
                { name: 'BBC Earth', freq: 11804, pol: 'V', sr: 27500, fec: '5/6', category: 'وثائقي', encrypted: true },
            ]
        },
        {
            id: 'astra_19e',
            name: 'أسترا 19.2',
            nameEn: 'Astra 19.2E',
            position: '19.2°E',
            longitude: 19.2,
            direction: 'E',
            coverage: 'أوروبا',
            operator: 'SES Astra',
            launchYear: 1988,
            satellites: ['Astra 1KR', 'Astra 1L', 'Astra 1M', 'Astra 1N'],
            frequencies: [
                { name: 'Sky Deutschland', freq: 11719, pol: 'H', sr: 27500, fec: '9/10', category: 'باقة', encrypted: true },
                { name: 'HD+', freq: 10832, pol: 'H', sr: 22000, fec: '2/3', category: 'باقة', encrypted: true },
                { name: 'Arte HD', freq: 11494, pol: 'H', sr: 22000, fec: '2/3', category: 'ثقافي', encrypted: false },
                { name: 'Servus TV', freq: 11303, pol: 'H', sr: 22000, fec: '2/3', category: 'نمساوي', encrypted: false },
                { name: 'ORF 1', freq: 11303, pol: 'H', sr: 22000, fec: '2/3', category: 'نمساوي', encrypted: true },
                { name: 'ORF 2', freq: 11303, pol: 'H', sr: 22000, fec: '2/3', category: 'نمساوي', encrypted: true },
                { name: 'Das Erste HD', freq: 11494, pol: 'H', sr: 22000, fec: '2/3', category: 'ألماني', encrypted: false },
                { name: 'ZDF HD', freq: 11362, pol: 'H', sr: 22000, fec: '2/3', category: 'ألماني', encrypted: false },
                { name: '3sat HD', freq: 11362, pol: 'H', sr: 22000, fec: '2/3', category: 'ألماني', encrypted: false },
                { name: 'KiKA HD', freq: 11362, pol: 'H', sr: 22000, fec: '2/3', category: 'أطفال', encrypted: false },
                { name: 'Phoenix HD', freq: 11494, pol: 'H', sr: 22000, fec: '2/3', category: 'وثائقي', encrypted: false },
                { name: 'Arte', freq: 10743, pol: 'H', sr: 22000, fec: '5/6', category: 'ثقافي', encrypted: false },
                { name: 'TV5 Monde', freq: 11538, pol: 'V', sr: 22000, fec: '5/6', category: 'فرنسي', encrypted: false },
                { name: 'CNBC Europe', freq: 11538, pol: 'V', sr: 22000, fec: '5/6', category: 'اقتصاد', encrypted: false },
                { name: 'Bloomberg', freq: 11538, pol: 'V', sr: 22000, fec: '5/6', category: 'اقتصاد', encrypted: false },
                { name: 'QVC', freq: 12187, pol: 'H', sr: 27500, fec: '3/4', category: 'تسوق', encrypted: false },
                { name: 'HSE24', freq: 12187, pol: 'H', sr: 27500, fec: '3/4', category: 'تسوق', encrypted: false },
                { name: 'DMAX', freq: 12187, pol: 'H', sr: 27500, fec: '3/4', category: 'وثائقي', encrypted: false },
                { name: 'Tele 5', freq: 12187, pol: 'H', sr: 27500, fec: '3/4', category: 'ترفيه', encrypted: false },
                { name: 'Sport1', freq: 12187, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: false },
                { name: 'Eurosport 1', freq: 12226, pol: 'H', sr: 27500, fec: '3/4', category: 'رياضة', encrypted: false },
                { name: 'Nickelodeon', freq: 11973, pol: 'V', sr: 27500, fec: '3/4', category: 'أطفال', encrypted: false },
                { name: 'Comedy Central', freq: 11973, pol: 'V', sr: 27500, fec: '3/4', category: 'كوميدي', encrypted: false },
                { name: 'MTV', freq: 11973, pol: 'V', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: false },
                { name: 'VIVA', freq: 11973, pol: 'V', sr: 27500, fec: '3/4', category: 'موسيقى', encrypted: false },
                { name: 'Deluxe Music', freq: 10803, pol: 'H', sr: 22000, fec: '5/6', category: 'موسيقى', encrypted: false },
                { name: 'Folx TV', freq: 10803, pol: 'H', sr: 22000, fec: '5/6', category: 'موسيقى', encrypted: false },
                { name: 'Juwelo TV', freq: 12610, pol: 'V', sr: 22000, fec: '5/6', category: 'تسوق', encrypted: false },
                { name: 'Sonnenklar TV', freq: 12610, pol: 'V', sr: 22000, fec: '5/6', category: 'تسوق', encrypted: false },
                { name: 'Bibel TV', freq: 12574, pol: 'H', sr: 22000, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'K-TV', freq: 12574, pol: 'H', sr: 22000, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'EWTN', freq: 12574, pol: 'H', sr: 22000, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'Hope TV', freq: 12574, pol: 'H', sr: 22000, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'TRT Türk', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'TV8 Int', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Show TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Kanal D', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'ATV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Star TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Fox Türkiye', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'TV5', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: '360', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Beyaz TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'CNN Türk', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'NTV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'Habertürk', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'A Haber', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'A Spor', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'TRT Spor', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'رياضة', encrypted: false },
                { name: 'TLC Türkiye', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'واقعي', encrypted: false },
                { name: 'DMAX Türkiye', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'وثائقي', encrypted: false },
                { name: 'Ulusal Kanal', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Tele 1', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Flash TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Ülke TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'TVNET', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Semerkand TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'Diyanet TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'KRT TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Halk TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'TELE 1', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Ekol TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Sözcü TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'Bengü Türk', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Cem TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'دينية', encrypted: false },
                { name: 'Meltem TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'تركي', encrypted: false },
                { name: 'Number One TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'موسيقى', encrypted: false },
                { name: 'Power TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'موسيقى', encrypted: false },
                { name: 'Dream TV', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'موسيقى', encrypted: false },
                { name: 'Dream Türk', freq: 11582, pol: 'H', sr: 22000, fec: '5/6', category: 'موسيقى', encrypted: false },
            ]
        },
        {
            id: 'astra_28e',
            name: 'أسترا 28.2',
            nameEn: 'Astra 28.2E',
            position: '28.2°E',
            longitude: 28.2,
            direction: 'E',
            coverage: 'المملكة المتحدة وأيرلندا',
            operator: 'SES Astra',
            satellites: ['Astra 2E', 'Astra 2F', 'Astra 2G'],
            frequencies: [
                { name: 'Sky UK', freq: 11739, pol: 'V', sr: 27500, fec: '2/3', category: 'باقة', encrypted: true },
                { name: 'Freesat', freq: 11426, pol: 'H', sr: 27500, fec: '5/6', category: 'باقة', encrypted: false },
                { name: 'BBC One HD', freq: 10847, pol: 'V', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'BBC Two HD', freq: 10847, pol: 'V', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'BBC Three HD', freq: 10847, pol: 'V', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'BBC Four HD', freq: 10847, pol: 'V', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'BBC News HD', freq: 10847, pol: 'V', sr: 23000, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'BBC Parliament', freq: 10847, pol: 'V', sr: 23000, fec: '3/4', category: 'سياسي', encrypted: false },
                { name: 'CBBC', freq: 10847, pol: 'V', sr: 23000, fec: '3/4', category: 'أطفال', encrypted: false },
                { name: 'CBeebies', freq: 10847, pol: 'V', sr: 23000, fec: '3/4', category: 'أطفال', encrypted: false },
                { name: 'ITV HD', freq: 11053, pol: 'H', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'ITV2', freq: 11053, pol: 'H', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'ITV3', freq: 11053, pol: 'H', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'ITV4', freq: 11053, pol: 'H', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'ITVBe', freq: 11053, pol: 'H', sr: 23000, fec: '3/4', category: 'بريطاني', encrypted: false },
                { name: 'Channel 4 HD', freq: 11126, pol: 'V', sr: 22000, fec: '5/6', category: 'بريطاني', encrypted: false },
                { name: 'E4', freq: 11126, pol: 'V', sr: 22000, fec: '5/6', category: 'بريطاني', encrypted: false },
                { name: 'More4', freq: 11126, pol: 'V', sr: 22000, fec: '5/6', category: 'بريطاني', encrypted: false },
                { name: 'Film4', freq: 11126, pol: 'V', sr: 22000, fec: '5/6', category: 'أفلام', encrypted: false },
                { name: '4Music', freq: 11126, pol: 'V', sr: 22000, fec: '5/6', category: 'موسيقى', encrypted: false },
                { name: 'Channel 5 HD', freq: 10964, pol: 'H', sr: 22000, fec: '5/6', category: 'بريطاني', encrypted: false },
                { name: '5USA', freq: 10964, pol: 'H', sr: 22000, fec: '5/6', category: 'بريطاني', encrypted: false },
                { name: '5STAR', freq: 10964, pol: 'H', sr: 22000, fec: '5/6', category: 'بريطاني', encrypted: false },
                { name: '5Action', freq: 10964, pol: 'H', sr: 22000, fec: '5/6', category: 'بريطاني', encrypted: false },
                { name: 'Sky News', freq: 12207, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'Sky Sports', freq: 12207, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: true },
                { name: 'BT Sport', freq: 12207, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: true },
                { name: 'TNT Sports', freq: 12207, pol: 'V', sr: 27500, fec: '5/6', category: 'رياضة', encrypted: true },
            ]
        },
        {
            id: 'eutelsat_7e',
            name: 'يوتل سات 7',
            nameEn: 'Eutelsat 7E',
            position: '7.0°E',
            longitude: 7.0,
            direction: 'E',
            coverage: 'أوروبا والشرق الأوسط',
            operator: 'يوتل سات',
            frequencies: [
                { name: 'TRT', freq: 10762, pol: 'V', sr: 30000, fec: '3/4', category: 'تركي', encrypted: false },
                { name: 'Digiturk', freq: 10803, pol: 'V', sr: 30000, fec: '3/4', category: 'باقة', encrypted: true },
            ]
        },
        {
            id: 'eutelsat_9e',
            name: 'يوتل سات 9',
            nameEn: 'Eutelsat 9E',
            position: '9.0°E',
            longitude: 9.0,
            direction: 'E',
            coverage: 'أوروبا',
            operator: 'يوتل سات',
            frequencies: [
                { name: 'KabelKiosk', freq: 11727, pol: 'V', sr: 27500, fec: '5/6', category: 'باقة', encrypted: true },
            ]
        },
        {
            id: 'eutelsat_10e',
            name: 'يوتل سات 10',
            nameEn: 'Eutelsat 10E',
            position: '10.0°E',
            longitude: 10.0,
            direction: 'E',
            coverage: 'أوروبا والشرق الأوسط',
            operator: 'يوتل سات',
            frequencies: []
        },
        {
            id: 'eutelsat_16e',
            name: 'يوتل سات 16',
            nameEn: 'Eutelsat 16E',
            position: '16.0°E',
            longitude: 16.0,
            direction: 'E',
            coverage: 'أوروبا الوسطى والبلقان',
            operator: 'يوتل سات',
            frequencies: [
                { name: 'Antik Sat', freq: 11637, pol: 'H', sr: 30000, fec: '5/6', category: 'باقة', encrypted: true },
                { name: 'Total TV', freq: 11637, pol: 'H', sr: 30000, fec: '5/6', category: 'باقة', encrypted: true },
                { name: 'Pink', freq: 11637, pol: 'H', sr: 30000, fec: '5/6', category: 'صربي', encrypted: true },
            ]
        },
        {
            id: 'eutelsat_21b',
            name: 'يوتل سات 21',
            nameEn: 'Eutelsat 21B',
            position: '21.5°E',
            longitude: 21.5,
            direction: 'E',
            coverage: 'أوروبا والشرق الأوسط',
            operator: 'يوتل سات',
            frequencies: []
        },
        {
            id: 'eutelsat_25b',
            name: 'يوتل سات 25',
            nameEn: 'Eutelsat 25B',
            position: '25.5°E',
            longitude: 25.5,
            direction: 'E',
            coverage: 'الشرق الأوسط',
            operator: 'يوتل سات',
            frequencies: []
        },
        {
            id: 'eutelsat_33e',
            name: 'يوتل سات 33',
            nameEn: 'Eutelsat 33E',
            position: '33.0°E',
            longitude: 33.0,
            direction: 'E',
            coverage: 'أوروبا',
            operator: 'يوتل سات',
            frequencies: []
        },
        {
            id: 'eutelsat_36b',
            name: 'يوتل سات 36',
            nameEn: 'Eutelsat 36B',
            position: '36.0°E',
            longitude: 36.0,
            direction: 'E',
            coverage: 'أفريقيا وروسيا',
            operator: 'يوتل سات',
            frequencies: [
                { name: 'Tricolor TV', freq: 11727, pol: 'L', sr: 27500, fec: '3/4', category: 'باقة', encrypted: true },
                { name: 'NTV Plus', freq: 11727, pol: 'L', sr: 27500, fec: '3/4', category: 'باقة', encrypted: true },
            ]
        },
        {
            id: 'hispasat_30w',
            name: 'هيسباسات',
            nameEn: 'Hispasat',
            position: '30.0°W',
            longitude: 30.0,
            direction: 'W',
            coverage: 'أوروبا والأمريكتين وشمال أفريقيا',
            operator: 'Hispasat',
            launchYear: 1992,
            satellites: ['Hispasat 30W-5', 'Hispasat 30W-6', 'Amazonas'],
            frequencies: [
                { name: 'TVE', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'إسباني', encrypted: false },
                { name: 'Movistar+', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'باقة', encrypted: true },
                { name: 'RTVE', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'إسباني', encrypted: false },
                { name: 'Canal Sur', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'إسباني', encrypted: false },
                { name: 'TV3', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'كتالوني', encrypted: false },
                { name: 'ETB', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'باسكي', encrypted: false },
                { name: 'TVG', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'جاليشي', encrypted: false },
                { name: 'Aragón TV', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'إسباني', encrypted: false },
                { name: 'RTP', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'برتغالي', encrypted: false },
                { name: 'SIC', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'برتغالي', encrypted: true },
                { name: 'TVI', freq: 12456, pol: 'H', sr: 30000, fec: '5/6', category: 'برتغالي', encrypted: true },
            ]
        },
        {
            id: 'thor_0.8w',
            name: 'ثور',
            nameEn: 'Thor',
            position: '0.8°W',
            longitude: 0.8,
            direction: 'W',
            coverage: 'أوروبا',
            operator: 'Telenor',
            frequencies: [
                { name: 'Canal Digital', freq: 11229, pol: 'H', sr: 25000, fec: '3/4', category: 'باقة', encrypted: true },
                { name: 'Viasat', freq: 11229, pol: 'H', sr: 25000, fec: '3/4', category: 'باقة', encrypted: true },
                { name: 'NRK', freq: 11229, pol: 'H', sr: 25000, fec: '3/4', category: 'نرويجي', encrypted: false },
                { name: 'SVT', freq: 11229, pol: 'H', sr: 25000, fec: '3/4', category: 'سويدي', encrypted: false },
                { name: 'DR', freq: 11229, pol: 'H', sr: 25000, fec: '3/4', category: 'دنماركي', encrypted: false },
                { name: 'YLE', freq: 11229, pol: 'H', sr: 25000, fec: '3/4', category: 'فنلندي', encrypted: false },
            ]
        },
        {
            id: 'intelsat_10-02',
            name: 'إنتل سات 10-02',
            nameEn: 'Intelsat 10-02',
            position: '1.0°W',
            longitude: 1.0,
            direction: 'W',
            coverage: 'أوروبا',
            operator: 'إنتل سات',
            frequencies: []
        },
        {
            id: 'amos_4w',
            name: 'عاموس',
            nameEn: 'Amos',
            position: '4.0°W',
            longitude: 4.0,
            direction: 'W',
            coverage: 'أوروبا والشرق الأوسط',
            operator: 'Spacecom',
            frequencies: []
        },
        {
            id: 'eutelsat_5w',
            name: 'يوتل سات 5 غرب',
            nameEn: 'Eutelsat 5 West',
            position: '5.0°W',
            longitude: 5.0,
            direction: 'W',
            coverage: 'أوروبا وشمال أفريقيا',
            operator: 'يوتل سات',
            frequencies: [
                { name: 'Fransat', freq: 11591, pol: 'V', sr: 20000, fec: '2/3', category: 'باقة', encrypted: true },
                { name: 'Bis TV', freq: 11591, pol: 'V', sr: 20000, fec: '2/3', category: 'باقة', encrypted: true },
                { name: 'Mediaset', freq: 11591, pol: 'V', sr: 20000, fec: '2/3', category: 'إيطالي', encrypted: true },
            ]
        },
        {
            id: 'eutelsat_7w',
            name: 'يوتل سات 7 غرب',
            nameEn: 'Eutelsat 7 West',
            position: '7.3°W',
            longitude: 7.3,
            direction: 'W',
            coverage: 'الشرق الأوسط وشمال أفريقيا',
            operator: 'يوتل سات',
            frequencies: [
                { name: 'beIN Sports', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true },
                { name: 'beIN Movies', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'أفلام', encrypted: true },
                { name: 'beIN Series', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'مسلسلات', encrypted: true },
                { name: 'beIN Junior', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'أطفال', encrypted: true },
                { name: 'beIN Gourmet', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'طبخ', encrypted: true },
                { name: 'beIN Drama', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'دراما', encrypted: true },
                { name: 'beIN Boomerang', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'أطفال', encrypted: true },
                { name: 'beIN Cartoon Network', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'أطفال', encrypted: true },
                { name: 'beIN Disney', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'أطفال', encrypted: true },
                { name: 'beIN Nick', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'أطفال', encrypted: true },
                { name: 'beIN Discovery', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'وثائقي', encrypted: true },
                { name: 'beIN Nat Geo', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'وثائقي', encrypted: true },
                { name: 'beIN Animal Planet', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'وثائقي', encrypted: true },
                { name: 'beIN History', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'وثائقي', encrypted: true },
                { name: 'beIN Crime', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'جريمة', encrypted: true },
                { name: 'beIN ID', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'جريمة', encrypted: true },
                { name: 'beIN TLC', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'واقعي', encrypted: true },
                { name: 'beIN Food Network', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'طبخ', encrypted: true },
                { name: 'beIN Travel', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'سفر', encrypted: true },
                { name: 'beIN Fashion', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'موضة', encrypted: true },
                { name: 'beIN MTV', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'موسيقى', encrypted: true },
                { name: 'beIN Trace', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'موسيقى', encrypted: true },
                { name: 'beIN BBC Earth', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'وثائقي', encrypted: true },
                { name: 'beIN BBC First', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'دراما', encrypted: true },
                { name: 'beIN Fox', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'ترفيه', encrypted: true },
                { name: 'beIN Fox Life', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'ترفيه', encrypted: true },
                { name: 'beIN AMC', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'أفلام', encrypted: true },
                { name: 'beIN Star Movies', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'أفلام', encrypted: true },
                { name: 'beIN Star World', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'ترفيه', encrypted: true },
                { name: 'beIN Comedy Central', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'كوميدي', encrypted: true },
                { name: 'OSN', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'باقة', encrypted: true },
                { name: 'My-HD', freq: 10727, pol: 'H', sr: 27500, fec: '2/3', category: 'باقة', encrypted: true },
                { name: 'Al Jazeera', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'Al Jazeera English', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'Al Jazeera Mubasher', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'Al Jazeera Documentary', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'وثائقي', encrypted: false },
                { name: 'BBC Arabic', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'BBC World News', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'CNN', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'France 24', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'DW', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'Sky News', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'Euronews', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'CNBC', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'اقتصاد', encrypted: false },
                { name: 'Bloomberg', freq: 11977, pol: 'V', sr: 27500, fec: '5/6', category: 'اقتصاد', encrypted: false },
            ]
        },
        {
            id: 'eutelsat_8w',
            name: 'يوتل سات 8 غرب',
            nameEn: 'Eutelsat 8 West',
            position: '8.0°W',
            longitude: 8.0,
            direction: 'W',
            coverage: 'الشرق الأوسط وشمال أفريقيا',
            operator: 'يوتل سات',
            frequencies: []
        },
        {
            id: 'express_am6',
            name: 'إكسبريس AM6',
            nameEn: 'Express AM6',
            position: '53.0°E',
            longitude: 53.0,
            direction: 'E',
            coverage: 'روسيا والشرق الأوسط',
            operator: 'RSCC',
            frequencies: []
        },
        {
            id: 'express_am7',
            name: 'إكسبريس AM7',
            nameEn: 'Express AM7',
            position: '40.0°E',
            longitude: 40.0,
            direction: 'E',
            coverage: 'روسيا وأفريقيا',
            operator: 'RSCC',
            frequencies: []
        },
        {
            id: 'yamal_402',
            name: 'يامال 402',
            nameEn: 'Yamal 402',
            position: '55.0°E',
            longitude: 55.0,
            direction: 'E',
            coverage: 'روسيا وأوروبا',
            operator: 'Gazprom Space Systems',
            frequencies: []
        },
        {
            id: 'yamal_401',
            name: 'يامال 401',
            nameEn: 'Yamal 401',
            position: '90.0°E',
            longitude: 90.0,
            direction: 'E',
            coverage: 'روسيا',
            operator: 'Gazprom Space Systems',
            frequencies: []
        },
        {
            id: 'turkmenalem_52e',
            name: 'تركمن عالم',
            nameEn: 'TürkmenÄlem',
            position: '52.0°E',
            longitude: 52.0,
            direction: 'E',
            coverage: 'آسيا الوسطى والشرق الأوسط',
            operator: 'تركمن سات',
            frequencies: []
        },
        {
            id: 'azerspace_46e',
            name: 'أذر سبيس',
            nameEn: 'Azerspace',
            position: '46.0°E',
            longitude: 46.0,
            direction: 'E',
            coverage: 'أذربيجان وأوروبا',
            operator: 'Azercosmos',
            frequencies: []
        },
        {
            id: 'kazsat_58e',
            name: 'كاز سات',
            nameEn: 'KazSat',
            position: '58.5°E',
            longitude: 58.5,
            direction: 'E',
            coverage: 'كازاخستان',
            operator: 'KazSat',
            frequencies: []
        }
    ]
};

// ============================================================
// قاعدة بيانات الأعطال والإصلاحات الشاملة
// ============================================================

const REPAIR_DATABASE = {
    // مشاكل الإشارة
    signal: {
        'no_signal': {
            title: 'لا توجد إشارة',
            causes: [
                'انقطاع الكيبل أو تلفه',
                'تلف LNB',
                'اتجاه الطبق غير صحيح',
                'عائق أمام الطبق (شجرة، مبنى)',
                'عطل في الرسيفر',
                'فصل التيار الكهربائي عن LNB',
                'التردد غير صحيح',
                'دخول ماء إلى الكيبل أو LNB'
            ],
            solutions: [
                'فحص الكيبل من الرسيفر إلى LNB واستبداله إذا كان تالفاً',
                'فحص فيشة F-Type وتأكد من إحكام ربطها',
                'إعادة توجيه الطبق باستخدام البوصلة',
                'إزالة أي عوائق أمام الطبق',
                'إعادة تشغيل الرسيفر',
                'فحص إعدادات التردد والاستقطاب ومعدل الترميز',
                'تجربة منفذ LNB آخر',
                'استبدال LNB إذا كان تالفاً',
                'فحص وحدة التغذية في الرسيفر'
            ],
            tools: ['جهاز فحص الكيبل', 'جهاز قياس الإشارة', 'بوصلة', 'LNB جديد', 'كيبل RG6', 'فيش F-Type']
        },
        'weak_signal': {
            title: 'ضعف الإشارة',
            causes: [
                'اتجاه الطبق غير دقيق',
                'حجم الطبق غير مناسب للمنطقة',
                'LNB ضعيف أو تالف',
                'كيبل طويل جداً أو رديء الجودة',
                'عائق جزئي أمام الطبق',
                'ظروف جوية سيئة (أمطار غزيرة، ثلوج)',
                'عدم ضبط زاوية الاستقطاب (Skew)',
                'تردد LNB غير مضبوط في الرسيفر',
                'وجود ماء داخل الكيبل'
            ],
            solutions: [
                'إعادة ضبط زاوية السمت والارتفاع بدقة',
                'استخدام طبق بحجم مناسب (يفضل 90 سم فأكثر للمناطق الحدودية)',
                'استبدال LNB بنوع عالي الجودة (Inverto، Star Gold)',
                'استخدام كيبل RG6 عالي الجودة وتقصير المسافة',
                'إزالة العوائق أو تغيير موقع الطبق',
                'انتظار تحسن الطقس',
                'ضبط زاوية لف LNB حسب موقعك الجغرافي',
                'ضبط تردد LNB في الرسيفر (Universal: 9750/10600)',
                'فحص وتجفيف أو استبدال الكيبل'
            ],
            tools: ['جهاز قياس الإشارة', 'بوصلة', 'LNB احترافي', 'كيبل RG6', 'منظف فيش']
        },
        'signal_drop': {
            title: 'تقطع الإشارة',
            causes: [
                'توصيلات غير محكمة',
                'تداخل كهربائي',
                'مشكلة في مصدر الطاقة',
                'ارتفاع حرارة LNB',
                'وجود ماء في الكيبل',
                'تلف في وحدة LNB',
                'مشكلة في الستالايت (Solar Outage)',
                'تشويش من أجهزة أخرى'
            ],
            solutions: [
                'فحص جميع التوصيلات وإحكام ربطها',
                'إبعاد الكيبل عن أسلاك الكهرباء',
                'فحص مصدر طاقة الرسيفر',
                'تظليل LNB من أشعة الشمس المباشرة',
                'فحص الكيبل واستبدال الأجزاء التالفة',
                'استبدال LNB',
                'انتظار انتهاء فترة التداخل الشمسي',
                'استخدام كيبل مزدوج الدرع'
            ],
            tools: ['جهاز فحص الكيبل', 'LNB جديد', 'عازل شمسي للـ LNB', 'كيبل مزدوج الدرع']
        }
    },
    
    // مشاكل الصورة
    video: {
        'pixelation': {
            title: 'تقطيع الصورة (تكسير)',
            causes: [
                'ضعف الإشارة',
                'مشكلة في التردد أو الترميز',
                'LNB تالف',
                'كيبل رديء',
                'مشكلة في معالج الرسيفر',
                'ارتفاع حرارة الرسيفر'
            ],
            solutions: [
                'تحسين قوة الإشارة بضبط الطبق',
                'التأكد من صحة إعدادات التردد ومعدل الترميز',
                'استبدال LNB',
                'استبدال الكيبل بنوع RG6',
                'إعادة تشغيل الرسيفر',
                'تهوية الرسيفر جيداً'
            ],
            tools: ['جهاز قياس الإشارة', 'LNB جديد', 'كيبل RG6']
        },
        'freezing': {
            title: 'توقف الصورة (تعليق)',
            causes: [
                'ضعف الإشارة',
                'مشكلة في البث من المصدر',
                'ارتفاع حرارة الرسيفر',
                'سعة تخزين ممتلئة',
                'برنامج الرسيفر قديم',
                'مشكلة في الهارد ديسك (لأجهزة التسجيل)'
            ],
            solutions: [
                'تحسين الإشارة',
                'التحقق من القنوات الأخرى',
                'فصل الرسيفر وإعادة تشغيله',
                'تهوية الجهاز',
                'مسح الملفات المؤقتة',
                'تحديث سوفت وير الرسيفر',
                'فحص الهارد ديسك'
            ],
            tools: ['ريموت كنترول', 'فلاشة لتحديث السوفت وير']
        },
        'black_screen': {
            title: 'شاشة سوداء',
            causes: [
                'القناة مشفرة',
                'انتهاء صلاحية الاشتراك',
                'مشكلة في HDMI',
                'الرسيفر في وضع الاستعداد',
                'تلف في مخرج الفيديو'
            ],
            solutions: [
                'التأكد من حالة الاشتراك',
                'فحص كيبل HDMI واستبداله',
                'تجربة منفذ HDMI آخر',
                'الضغط على زر Power في الريموت',
                'تجربة كيبل AV كبديل'
            ],
            tools: ['كيبل HDMI جديد', 'كيبل AV']
        },
        'green_screen': {
            title: 'شاشة خضراء',
            causes: [
                'مشكلة في HDMI Handshake',
                'إعدادات دقة العرض غير متوافقة',
                'تلف في كيبل HDMI',
                'مشكلة في التلفزيون'
            ],
            solutions: [
                'فصل وإعادة توصيل كيبل HDMI',
                'تغيير دقة العرض في إعدادات الرسيفر',
                'استبدال كيبل HDMI',
                'إعادة تشغيل التلفزيون والرسيفر'
            ],
            tools: ['كيبل HDMI جديد']
        }
    },
    
    // مشاكل الصوت
    audio: {
        'no_sound': {
            title: 'لا يوجد صوت',
            causes: [
                'كتم الصوت (Mute)',
                'مشكلة في كيبل الصوت',
                'إعدادات الصوت في الرسيفر',
                'القناة تبث بدون صوت',
                'تلف في مخرج الصوت'
            ],
            solutions: [
                'التأكد من إلغاء كتم الصوت',
                'رفع مستوى الصوت',
                'فحص توصيلات الصوت',
                'تجربة قناة أخرى',
                'تغيير إعدادات الصوت (PCM/Bitstream)'
            ],
            tools: ['ريموت كنترول', 'كيبل صوت']
        },
        'audio_delay': {
            title: 'تأخر الصوت عن الصورة',
            causes: [
                'مشكلة في معالجة الإشارة',
                'إعدادات Audio Delay غير مضبوطة',
                'مشكلة في البث',
                'استخدام HDMI ARC'
            ],
            solutions: [
                'ضبط إعدادات Audio Delay في الرسيفر',
                'إعادة تشغيل الرسيفر',
                'تغيير القناة والعودة',
                'فصل وإعادة توصيل HDMI'
            ],
            tools: ['ريموت كنترول']
        }
    },
    
    // مشاكل LNB
    lnb: {
        'lnb_failure': {
            title: 'عطل كامل في LNB',
            causes: [
                'تلف بسبب الصواعق',
                'دخول ماء',
                'انتهاء العمر الافتراضي',
                'تماس كهربائي',
                'ارتفاع حرارة شديد'
            ],
            solutions: [
                'استبدال LNB بآخر جديد',
                'تركيب واقي صواعق',
                'عزل الوصلات بشريط عازل للماء',
                'استخدام LNB من ماركة موثوقة',
                'تركيب غطاء واقي للـ LNB'
            ],
            tools: ['LNB جديد', 'شريط عازل', 'واقي صواعق', 'غطاء LNB']
        },
        'lnb_short': {
            title: 'تماس في LNB',
            causes: [
                'دخول ماء إلى الفيشة',
                'تلف العازل في الكيبل',
                'تركيب خاطئ للفيشة',
                'تآكل في الموصلات'
            ],
            solutions: [
                'فصل الكيبل وتنظيف الفيشة',
                'قص جزء من الكيبل وتركيب فيشة جديدة',
                'استخدام شريط عازل للماء',
                'استبدال الكيبل بالكامل إذا كان متآكلاً'
            ],
            tools: ['فيش F-Type', 'قاطع كيبل', 'شريط عازل', 'كيبل جديد']
        },
        'lnb_noise': {
            title: 'تشويش وضوضاء في الإشارة',
            causes: [
                'LNB رديء الجودة',
                'تداخل من أجهزة إلكترونية قريبة',
                'عدم ثبات LNB في الحامل',
                'انعكاسات من أسطح معدنية'
            ],
            solutions: [
                'استبدال LNB بنوع عالي الجودة',
                'إبعاد الكيبل عن مصادر التداخل',
                'تثبيت LNB بإحكام',
                'تغيير موقع الطبق قليلاً'
            ],
            tools: ['LNB عالي الجودة', 'رباطات تثبيت']
        }
    },
    
    // مشاكل الرسيفر
    receiver: {
        'receiver_boot': {
            title: 'الرسيفر لا يعمل / لا يقلع',
            causes: [
                'عطل في البور سبلاي',
                'تلف في الفلاشة الداخلية',
                'مشكلة في زر الباور',
                'ارتفاع كهربائي أتلف الجهاز'
            ],
            solutions: [
                'فحص كيبل الكهرباء والمحول',
                'تجربة منفذ كهرباء آخر',
                'فصل الجهاز 10 دقائق وإعادة توصيله',
                'فحص البور سبلاي واستبداله إذا لزم',
                'إرسال الجهاز للصيانة'
            ],
            tools: ['محول كهرباء احتياطي', 'جهاز فحص الفولت']
        },
        'receiver_hang': {
            title: 'الرسيفر يعلق باستمرار',
            causes: [
                'ارتفاع حرارة الجهاز',
                'ضعف الإشارة',
                'سوفت وير قديم',
                'ذاكرة ممتلئة',
                'مشكلة في الهارد ديسك'
            ],
            solutions: [
                'تهوية الجهاز جيداً',
                'تحسين الإشارة',
                'تحديث السوفت وير',
                'مسح القنوات غير المستخدمة',
                'فحص الهارد ديسك'
            ],
            tools: ['فلاشة لتحديث السوفت وير', 'ريموت كنترول']
        },
        'receiver_remote': {
            title: 'الريموت لا يعمل',
            causes: [
                'بطاريات فارغة',
                'تلف في حساس IR',
                'عائق بين الريموت والرسيفر',
                'تلف في الريموت نفسه'
            ],
            solutions: [
                'تغيير البطاريات',
                'تنظيف حساس IR في الرسيفر',
                'إزالة العوائق',
                'تجربة ريموت بديل',
                'استخدام تطبيق ريموت على الهاتف'
            ],
            tools: ['بطاريات AAA', 'قطعة قماش للتنظيف']
        },
        'receiver_update': {
            title: 'مشكلة في تحديث السوفت وير',
            causes: [
                'ملف التحديث غير متوافق',
                'انقطاع الكهرباء أثناء التحديث',
                'فلاشة تالفة',
                'نفاذ مساحة التخزين'
            ],
            solutions: [
                'التأكد من تحميل الملف الصحيح لطراز الرسيفر',
                'استخدام فلاشة مهيأة FAT32',
                'عدم فصل الكهرباء أثناء التحديث',
                'مسح ملفات غير ضرورية'
            ],
            tools: ['فلاشة USB', 'كمبيوتر لتحميل الملف']
        }
    },
    
    // مشاكل التركيب
    installation: {
        'dish_alignment': {
            title: 'صعوبة في توجيه الطبق',
            causes: [
                'عدم معرفة الزوايا الصحيحة',
                'عدم استواء القاعدة',
                'رياح قوية',
                'عدم وجود رؤية واضحة للقمر'
            ],
            solutions: [
                'استخدام تطبيق حساب الزوايا',
                'التأكد من استواء القاعدة باستخدام ميزان ماء',
                'التركيب في يوم هادئ الرياح',
                'استخدام جهاز قياس الإشارة',
                'البدء بالاتجاه التقريبي ثم الضبط الدقيق'
            ],
            tools: ['بوصلة', 'ميزان ماء', 'جهاز قياس إشارة', 'مفاتيح ربط']
        },
        'cable_routing': {
            title: 'مشاكل تمديد الكيبل',
            causes: [
                'كيبل طويل جداً يضعف الإشارة',
                'ثني الكيبل بزاوية حادة',
                'مرور الكيبل قرب أسلاك كهرباء',
                'عدم عزل الوصلات الخارجية'
            ],
            solutions: [
                'استخدام مقوي إشارة للمسافات الطويلة',
                'تجنب الثني الحاد للكيبل',
                'إبعاد الكيبل عن أسلاك الكهرباء',
                'عزل الوصلات الخارجية بشريط عازل للماء'
            ],
            tools: ['مقوي إشارة', 'شريط عازل', 'مشابك تثبيت']
        },
        'multi_lnb': {
            title: 'مشاكل تركيب عدة LNB',
            causes: [
                'عدم ضبط المسافات بين LNB بدقة',
                'استخدام حامل غير مناسب',
                'تداخل بين LNB',
                'استخدام DiSEqC غير متوافق'
            ],
            solutions: [
                'استخدام حامل متعدد متوافق مع حجم الطبق',
                'ضبط المسافات بدقة حسب الأقمار المستهدفة',
                'استخدام DiSEqC عالي الجودة',
                'ضبط إعدادات DiSEqC في الرسيفر'
            ],
            tools: ['حامل متعدد LNB', 'DiSEqC Switch', 'جهاز قياس إشارة']
        }
    },
    
    // مشاكل الطقس
    weather: {
        'rain_fade': {
            title: 'تأثير الأمطار على الإشارة',
            causes: [
                'امتصاص قطرات الماء للإشارة',
                'تجمع الماء على سطح الطبق',
                'دخول ماء إلى LNB',
                'غيوم كثيفة'
            ],
            solutions: [
                'استخدام طبق بحجم أكبر',
                'تركيب غطاء شفاف للـ LNB',
                'عزل الوصلات جيداً',
                'استخدام LNB عالي الحساسية',
                'تنظيف سطح الطبق من الماء'
            ],
            tools: ['طبق أكبر', 'غطاء LNB', 'شريط عازل', 'LNB عالي الحساسية']
        },
        'snow_effect': {
            title: 'تأثير الثلوج',
            causes: [
                'تراكم الثلج على الطبق',
                'تغير شكل الطبق بسبب وزن الثلج',
                'تغطية LNB بالثلج'
            ],
            solutions: [
                'تنظيف الطبق من الثلج بانتظام',
                'استخدام غطاء واقي للطبق',
                'تركيب سخان للطبق',
                'استخدام طبق مقوى'
            ],
            tools: ['فرشاة تنظيف', 'غطاء طبق', 'سخان طبق']
        },
        'wind_effect': {
            title: 'تأثير الرياح القوية',
            causes: [
                'تحرك الطبق من مكانه',
                'اهتزاز الطبق',
                'سقوط الطبق'
            ],
            solutions: [
                'تثبيت القاعدة بمسامير قوية في الجدار أو الأرض',
                'استخدام حامل متين',
                'تقوية البراغي والرباطات',
                'تركيب الطبق في مكان محمي من الرياح'
            ],
            tools: ['مسامير تثبيت', 'قاعدة خرسانية', 'رباطات معدنية']
        }
    }
};

// تصدير البيانات
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SATELLITES_DATABASE, REPAIR_DATABASE };
}
EOF
echo "✅ تم إنشاء قاعدة بيانات الأقمار والأعطال الكاملة"
