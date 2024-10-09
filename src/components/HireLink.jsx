import React, { useState } from 'react'
import {LinkColors} from '../Data'
import "../styles/HireLink.css"
import { FiSend } from "react-icons/fi";
const HireLink = ({posX, posY}) => {
    const [color, setColor] = useState(LinkColors[Math.floor(Math.random() * LinkColors.length)])
    const handleHover = () => {
        const newColor = LinkColors[Math.floor(Math.random() * LinkColors.length)]
        setColor(newColor)
    }
  return (
    <div>
         <a className='hire__link' href='/' style={{ backgroundColor: color, top: `${posY - 100}px`, left: posX }} onMouseEnter={handleHover}>
            <FiSend />
            <p >Send a mail</p>
         </a>
    </div>
  )
}

export default HireLink
