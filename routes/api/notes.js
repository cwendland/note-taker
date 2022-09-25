const express = require('express');
const router = express.Router();
const fs = require('fs');
const notes = require('../../db/db.json');
const uuid = require('../../helper/uuid');

router.get('/', (req,res) => {
    res.json(notes);
});

router.post('/', (req,res) => {
    //Append an ID property to the note with a unique ID for each note
    const newID = uuid();
    const newNote = req.body;
    newNote.id = newID;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);

        // Add a new review
        parsedNotes.push(newNote);

        // Write updated reviews back to the file
        fs.writeFile(
          './db/db.json',
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated notes!')
        );
      }
    });

    const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
});

router.delete('/:id', (req,res) => {
    //Find the note by ID and then remove it from the json
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);

        // Add a new review
        parsedNotes.push(newReview);

        // Write updated reviews back to the file
        fs.writeFile(
          './db/db.json',
          JSON.stringify(parsedNotes.filter(note => note.id !== req.params.id), null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully removed note!')
        );
      }
    });

    const response = {
      status: 'Success'
    };

    console.log(response);
    res.status(201).json(response);
    res.send(`Deleted note with id ${req.params.id}`);
});

module.exports = router;