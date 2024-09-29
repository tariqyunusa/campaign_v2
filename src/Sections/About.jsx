import React, { useRef } from 'react'
import "../styles/About.css"
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  let Refs = useRef([])
  const paragraphRef = useRef(null)
  const phrase = "Campaign is a creative studio focused on web development, design, and interactive experiences. We build responsive websites, custom digital solutions, and engaging user interfaces that help businesses stand out online. Our blend of design and technology ensures your brand connects with your audience effectively."

  const splitWords = (phrase) => {
    let body = []
    phrase.split(" ").forEach((word, i ) => {
      const letters = splitLetters(word)
      body.push(<p key={word + "_" + i}>{letters}</p>)
      console.log("the words", letters);
      
    })
    return body
  }
  

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach((letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => Refs.current.push(el)}>{letter}</span>)
    })
    return letters
  }
  return (
    <section className='about_section'>
       <div className="second_section_first_cl close"></div>
       <div className="second_section_second_cl close"></div>
      <div className="about__us_container">
        {
          splitWords(phrase)
        }
      </div>
    </section>
  )
}

export default About
