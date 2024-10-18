import React, { useEffect, useState } from 'react';
import { Hire } from '../Data';
import "../styles/Notes.css";

const Notes = ({ posX, posY }) => {
    const coolText = Hire[1]?.text || [];
    const coolColor = Hire[0]?.colors || [];
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (!coolColor.length || !coolText.length) {
            return;
        }

       
        const createNewNote = () => {
            const randomText = coolText[Math.floor(Math.random() * coolText.length)];
            const randomColor = coolColor[Math.floor(Math.random() * coolColor.length)];

            const newNote = {
                id: Math.random(),
                posX,
                posY,
                text: randomText,
                color: randomColor,
            };

            // Add the new note to the list
            setNotes(prevNotes => {
                const updatedNotes = [...prevNotes, newNote];
                return updatedNotes.length > 5 ? updatedNotes.slice(updatedNotes.length - 5) : updatedNotes;
            });

            // Remove the note after 10 seconds
            setTimeout(() => {
                setNotes(prevNotes => prevNotes.filter(note => note.id !== newNote.id));
            }, 3000); // 10 seconds
        };

        // Create the first note immediately
        createNewNote();

        const intervalId = setInterval(() => {
            createNewNote();
        }, 3000);

      
        return () => clearInterval(intervalId);
    }, [posX, posY]); 

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
                        display: (note.posX === 0 || note.posY === 0) ? 'none' : 'flex'
                    }}
                >
                    <p>{note.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Notes;
