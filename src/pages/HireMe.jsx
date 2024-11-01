import React, { useState } from 'react'
import "../styles/HireMe.css"
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const HireMe = () => {
  const [copied, setCopied] = useState(false)
  const copyMail = () => {
    navigator.clipboard.writeText('Tariikhyunusa@gmail.com')
    console.log('copied text')
    setCopied(true)
   setTimeout(() => {
    setCopied(false)
   }, 3000);
  }


  return (
    <div className='hireme__wrapper'>
      <div className="main__hireMe_content">
       <div className='content__hire_me__header'>
       <h1>Thank you for your interest in my work</h1>
       <h2>Have an idea you want to bring to life? Send a mail lets make it a reality</h2>
       </div>
       <div className='content__hire_me__cta'>
       <button onClick={copyMail}>{copied ? "Copied" : "Copy mail"}</button>
       <ul className='hire_me__ul'>
        <li className='hire_me__li'><a href="https://twitter.com/tariqYA_" rel='noopener noreferrer' target='_blank'><FiTwitter /></a></li>
        <li className='hire_me__li'><a href="https://instagram.com/tariikh_" rel='noopener noreferrer' target='_blank'><FiInstagram /></a></li>
        <li className='hire_me__li'><a href="https://github.com/tariqyunusa" rel='noopener noreferrer' target='_blank'><FiGithub /></a></li>
       </ul>
       </div>

      </div>
    </div>
  )
}

export default HireMe
