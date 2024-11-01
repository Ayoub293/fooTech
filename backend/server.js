// backend/server.js

// نستدعي مكتبات Express و http و Socket.io
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();

// نقوم بتحميل متغيرات البيئة باستخدام dotenv
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// نفعّل middleware لتحليل البيانات بصيغة JSON
app.use(express.json());

// إعداد المسار الأساسي لاختبار الخادم
app.get('/', (req, res) => {
    res.send('fooTech API is running...');
});

// إنشاء خادم HTTP وربط Socket.io به
const server = http.createServer(app);
const io = socketIo(server);

// عند اتصال عميل جديد، نعرض رسالة تأكيد
io.on('connection', (socket) => {
    console.log('A user connected');

    // عند قطع الاتصال، نعرض رسالة تأكيد
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// تشغيل الخادم على المنفذ المحدد في .env أو 5000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});























