const express = require('express');
const NotesController = require('../controllers/notesController');

const setRoutes = (app) => {
    const notesController = new NotesController();

    app.post('/api/notes', notesController.createNote);
    app.get('/api/notes', notesController.getNotes);
    app.get('/api/notes/:id', notesController.getNoteById);
    app.put('/api/notes/:id', notesController.updateNote);
    app.delete('/api/notes/:id', notesController.deleteNote);
};

module.exports = setRoutes;