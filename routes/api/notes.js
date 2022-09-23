const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json');
const uuid = require('../../helper/uuid');

router.get('/notes', (req,res) => {
    res.json(notes);
});

router.post('/notes', (req,res) => {
    //Append an ID property to the note with a unique ID for each note
    const newID = uuid();
    const newNote = req.body;
    newNote.id = newID;
    fs.appendFile('../../db/db.json', JSON.stringify(req.body), (err) => console.log(err));
    res.send(newNote);
});

router.delete('/notes/:id', (req,res) => {
    //Find the note by ID and then remove it from the json
    notes.forEach(element => {
        if(element.id === req.params.id) {
            
        }
    });
});

module.exports = router;