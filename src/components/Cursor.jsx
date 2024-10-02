import React from 'react'
import "../styles/Cursor.css"

const Cursor = ({x,y}) => {    
  return (
    <div className="aux__cursor"  style={{left:x, top: y}}></div>

  )
}

export default Cursor
