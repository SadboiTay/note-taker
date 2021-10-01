const fs = require("fs");
const path = require("path");

function addNewNote(body, notesArray) {
    const note = body;
    note.id = generateNoteId(notesArray);
    generateNoteId(notesArray);
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
}

function getNoteIndex(deleteId, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (deleteId === notesArray[i].id) {
            return i;
        }
    }
}

function generateNoteId(notesArray) {
    let counter = 1;
    notesArray.forEach(note => {
        note.id = counter;
        counter++;
    })
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return notesArray.length+1;
}

module.exports = {
    addNewNote,
    getNoteIndex
}