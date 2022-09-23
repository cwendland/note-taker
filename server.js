const api = require('./routes/api');
const express = require('express');
const path = require('path');

const PORT = 3001;

const app = express();

app.use(express.static());
//app.use({urlEncoded: true});
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.get('/notes', (req,res) => {
 res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);