//Imports

//DOM elements
const noteList = document.getElementById('note-list');
const inputHead = document.getElementById('input-head');
const inputBody = document.getElementById('input-body');

//Get notes from the server

function displayNote(event) {
    event.preventDefault();
    //Loop through the note list looking for one with same ID
    let note;
    notes.forEach(element => {
        if(element.id === event.id) {
            note = element;
        }
    });
    inputHead.setAttribute('data-id', note.id);
    inputHead.textContent = note.name;
    inputBody.textContent = note.body;
}

function deleteNote(event) {
    event.preventDefault();
    //Remove note dom from page

    event.parentNode.remove();
    //Remove note from server
}

function newNote(event) {
    event.preventDefault();
    inputHead.setAttribute('data-id', 'none');
}

function saveNote(event) {
    event.preventDefault();
    //Server checks if it has an ID, if no ID then it sends to server without an ID portion.
    //The server should check if the id is already in there if it is then update the note.
    
    let note = {
        "name": inputHead.value,
        "body": inputBody.value
    }
    //POST request to server with the json as body
    //After post, get the notes again and repopulate them to page
    populateNoteList();
}

function populateNoteList() {
    notes.forEach(element => {
        //Create all the elements needed for the note
        const noteDiv = document.createElement('div');
        const noteName = document.createElement('p');
        const delButton = document.createElement('span')
        delButton.setAttribute('class', 'del-button');
        noteName.setAttribute('class', 'note-name');
        noteDiv.setAttribute('class', 'note-name-container');
        noteDiv.setAttribute('data-id', element.id);
        noteName.textContent = element.name;

        //Add event listener for the note div and for the delete note button
        noteDiv.addEventListener('click', displayNote);
        delButton.addEventListener('click', deleteNote);

        //Append to the parents
        noteDiv.appendChild(noteName).appendChild(delButton);
        noteList.appendChild(noteDiv);
    });
}