import React from 'react'
import "../styles/Cursor.css"

const Cursor = ({x,y, visible}) => {    
  return (
    <div className={`aux__cursor`}  style={{ left: `${x}px`, top: `${y}px`, opacity: visible ? 1 : 0 }}></div>

  )
}

export default Cursor
