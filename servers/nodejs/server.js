// Sat Finder Pro AI - Advanced Node.js Server
// الإصدار 4.1.0

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const morgan = require('morgan');
const path = require('path');
const cluster = require('cluster');
const os = require('os');
const fs = require('fs');
const https = require('https');
const http = require('http');

// Cluster Setup
if (cluster.isMaster) {
    const numWorkers = process.env.WEB_CONCURRENCY || os.cpus().length;
    console.log(`🚀 Master ${process.pid} is running`);
    console.log(`📊 Starting ${numWorkers} workers...`);
    
    for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', (worker, code, signal) => {
        console.log(`⚠️ Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });
} else {
    // Worker Process
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    // Security Middleware
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdnjs.cloudflare.com", "https://fonts.googleapis.com", "https://generativelanguage.googleapis.com"],
                styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
                fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
                imgSrc: ["'self'", "data:", "https:"],
                connectSrc: ["'self'", "https://generativelanguage.googleapis.com"]
            }
        },
        hsts: {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true
        }
    }));
    
    // CORS
    app.use(cors({
        origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*',
        credentials: true
    }));
    
    // Compression
    app.use(compression({
        level: 6,
        threshold: 1000
    }));
    
    // Logging
    const accessLogStream = fs.createWriteStream(
        path.join(__dirname, '../../logs/access.log'),
        { flags: 'a' }
    );
    app.use(morgan('combined', { stream: accessLogStream }));
    app.use(morgan('dev'));
    
    // Body Parsing
    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    
    // Rate Limiting
    const apiLimiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100,
        message: { error: 'Too many requests, please try again later.' },
        standardHeaders: true,
        legacyHeaders: false
    });
    
    const aiLimiter = rateLimit({
        windowMs: 60 * 60 * 1000, // 1 hour
        max: 50,
        message: { error: 'AI request limit reached. Please try again later.' }
    });
    
    // Slow Down
    const speedLimiter = slowDown({
        windowMs: 15 * 60 * 1000,
        delayAfter: 50,
        delayMs: (hits) => hits * 100
    });
    
    // Static Files
    app.use(express.static(path.join(__dirname, '../..'), {
        maxAge: '1h',
        setHeaders: (res, path) => {
            if (path.endsWith('.html')) {
                res.setHeader('Cache-Control', 'public, max-age=0');
            }
        }
    }));
    
    // API Routes
    app.use('/api/', apiLimiter, speedLimiter);
    app.use('/api/ai/', aiLimiter);
    
    // Health Check
    app.get('/health', (req, res) => {
        res.status(200).json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            worker: cluster.worker.id
        });
    });
    
    // Metrics Endpoint
    app.get('/metrics', (req, res) => {
        const metrics = {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            cpu: process.cpuUsage(),
            connections: server.connections
        };
        res.json(metrics);
    });
    
    // API Status
    app.get('/api/status', (req, res) => {
        res.json({
            status: 'online',
            version: '4.1.0',
            timestamp: new Date().toISOString(),
            worker: cluster.worker.id
        });
    });
    
    // API - Satellites
    app.get('/api/satellites', async (req, res) => {
        try {
            const satellites = [
                { id: 1, name_ar: 'نايل سات', position: '7.0°W' },
                { id: 2, name_ar: 'عرب سات', position: '26.0°E' },
                { id: 3, name_ar: 'هوت بيرد', position: '13.0°E' }
            ];
            res.json(satellites);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    
    // API - Search Frequencies
    app.get('/api/frequencies/search', (req, res) => {
        const { q } = req.query;
        const frequencies = [
            { channel: 'الجزيرة', freq: 10971, pol: 'V', sr: 27500 },
            { channel: 'MBC 1', freq: 11470, pol: 'V', sr: 27500 }
        ];
        
        const results = q ? frequencies.filter(f => 
            f.channel.includes(q) || f.freq.toString().includes(q)
        ) : frequencies;
        
        res.json(results);
    });
    
    // API - Repairs
    app.get('/api/repairs', (req, res) => {
        const repairs = [
            { category: 'signal', title: 'ضعف الإشارة', severity: 'medium' },
            { category: 'video', title: 'لا توجد صورة', severity: 'critical' }
        ];
        res.json(repairs);
    });
    
    // API - AI Ask (Proxy to Gemini)
    app.post('/api/ai/ask', async (req, res) => {
        const { question, api_key } = req.body;
        
        if (!question) {
            return res.status(400).json({ error: 'Question is required' });
        }
        
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${api_key || process.env.GEMINI_API_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: `أنت خبير أقمار صناعية. أجب بالعربية:\n${question}` }] }]
                    })
                }
            );
            
            const data = await response.json();
            const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'عذراً، لم أستطع الإجابة.';
            res.json({ response: answer });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    
    // SPA Fallback
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../..', 'index.html'));
    });
    
    // Error Handler
    app.use((err, req, res, next) => {
        console.error('Error:', err);
        res.status(err.status || 500).json({
            error: err.message || 'Internal Server Error'
        });
    });
    
    // Create Server
    let server;
    
    if (process.env.SSL_ENABLED === 'true') {
        const sslOptions = {
            key: fs.readFileSync(process.env.SSL_KEY_PATH),
            cert: fs.readFileSync(process.env.SSL_CERT_PATH)
        };
        server = https.createServer(sslOptions, app);
    } else {
        server = http.createServer(app);
    }
    
    // Track Connections
    server.connections = 0;
    server.on('connection', (socket) => {
        server.connections++;
        socket.on('close', () => server.connections--);
    });
    
    // Start Server
    server.listen(PORT, () => {
        console.log(`✅ Worker ${cluster.worker.id} (PID: ${process.pid}) listening on port ${PORT}`);
    });
    
    // Graceful Shutdown
    process.on('SIGTERM', () => {
        console.log('🛑 SIGTERM received. Closing server...');
        server.close(() => {
            console.log('✅ Server closed');
            process.exit(0);
        });
    });
}
