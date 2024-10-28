import React, { useEffect, useRef, useState } from 'react';
import "../styles/Works.css";
import { Slider } from '../Data';
import { useAppContext } from '../AppContext';
import exploreImg from "../assets/arrow-up-right.png";
import Cursor from '../components/Cursor';
import gsap from 'gsap';
import { handleIndexChange, nextSeq, prevSeq } from '../animations/work';

const Works = () => {
  const [index, setIndex] = useState(0)
  const { gsapInstance, splitWords } = useAppContext();
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [arrowDirection, setArrowDirection] = useState(null);

  const workRef = useRef(null);
  const headlinerRef = useRef(null);
  const worksRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  var centerX

  // Function to go to the next image with animation
   const NextIndex = () => nextSeq(headlinerRef, setIndex, Slider)
  // Function to go to the previous image
  const prevIndex = () => prevSeq(headlinerRef, setIndex, Slider)

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const workElement = workRef.current;
    if (!workElement) return;

    const rect = workElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;

    const isInside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (isInside) {
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      setShowCursor(true);
      setArrowDirection(e.clientX < centerX ? 'left' : 'right');
    } else {
      setShowCursor(false);
      setArrowDirection(null);
    }
  };

  // Animate cursor position
  const animate = () => {
    delayedMouse.current = {
      x: lerp(delayedMouse.current.x, mouse.current.x, 0.1),
      y: lerp(delayedMouse.current.y, mouse.current.y, 0.1)
    };

    setMousePosition({ left: delayedMouse.current.x, top: delayedMouse.current.y });
    rafId.current = window.requestAnimationFrame(animate);
  };

  // Lerp function
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  // Handle index change on click
  const handleIndex = (e) => {
    const workElement = workRef.current;
    if (!workElement) return;

    const rect = workElement.getBoundingClientRect();
     centerX = rect.left + rect.width / 2;
    const tl = gsap.timeline();

    handleIndexChange(e, centerX, headlinerRef,setIndex, Slider)
    
  };

  // Setup mouse move event and animation frame
  useEffect(() => {
    const workElement = workRef.current;
    if (workElement) {
      workElement.addEventListener("mousemove", handleMouseMove);
      rafId.current = window.requestAnimationFrame(animate);
    }

    // Set up the interval to change images every 5 seconds
    const intervalId = setInterval(NextIndex, 5000);

    return () => {
      if (workElement) {
        workElement.removeEventListener("mousemove", handleMouseMove);
      }
      window.cancelAnimationFrame(rafId.current);
      clearInterval(intervalId); // Clear interval on unmount
    };
  }, []);

  return (
    <section className='work__section' onMouseMove={handleMouseMove} onClick={handleIndex} ref={workRef}>
      <Cursor x={mousePosition.left} y={mousePosition.top} visible={showCursor} arrowDirection={arrowDirection} />
      <div className="close first__work_close"></div>
      <div className="close second__work_close"></div>
      <img src={Slider[index].image} alt={Slider[index].name} className='work__background' />
      <div className="work__wrapper">
        <div className='redundant'>
          <div className="work___info">
            <div className='work___info_header_wrapper'>
              <h1 className='work___info_header' ref={headlinerRef}>{splitWords(Slider[index].name)}</h1>
            </div>
            <div className='work__roles'>
              {Slider[index].works.map((work, index) => (
                <p key={index} className='work___roles_paragraph' ref={el => worksRef.current.push((el))}>{work}</p>
              ))}
            </div>
          </div>
          <div className="work___explore">
            <div className="visit___site_work">
              <a className='visit___site_work__link'>Visit Site</a>
              <div className="link__explore_wrapper">
                <img src={exploreImg} alt="link" className='link__explore' />
              </div>
            </div>
            <div className="work__explore__counter">
              <p className='work__explore__counter_count'>{index + 1}/{Slider.length}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
