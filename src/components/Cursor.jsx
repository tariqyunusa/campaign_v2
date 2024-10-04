import React from 'react'
import "../styles/Cursor.css"
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import arrowLeft from "../assets/arrow-left.png"
import arrowRight from "../assets/arrow-right.png"

const Cursor = ({x,y, visible, arrowDirection}) => {    
  return (
    <div className={`aux__cursor`}  style={{ left: `${x}px`, top: `${y}px`, opacity: visible ? 1 : 0 }}>
     <div className="direction_wrapper__cursor">
     {arrowDirection === 'left' && (
        // <img src={arrowLeft} alt="arrow-left" />
        <FiArrowLeft />
      )}
      {arrowDirection === 'right' && (
        // <img src={arrowRight} alt="arrow-right" />
        <FiArrowRight />
      )}
     </div>
    </div>

  )
}

export default Cursor
