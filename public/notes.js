//Imports

//DOM elements
const noteList = document.getElementById('note-list');
const inputHead = document.getElementById('input-head');
const inputBody = document.getElementById('input-body');

//Get notes from the server

function displayNote(event) {
    event.preventDefault();
}

function deleteNote(event) {
    event.preventDefault();
    //Remove note dom from page

    event.parentNode.remove();
    //Remove note from server
}

function addNote(event) {
    event.preventDefault();
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
        const noteDiv = document.createElement('div');
        const noteName = document.createElement('p');
        const delButton = document.createElement('span')
        delButton.setAttribute('class', 'del-button');
        noteName.setAttribute('class', 'note-name');
        noteDiv.setAttribute('class', 'note-name-container');
        noteDiv.setAttribute('data-id', element.id);
        noteName.textContent = element.name;
        noteDiv.addEventListener('click', displayNote);
        delButton.addEventListener('click', deleteNote);
        noteDiv.appendChild(noteName).appendChild(delButton);
        noteList.appendChild(noteDiv);
    });
}