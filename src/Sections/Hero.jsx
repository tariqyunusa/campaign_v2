import React from 'react'
import Nav from '../components/Nav'
import '../styles/Hero.css'
import video from '../assets/output.webm'

const Hero = () => {
  return (
    <div className='hero'>
        <video src={video} className='hero_video' autoPlay loop muted></video>
      <div className="hero__container">
      <Nav />
      <main className='main__hero'>
        <div className="first_cl close"></div>
        <div className="second_cl close"></div>
        <div className="main__hero_container">
            <h1 className='hero__header_text'>Campaign</h1>
        </div>
        <div className="hero__footer">
            <div className="location__hero">
                <p>Lagos(NG)</p>
            </div>
            <div className="location__hero">
                <p>12:00 am</p>
            </div>
        </div>
      </main>
      </div>
    </div>
  )
}

export default Hero
