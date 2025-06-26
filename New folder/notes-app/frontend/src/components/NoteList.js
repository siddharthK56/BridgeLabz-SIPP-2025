import React, { useEffect, useState } from 'react';
import Note from './Note';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('/api/notes');
                const data = await response.json();
                setNotes(data);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, []);

    return (
        <div className="note-list">
            {notes.map(note => (
                <Note key={note._id} note={note} />
            ))}
        </div>
    );
};

export default NoteList;