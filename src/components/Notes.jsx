import React, { useEffect, useState } from 'react';
import { Hire } from '../Data';
import "../styles/Notes.css";

// const Notes = ({ posX, posY }) => {
//     const coolText = Hire[1]?.text || [];
//     const coolColor = Hire[0]?.colors || [];
//     const [notes, setNotes] = useState([]); // State to store all notes

//     useEffect(() => {
//         // Prevent errors if data is not available
//         if (!coolColor.length || !coolText.length) {
//             return;
//         }

//         // Function to create and add a new note
//         const createNewNote = () => {
//             // Select random text and color for the new note
//             const randomText = coolText[Math.floor(Math.random() * coolText.length)];
//             const randomColor = coolColor[Math.floor(Math.random() * coolColor.length)];

//             // Create a new note object with the current position, text, and color
//             const newNote = {
//                 id: Math.random(), // Unique ID for each note
//                 posX, // Use the current mouse position
//                 posY,
//                 text: randomText,
//                 color: randomColor,
//             };

//             // Log the note creation for debugging
//             console.log(`Creating note at (${newNote.posX}, ${newNote.posY}): "${newNote.text}"`);

//             // Update notes state with the new note
//             setNotes(prevNotes => [...prevNotes, newNote]); // Ensure all notes are stored
//         };

//         // Create the first note immediately
//         createNewNote();

//         // Set interval to create a new note every 10 seconds with a random delay
//         const intervalId = setInterval(() => {
//             // Generate a random delay between 0 and 2000 milliseconds (2 seconds)
//             const randomDelay = Math.floor(Math.random() * 30000); // Random delay in ms
            
//             // Use setTimeout to create a new note after the random delay
//             setTimeout(() => {
//                 createNewNote();
//             }, randomDelay);

//         }, 10000); // 10 seconds in milliseconds

//         // Cleanup interval on component unmount
//         return () => clearInterval(intervalId);
//     }, [coolText, coolColor, posX, posY]); // Add posX and posY to dependencies to use latest position

//     return (
//         <div>
//             {notes.map(note => (
//                 <div
//                     key={note.id}
//                     className='notes__wrapper'
//                     style={{
//                         backgroundColor: note.color,
//                         top: note.posY,
//                         left: note.posX,
//                         position: 'absolute',
//                     }}
//                 >
//                     <p>{note.text}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
const Notes = ({ posX, posY }) => {
    const coolText = Hire[1]?.text || [];
    const coolColor = Hire[0]?.colors || [];

    if (!coolColor.length || !coolText.length) {
        return <p>No data available</p>;
    }

    const [text, setText] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        // Update text and color every time the mouse moves (i.e., posX or posY changes)
        setText(coolText[Math.floor(Math.random() * coolText.length)]);
        setColor(coolColor[Math.floor(Math.random() * coolColor.length)]);
    }, []); // Dependency on posX and posY to trigger updates

    return (
        <div className='notes__wrapper' style={{ backgroundColor: color, top: posY, left: posX }}>
            <p>{text}</p>
        </div>
    );
};

export default Notes;
