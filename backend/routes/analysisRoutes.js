// backend/routes/analysisRoutes.js

// نستدعي مكتبة Express لإنشاء مسارات
const express = require('express');
const router = express.Router();

// مسار للحصول على بيانات التحليل اللحظي
router.get('/live', (req, res) => {
    // استجابة بنص تجريبي
    res.json({ message: 'Live analysis data' });
});

// مسار للحصول على بيانات لاعب بناءً على معرفه ID
router.get('/player/:id', (req, res) => {
    const playerId = req.params.id;
    // استجابة تحتوي على ID اللاعب
    res.json({ message: `Data for player ${playerId}` });
});

// نصدر المسارات ليتم استخدامها في server.js
module.exports = router;

