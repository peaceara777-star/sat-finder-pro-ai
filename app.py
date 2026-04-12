#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Sat Finder Pro AI - التطبيق الرئيسي
الإصدار 4.1.0
"""

import os
import json
import sqlite3
from datetime import datetime
from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# =====================================================
# إعدادات قاعدة البيانات
# =====================================================
DATABASE_PATH = os.path.join(os.path.dirname(__file__), 'database', 'satfinder.db')

def get_db():
    """الحصول على اتصال بقاعدة البيانات"""
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """تهيئة قاعدة البيانات"""
    schema_path = os.path.join(os.path.dirname(__file__), 'database', 'schema.sql')
    if os.path.exists(schema_path):
        conn = get_db()
        with open(schema_path, 'r', encoding='utf-8') as f:
            conn.executescript(f.read())
        conn.commit()
        conn.close()
        print("✅ تم تهيئة قاعدة البيانات")

# =====================================================
# API Routes
# =====================================================

@app.route('/')
def index():
    """الصفحة الرئيسية"""
    return send_from_directory('.', 'index.html')

@app.route('/api/status')
def api_status():
    """حالة API"""
    return jsonify({
        'status': 'online',
        'version': '4.1.0',
        'timestamp': datetime.now().isoformat(),
        'database': os.path.exists(DATABASE_PATH)
    })

@app.route('/api/satellites')
def get_satellites():
    """الحصول على جميع الأقمار"""
    conn = get_db()
    satellites = conn.execute('''
        SELECT id, name_ar, name_en, orbital_position, region, status 
        FROM satellites WHERE status = 'active' ORDER BY name_ar
    ''').fetchall()
    conn.close()
    return jsonify([dict(s) for s in satellites])

@app.route('/api/satellites/<int:sat_id>')
def get_satellite(sat_id):
    """الحصول على قمر محدد مع تردداته"""
    conn = get_db()
    satellite = conn.execute('SELECT * FROM satellites WHERE id = ?', (sat_id,)).fetchone()
    if satellite:
        frequencies = conn.execute('''
            SELECT * FROM frequencies WHERE satellite_id = ? AND is_active = 1
            ORDER BY channel_name_ar
        ''', (sat_id,)).fetchall()
        result = dict(satellite)
        result['frequencies'] = [dict(f) for f in frequencies]
        conn.close()
        return jsonify(result)
    conn.close()
    return jsonify({'error': 'القمر غير موجود'}), 404

@app.route('/api/frequencies/search')
def search_frequencies():
    """البحث في الترددات"""
    query = request.args.get('q', '')
    conn = get_db()
    frequencies = conn.execute('''
        SELECT f.*, s.name_ar as satellite_name, s.orbital_position
        FROM frequencies f
        JOIN satellites s ON f.satellite_id = s.id
        WHERE f.is_active = 1 
        AND (f.channel_name_ar LIKE ? OR f.frequency LIKE ?)
        ORDER BY f.channel_name_ar
        LIMIT 100
    ''', (f'%{query}%', f'%{query}%')).fetchall()
    conn.close()
    return jsonify([dict(f) for f in frequencies])

@app.route('/api/repairs')
def get_repairs():
    """الحصول على الإصلاحات"""
    category = request.args.get('category', '')
    conn = get_db()
    if category:
        repairs = conn.execute('''
            SELECT * FROM repairs WHERE category = ? ORDER BY severity DESC
        ''', (category,)).fetchall()
    else:
        repairs = conn.execute('SELECT * FROM repairs ORDER BY category, severity DESC').fetchall()
    conn.close()
    return jsonify([dict(r) for r in repairs])

@app.route('/api/repairs/<int:repair_id>')
def get_repair(repair_id):
    """الحصول على إصلاح محدد"""
    conn = get_db()
    repair = conn.execute('SELECT * FROM repairs WHERE id = ?', (repair_id,)).fetchone()
    if repair:
        conn.execute('UPDATE repairs SET views_count = views_count + 1 WHERE id = ?', (repair_id,))
        conn.commit()
    conn.close()
    return jsonify(dict(repair)) if repair else jsonify({'error': 'غير موجود'}), 404

@app.route('/api/ai/ask', methods=['POST'])
def ai_ask():
    """المساعد الذكي"""
    data = request.get_json()
    question = data.get('question', '')
    api_key = data.get('api_key', '')
    
    if not api_key:
        return jsonify({'error': 'مطلوب مفتاح API'}), 400
    
    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel('gemini-1.5-pro')
        
        prompt = f"""أنت خبير متخصص في الأقمار الصناعية والرسيفرات. أجب باللغة العربية.

السؤال: {question}

قدم إجابة تقنية دقيقة ومفيدة."""
        
        response = model.generate_content(prompt)
        return jsonify({'response': response.text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/stats')
def get_stats():
    """إحصائيات عامة"""
    conn = get_db()
    stats = conn.execute('''
        SELECT 
            (SELECT COUNT(*) FROM satellites) as total_satellites,
            (SELECT COUNT(*) FROM frequencies) as total_frequencies,
            (SELECT COUNT(*) FROM repairs) as total_repairs,
            (SELECT COUNT(*) FROM receiver_brands) as total_brands
    ''').fetchone()
    conn.close()
    return jsonify(dict(stats))

# =====================================================
# تشغيل التطبيق
# =====================================================
if __name__ == '__main__':
    init_db()
    print("🚀 Sat Finder Pro AI - الإصدار 4.1.0")
    print("📡 API تعمل على: http://localhost:5000")
    print("🔧 نقاط النهاية:")
    print("   GET  /api/status")
    print("   GET  /api/satellites")
    print("   GET  /api/satellites/<id>")
    print("   GET  /api/frequencies/search?q=")
    print("   GET  /api/repairs")
    print("   POST /api/ai/ask")
    print("   GET  /api/stats")
    app.run(host='0.0.0.0', port=5000, debug=True)
