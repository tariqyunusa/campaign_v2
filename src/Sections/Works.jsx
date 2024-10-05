import React, { useEffect, useRef, useState } from 'react'
import "../styles/Works.css"
import { Slider } from '../Data'
import { useAppContext } from '../AppContext'
import exploreImg from "../assets/arrow-up-right.png"
import Cursor from '../components/Cursor'
import gsap from 'gsap'

const Works = () => {
    const [index, setIndex] = useState(0)
    const {gsapInstance, splitWords} = useAppContext()
    const [mousePosition, setMousePosition] = useState({left: 0, top:0})
    const [showCursor, setShowCursor] = useState(false)
    const [arrowDirection, setArrowDirection] = useState(null)
    const workRef = useRef(null);
    const imageRef = useRef(null)

   

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
          setMousePosition({ left: e.clientX - rect.left, top: e.clientY - rect.top });
          setShowCursor(true);
          setArrowDirection(e.clientX < centerX ? 'left' : 'right');
        } else {
          setShowCursor(false);
          setArrowDirection(null);
        }
      };

      const animateImage = (newIndex) => {
        const tl = gsap.timeline()

        tl.to(imageRef.current, {
          clipPath: 'polygon(100% 0, 100% 100%, 100% 100%, 100% 0)',
          duration:0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            setIndex(newIndex)
          }
        })
        tl.fromTo(imageRef.current, {
          clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)',
        },{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 0.8,
          ease: 'power2.inOut'
        })
      }

      
      const NextIndex = () => {
        const nextIndex = (index + 1) % Slider.length
        animateImage(nextIndex)
      };
    
      const prevIndex = () => {
        const prevIndex = index === 0 ? Slider.length - 1: index - 1 
        animateImage(prevIndex)
      };

   const handleIndex = (e) => {
    const workElement = workRef.current;
    if (!workElement) return;

    const rect = workElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;

    if (e.clientX >= centerX) {
      NextIndex();
    } else {
      prevIndex();
    }
  };
  

  


  useEffect(() => {
      const workElement = workRef.current
      if (workElement) {
          workElement.addEventListener("mousemove", handleMouseMove)
      }
      return () => {
          if (workElement) {
              workElement.removeEventListener("mousemove", handleMouseMove)
          }
      }
  }, [])

    
   
  return (
    <section className='work__section'  onMouseMove={handleMouseMove} onClick={handleIndex} ref={workRef}>
     <Cursor x={mousePosition.left} y={mousePosition.top} visible={showCursor} arrowDirection={arrowDirection}/>
        <div className="close first__work_close"></div>
        <div className="close second__work_close"></div>
       <img src={Slider[index].image} alt={Slider[index].name} className='work__background' ref={imageRef} />
      <div className="work__wrapper">
            <div className='redundant'>
            <div className="work___info">
               <h1 className='work___info_header'>{splitWords(Slider[index].name)}</h1>
                <div className='work__roles'>
                    {Slider[index].works.map((work, index) => (
                       <p key={index} className='work___roles_paragraph'>{work}</p>
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
  )
}

export default Works
