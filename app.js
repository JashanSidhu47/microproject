const express = require('express');
const path = require('path');
const jsonData = require('./data/data.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


app.get('/api/data', (req, res) => {
    res.json(jsonData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
