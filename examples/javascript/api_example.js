/**
 * مثال استخدام Sat Finder Pro AI API مع JavaScript
 */

const BASE_URL = 'http://localhost:5000/api';

async function getSatellites() {
    const response = await fetch(`${BASE_URL}/satellites`);
    return response.json();
}

async function searchFrequencies(query) {
    const response = await fetch(`${BASE_URL}/frequencies/search?q=${encodeURIComponent(query)}`);
    return response.json();
}

async function askAI(question, apiKey) {
    const response = await fetch(`${BASE_URL}/ai/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, api_key: apiKey })
    });
    const data = await response.json();
    return data.response;
}

async function getRepairs(category = '') {
    const url = category ? `${BASE_URL}/repairs?category=${category}` : `${BASE_URL}/repairs`;
    const response = await fetch(url);
    return response.json();
}

// مثال استخدام
(async () => {
    try {
        const satellites = await getSatellites();
        console.log(`عدد الأقمار: ${satellites.length}`);
        
        const results = await searchFrequencies('الجزيرة');
        console.log(`نتائج البحث: ${results.length}`);
        
        const repairs = await getRepairs('signal');
        console.log(`الإصلاحات: ${repairs.length}`);
    } catch (error) {
        console.error('خطأ:', error.message);
    }
})();
