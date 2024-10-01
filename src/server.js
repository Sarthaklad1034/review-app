const express = require('express');
const path = require('path');
const { addReview, getReviews } = require('./reviewManager');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/api/reviews', (req, res) => {
    const { name, review, rating } = req.body;
    addReview({ name, review, rating });
    res.status(201).json({ message: 'Review added successfully' });
});

app.get('/api/reviews', (req, res) => {
    res.json(getReviews());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});