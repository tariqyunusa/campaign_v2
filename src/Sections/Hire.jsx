import React, { useEffect, useRef, useState } from 'react'
import "../styles/Hire.css"
import HireLink from '../components/HireLink'

const Hire = () => {
    const wrapperRef = useRef(null)
    const [mousePos, setMousePos] = useState({x:0, y:0})
    const [showLink, setShowLink] = useState(false)
    const mousePosition = (e) => {
        const header = wrapperRef.current
        if(!header) return 

        const rect = header.getBoundingClientRect()
        // console.log(rect);

        setMousePos({x: e.clientX, y: e.clientY})
        console.log(mousePos);
        
        
    }
    useEffect(() => {
        const header = wrapperRef.current
        if(header){
            header.addEventListener("mousemove", mousePosition)
        }
        return () => {
            if(header) {
                header.removeEventListener("mousemove", mousePosition)
            }
        }
    },[])

    const mouseEnter = () => {
        setShowLink(true)

        setTimeout(() => {
            setShowLink(false)
        }, 5000)
    }

  return (
    <div className='hire__wrapper'>
        <div className="close hire__section_close_1"></div>
        <div className="close hire__section_close_2"></div>
        <div className="close hire__section_close_3"></div>  
        {showLink && <HireLink posX={mousePos.x} posY={mousePos.y} />}
        <div className="hire__headline_wrapper" >
            <h1 className='hire__headline' ref={wrapperRef } onMouseEnter={mouseEnter}  >HIRE US FOR YOUR NEXT PROJECT.</h1>
            {/* <h1 className='hire__headline'>HIRE US FOR YOUR NEXT PROJECT.</h1> */}
        </div>
    </div>
  )
}

export default Hire
