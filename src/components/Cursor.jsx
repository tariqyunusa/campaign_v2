import React from 'react'
import "../styles/Cursor.css"
import arrowLeft from "../assets/arrow-left.png"
import arrowRight from "../assets/arrow-right.png"

const Cursor = ({x,y, visible, arrowDirection}) => {    
  return (
    <div className={`aux__cursor`}  style={{ left: `${x}px`, top: `${y}px`, opacity: visible ? 1 : 0 }}>
     <div className="direction_wrapper__cursor">
     {arrowDirection === 'left' && (
        <img src={arrowLeft} alt="arrow-left" />
      )}
      {arrowDirection === 'right' && (
        <img src={arrowRight} alt="arrow-right" />
      )}
     </div>
    </div>

  )
}

export default Cursor
