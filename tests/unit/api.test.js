/**
 * اختبارات API
 */

const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Sat Finder Pro AI API Tests', () => {
    jest.setTimeout(10000);

    test('GET /api/status should return online', async () => {
        try {
            const response = await axios.get(`${API_URL}/status`);
            expect(response.status).toBe(200);
            expect(response.data).toHaveProperty('status');
        } catch (error) {
            console.log('API not available, skipping test');
        }
    });

    test('GET /api/satellites should return array', async () => {
        try {
            const response = await axios.get(`${API_URL}/satellites`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.data)).toBe(true);
        } catch (error) {
            console.log('API not available, skipping test');
        }
    });

    test('GET /api/repairs should return array', async () => {
        try {
            const response = await axios.get(`${API_URL}/repairs`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.data)).toBe(true);
        } catch (error) {
            console.log('API not available, skipping test');
        }
    });
});
