const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json')

router.get('/notes', (req,res) => {
    res.json(notes);
});

router.post('/notes', (req,res) => {
    //Append an ID property to the note with a unique ID for each note
    const newNote = req.body;
    newNote.id = /*TODO add ID*/ 3;
    fs.appendFile('../../db/db.json', JSON.stringify(req.body), (err) => console.log(err));
    res.send(newNote);
});

module.exports = router;