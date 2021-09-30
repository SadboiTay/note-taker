const router = require("express").Router();
const notes = require("../../db/db.json");
const addNewNote = require("../../lib/notes");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = addNewNote(req.body, notes);
    res.json(note);
})

module.exports = router;