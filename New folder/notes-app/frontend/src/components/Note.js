import React from 'react';

const Note = ({ note }) => {
    return (
        <div className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <small>{new Date(note.timestamp).toLocaleString()}</small>
        </div>
    );
};

export default Note;