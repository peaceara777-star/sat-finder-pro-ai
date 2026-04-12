// =====================================================
// SAT FINDER PRO AI - خادم API
// =====================================================

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'sat-finder-secret-key-2024';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('../'));

// قاعدة البيانات
const db = new sqlite3.Database('../database/satfinder.db');

// تهيئة قاعدة البيانات
db.exec(require('fs').readFileSync('../database/schema.sql', 'utf8'), (err) => {
    if (err) console.error('خطأ في تهيئة قاعدة البيانات:', err);
    else console.log('✅ تم تهيئة قاعدة البيانات بنجاح');
});

// =====================================================
// API Routes - الأقمار الصناعية
// =====================================================

// الحصول على جميع الأقمار
app.get('/api/satellites', (req, res) => {
    db.all('SELECT * FROM satellites WHERE status = "active" ORDER BY name_ar', (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
});

// الحصول على قمر محدد مع تردداته
app.get('/api/satellites/:id', (req, res) => {
    db.get('SELECT * FROM satellites WHERE id = ?', [req.params.id], (err, satellite) => {
        if (err) res.status(500).json({ error: err.message });
        else if (!satellite) res.status(404).json({ error: 'القمر غير موجود' });
        else {
            db.all('SELECT * FROM frequencies WHERE satellite_id = ? AND is_active = 1 ORDER BY channel_name_ar', 
                [req.params.id], (err, frequencies) => {
                if (err) res.status(500).json({ error: err.message });
                else res.json({ ...satellite, frequencies });
            });
        }
    });
});

// =====================================================
// API Routes - الترددات
// =====================================================

// البحث في الترددات
app.get('/api/frequencies/search', (req, res) => {
    const { q, category, satellite_id, encrypted, limit = 100 } = req.query;
    let sql = `
        SELECT f.*, s.name_ar as satellite_name, s.orbital_position 
        FROM frequencies f 
        JOIN satellites s ON f.satellite_id = s.id 
        WHERE f.is_active = 1
    `;
    const params = [];
    
    if (q) {
        sql += ' AND (f.channel_name_ar LIKE ? OR f.frequency LIKE ?)';
        params.push(`%${q}%`, `%${q}%`);
    }
    if (category) {
        sql += ' AND f.category = ?';
        params.push(category);
    }
    if (satellite_id) {
        sql += ' AND f.satellite_id = ?';
        params.push(satellite_id);
    }
    if (encrypted !== undefined) {
        sql += ' AND f.encrypted = ?';
        params.push(encrypted === 'true' ? 1 : 0);
    }
    
    sql += ' ORDER BY f.channel_name_ar LIMIT ?';
    params.push(parseInt(limit));
    
    db.all(sql, params, (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
});

// الحصول على جميع الترددات لقمر محدد
app.get('/api/frequencies/satellite/:satellite_id', (req, res) => {
    db.all('SELECT * FROM frequencies WHERE satellite_id = ? AND is_active = 1 ORDER BY channel_name_ar', 
        [req.params.satellite_id], (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
});

// إضافة تردد جديد (يتطلب مصادقة)
app.post('/api/frequencies', authenticateToken, (req, res) => {
    const { satellite_id, channel_name_ar, frequency, polarization, symbol_rate, category, encrypted } = req.body;
    
    db.run(`INSERT INTO frequencies (satellite_id, channel_name_ar, frequency, polarization, symbol_rate, category, encrypted) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [satellite_id, channel_name_ar, frequency, polarization, symbol_rate, category, encrypted ? 1 : 0],
        function(err) {
            if (err) res.status(500).json({ error: err.message });
            else res.json({ id: this.lastID, message: 'تمت إضافة التردد بنجاح' });
        });
});

// =====================================================
// API Routes - الأعطال والإصلاحات
// =====================================================

// الحصول على جميع فئات الإصلاحات
app.get('/api/repairs/categories', (req, res) => {
    db.all('SELECT DISTINCT category FROM repairs ORDER BY category', (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows.map(r => r.category));
    });
});

// الحصول على إصلاحات حسب الفئة
app.get('/api/repairs/category/:category', (req, res) => {
    db.all('SELECT * FROM repairs WHERE category = ? ORDER BY severity DESC, title_ar', 
        [req.params.category], (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
});

// البحث في الإصلاحات
app.get('/api/repairs/search', (req, res) => {
    const { q } = req.query;
    db.all('SELECT * FROM repairs WHERE title_ar LIKE ? OR causes LIKE ? OR solutions LIKE ? LIMIT 50',
        [`%${q}%`, `%${q}%`, `%${q}%`], (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
});

// الحصول على إصلاح محدد
app.get('/api/repairs/:id', (req, res) => {
    db.get('SELECT * FROM repairs WHERE id = ?', [req.params.id], (err, row) => {
        if (err) res.status(500).json({ error: err.message });
        else if (!row) res.status(404).json({ error: 'الإصلاح غير موجود' });
        else {
            // تحديث عداد المشاهدات
            db.run('UPDATE repairs SET views_count = views_count + 1 WHERE id = ?', [req.params.id]);
            res.json(row);
        }
    });
});

// =====================================================
// API Routes - المواقع وزوايا التوجيه
// =====================================================

// الحصول على جميع المواقع
app.get('/api/locations', (req, res) => {
    db.all('SELECT * FROM locations ORDER BY country_ar, city_ar', (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
});

// الحصول على زوايا التوجيه لقمر في موقع محدد
app.get('/api/angles/:satellite_id/:location_id', (req, res) => {
    db.get('SELECT * FROM satellite_angles WHERE satellite_id = ? AND location_id = ?',
        [req.params.satellite_id, req.params.location_id], (err, row) => {
        if (err) res.status(500).json({ error: err.message });
        else if (row) res.json(row);
        else {
            // حساب الزوايا (يمكن إضافة مكتبة لحسابها)
            const calculated = calculateAngles(req.params.satellite_id, req.params.location_id);
            res.json(calculated);
        }
    });
});

// =====================================================
// API Routes - الإحصائيات
// =====================================================

// تسجيل استخدام
app.post('/api/stats/track', (req, res) => {
    const { type } = req.body;
    const today = new Date().toISOString().split('T')[0];
    
    db.run(`INSERT INTO usage_stats (date, ${type}) VALUES (?, 1) 
            ON CONFLICT(date) DO UPDATE SET ${type} = ${type} + 1`,
        [today], (err) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json({ success: true });
    });
});

// الحصول على الإحصائيات
app.get('/api/stats', authenticateToken, (req, res) => {
    db.get(`SELECT 
        COUNT(DISTINCT s.id) as total_satellites,
        COUNT(DISTINCT f.id) as total_frequencies,
        COUNT(DISTINCT r.id) as total_repairs,
        COUNT(DISTINCT l.id) as total_locations
        FROM satellites s, frequencies f, repairs r, locations l`, 
        (err, row) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(row);
    });
});

// =====================================================
// API Routes - المصادقة
// =====================================================

// تسجيل الدخول
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    
    db.get('SELECT * FROM admin_users WHERE username = ? AND is_active = 1', [username], async (err, user) => {
        if (err) res.status(500).json({ error: err.message });
        else if (!user) res.status(401).json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
        else {
            const validPassword = await bcrypt.compare(password, user.password_hash);
            if (!validPassword) {
                res.status(401).json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
            } else {
                const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
                db.run('UPDATE admin_users SET last_login = CURRENT_TIMESTAMP WHERE id = ?', [user.id]);
                res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
            }
        }
    });
});

// Middleware للمصادقة
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ error: 'مطلوب مصادقة' });
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'جلسة غير صالحة' });
        req.user = user;
        next();
    });
}

// دالة حساب الزوايا (مبسطة)
function calculateAngles(satellite_id, location_id) {
    // يمكن إضافة مكتبة مثل satellite.js لحساب دقيق
    return {
        satellite_id: parseInt(satellite_id),
        location_id: parseInt(location_id),
        azimuth: 180.00,
        elevation: 45.00,
        lnb_skew: 0.00,
        calculated: true
    };
}

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`🚀 خادم Sat Finder Pro API يعمل على المنفذ ${PORT}`);
    console.log(`📡 API متاحة على: http://localhost:${PORT}/api`);
});

module.exports = app;
