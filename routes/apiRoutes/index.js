const router = require("express").Router();
const notes = require("../../db/db.json");
const { addNewNote, getNoteIndex } = require("../../lib/notes");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = addNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    const deleteId = parseInt(req.params.id);
    const deleteIndex = getNoteIndex(deleteId, notes);

    notes.splice(deleteIndex, 1);

    res.send(notes);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
})

module.exports = router;