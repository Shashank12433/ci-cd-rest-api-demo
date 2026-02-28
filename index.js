const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ message: "API is running" });
});

app.post('/add', (req, res) => {
    const { a, b } = req.body;
    return res.json({ result: a + b });
});

module.exports = app;
