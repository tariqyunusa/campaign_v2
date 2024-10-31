import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import About from './About'
import '../styles/Hero.css'
import video from '../assets/output.webm'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { useLayoutEffect } from 'react'

const Hero = ({containerAnimation}) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    },1000)

    return () => clearInterval(timer)
  },[])

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: "numeric",
      // second: 'numeric',
      hour12: false,
      timeZone: 'Africa/Lagos'
    }).format(date)
  }
  return (
    <div className='hero'>
        <video src={video} className='hero_video' autoPlay loop muted></video>
      <div className="hero__container">
      {/* <Nav /> */}
      <main className='main__hero'>
        <div className="first_cl close"></div>
        <div className="second_cl close"></div>
        <div className="main__hero_container">
            <h1 className='hero__header_text' data-animation = 'header'>Campaign</h1>
        </div>
        <div className="hero__footer">
            <div className="location__hero">
                <p data-animation = 'paragraph'>{`NG (${formatTime(time)})`}</p>
            </div>
            
        </div>
      </main>
      </div>
      <About container={containerAnimation}/>
    </div>
  )
}

export default Hero
