const notes = require('./notes');
const express = require('express');

const app = express();

app.use('/notes', notes);

app.get('/', (req,res) => {
    res.send('API');
})

module.exports = app;