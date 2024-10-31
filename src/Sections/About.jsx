import React, { useRef } from 'react'
import "../styles/About.css"
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useAppContext } from '../AppContext';

const About = ({container}) => {
  const {refs, gsapInstance, splitWords} = useAppContext()
  const phrase = "Campaign is a creative studio focused on web development, design, and interactive experiences. We build responsive websites, custom digital solutions, and engaging user interfaces that help businesses stand out online. Our blend of design and technology ensures your brand connects with your audience effectively."
 
  useLayoutEffect(() => {
    gsapInstance.to(refs.current, {
      scrollTrigger: {
        trigger: ".about__us_container",
        scrub: true,
        start: "left end",
        end: `+=${window.innerHeight / 2}`,
        containerAnimation: container,
      
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    })
    
  },[])
  
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
