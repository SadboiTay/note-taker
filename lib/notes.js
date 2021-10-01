const fs = require("fs");
const path = require("path");

function addNewNote(body, notesArray) {
    const note = body;
    note.id = notesArray.length;
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

module.exports = {
    addNewNote,
    getNoteIndex
}