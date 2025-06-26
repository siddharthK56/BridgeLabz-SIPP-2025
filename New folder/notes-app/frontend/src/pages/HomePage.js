import React, { useEffect, useState } from 'react';
import NoteList from '../components/NoteList';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('/api/notes');
                if (!response.ok) {
                    throw new Error('Failed to fetch notes');
                }
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Notes</h1>
            <NoteList />
        </div>
    );
};

export default HomePage;