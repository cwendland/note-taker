const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json');
const uuid = require('../../helper/uuid');

router.get('/notes', (req,res) => {
    res.json(notes);
});

router.post('/notes', (req,res) => {
    //Append an ID property to the note with a unique ID for each note
    let newNotes = JSON.parse(notes);
    const newID = uuid();
    const newNote = req.body;
    newNote.id = newID;
    newNotes.push(newNote);
    fs.writeFile('../../db/db.json', JSON.stringify(newNotes), (err) => console.log(err));
    res.send(newNote);
});

router.delete('/notes/:id', (req,res) => {
    //Find the note by ID and then remove it from the json
    let newNotes = notes.filter(note => note.id !== req.params.id);
    fs.writeFile('../../db/db.json', JSON.stringify(newNotes), (err) => console.log(err));
    res.send(`Deleted note with id ${req.params.id}`);
});

module.exports = router;