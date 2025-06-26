import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NotePage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await fetch(`/api/notes/${id}`);
                const data = await response.json();
                setNote(data);
            } catch (error) {
                console.error('Error fetching the note:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNote();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!note) {
        return <div>Note not found</div>;
    }

    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <p><small>{new Date(note.timestamp).toLocaleString()}</small></p>
        </div>
    );
};

export default NotePage;