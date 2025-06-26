const express = require('express');
const mongoose = require('mongoose');
const notesRoutes = require('./routes/notesRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});