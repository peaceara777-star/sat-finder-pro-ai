const SATELLITES_DATABASE = {
    arabic: [
        {
            id: 'nilesat_7w',
            name: 'نايل سات',
            position: '7.0°W',
            longitude: 7.0,
            direction: 'W',
            coverage: 'الشرق الأوسط وشمال أفريقيا',
            frequencies: [
                { name: 'الجزيرة', freq: 10971, pol: 'H', sr: 27500, fec: '3/4', category: 'أخبار', encrypted: false },
                { name: 'MBC 1', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'ترفيه', encrypted: false },
                { name: 'العربية', freq: 11470, pol: 'V', sr: 27500, fec: '5/6', category: 'أخبار', encrypted: false },
                { name: 'بي إن سبورت 1', freq: 12604, pol: 'H', sr: 27500, fec: '2/3', category: 'رياضة', encrypted: true }
            ]
        }
    ]
};
