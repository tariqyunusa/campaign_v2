import React from 'react'
import {LinkColors} from '../Data'
import "../styles/HireLink.css"
import { FiSend } from "react-icons/fi";
const HireLink = ({posX, posY}) => {
   const index = Math.floor(Math.random() * LinkColors.length)
   const color = LinkColors[index]
  return (
    <div>
         <div  className='hire__link' style={{ backgroundColor: color, top: `${posY - 100}px`, left: posX }}>
            <FiSend />
            <a href="/">Send a mail</a>
         </div>
    </div>
  )
}

export default HireLink
