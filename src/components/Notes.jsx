import React, { useEffect, useState } from 'react';
import { Hire } from '../Data';
import "../styles/Notes.css";

const Notes = ({ posX, posY }) => {
    const coolText = Hire[1]?.text || [];
    const coolColor = Hire[0]?.colors || [];
    const [notes, setNotes] = useState([]); // State to store all notes

    useEffect(() => {
        if (!coolColor.length || !coolText.length) {
            return;
        }

        // Function to create and add a new note
        const createNewNote = () => {
            const randomText = coolText[Math.floor(Math.random() * coolText.length)];
            const randomColor = coolColor[Math.floor(Math.random() * coolColor.length)];

            const newNote = {
                id: Math.random(), // Unique ID
                posX,
                posY,
                text: randomText,
                color: randomColor,
            };

            // Add the new note to the list
            setNotes(prevNotes => [...prevNotes, newNote]);

            // Remove the note after 10 seconds
            setTimeout(() => {
                setNotes(prevNotes => prevNotes.filter(note => note.id !== newNote.id));
            }, 10000); // 10 seconds
        };

        // Create the first note immediately
        createNewNote();

        // Every time the mouse moves, create a new note
        // This interval is to simulate note creation based on movement
        const intervalId = setInterval(() => {
            createNewNote();
        }, 10000); // Every 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [posX, posY, coolColor, coolText]); // Trigger effect on mouse position change

    return (
        <div>
            {notes.map(note => (
                <div
                    key={note.id}
                    className='notes__wrapper'
                    style={{
                        backgroundColor: note.color,
                        top: note.posY,
                        left: note.posX,
                        position: 'absolute',
                    }}
                >
                    <p>{note.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Notes;
