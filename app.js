const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const processArray = require('./fizzBuzzController');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/fizzbuzz', (req, res) => {
    try {
        const arr = req.body;
        const results = processArray(arr);
        res.json(results);
    } catch (error) {
        console.log('error in fizzbuzz', error)
        res.status(400).send(error.message);
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`FizzBuzz app listening at http://localhost:${port}`);
});
