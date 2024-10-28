import React, { useEffect, useRef, useState } from 'react';
import "../styles/Hire.css";
import HireLink from '../components/HireLink';
import Notes from '../components/Notes';
import Footer from '../Sections/Footer'

const Hire = () => {
    const wrapperRef = useRef(null);
    const sectionRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [notePos, setNotePos] = useState({ x: 0, y: 0 });
    const [showLink, setShowLink] = useState(false);
    const [showNotes, setShowNotes] = useState(true);
    const [positions, setPositions] = useState([]);

    const mousePosition = (e) => {
        const header = wrapperRef.current;
        if (!header) return;
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const notesPosition = (e) => {
        const wrapper = sectionRef.current;
        if (!wrapper) return;
        setNotePos({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        const header = wrapperRef.current;
        const wrapper = sectionRef.current;

        if (header) {
            header.addEventListener("mousemove", mousePosition);
        }
        if (wrapper) {
            wrapper.addEventListener("mousemove", notesPosition);

            wrapper.addEventListener("mouseenter", () => setShowNotes(true));

            wrapper.addEventListener("mouseleave", () => setShowNotes(false));
        }

        return () => {
            if (header) {
                header.removeEventListener("mousemove", mousePosition);
            }
            if (wrapper) {
                wrapper.removeEventListener("mousemove", notesPosition);
                wrapper.removeEventListener("mouseenter", () => setShowNotes(true));
                wrapper.removeEventListener("mouseleave", () => setShowNotes(false));
            }
        };
    }, []);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setPositions((prev) => {
                if (prev.length >= 5) return [...prev.slice(5), notePos]; 
                return [...prev, notePos];
            });
        }, 300);

        return () => clearInterval(intervalId);
    }, [notePos]);

    const mouseEnter = () => {
        setShowLink(true);
        setTimeout(() => {
            setShowLink(false);
        }, 8000);
    };

    const handleNotes = () => {
        setShowNotes(true);
        setTimeout(() => {
            setShowNotes(false);
        }, 5000); 
    };

    return (
       <div className='reddunat__1'>
         <div className='hire__wrapper' onMouseEnter={handleNotes} ref={sectionRef}>
            {showNotes && positions.map((pos, i) => (
                <Notes key={i} posX={pos.x} posY={pos.y} />
            ))}
            <div className="close hire__section_close_1"></div>
            <div className="close hire__section_close_2"></div>
            <div className="close hire__section_close_3"></div>
            {showLink && <HireLink posX={mousePos.x} posY={mousePos.y} />}
            <div className="hire__headline_wrapper">
                <h1 className='hire__headline' ref={wrapperRef} onMouseEnter={mouseEnter} data-animation = "paragraph">
                    HIRE US FOR YOUR NEXT PROJECT.
                </h1>
            </div>
        </div>
        <Footer />
       </div>

    );
};

export default Hire;
