import React from 'react'
import Nav from '../components/Nav'
import About from './About'
import '../styles/Hero.css'
import video from '../assets/output.webm'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { useLayoutEffect } from 'react'

const Hero = () => {
  // useLayoutEffect(() => {

  //   const scrollTriggerInstance = ScrollTrigger.create({
  //     trigger: ".hero", 
  //     start: "top top",
  //     end: "+=900vh",
  //     scrub: 1,
  //     pin: true,
     
  //     // markers: true,
  //     onUpdate: (self) => {
  //       gsap.to('.hero__container', {
  //         x: `${-350 * self.progress}vw`, 
  //         duration: 0.8,
  //         ease: "power3.out",
  //       });
  //       // gsap.to('.hero_video', {scale: 1 - self.progress,
  //       //   duration: 0.4,
  //       //   ease: "power3.out"
  //       // });
  //       gsap.to(".first_cl", {
  //         x: `${350 * self.progress}vw`,
  //         duration: 0.8,
  //         ease: "power3.out"
  //       })
  //     },
  //   });

  //   return () => {
  //     scrollTriggerInstance.kill(); 
  //   };
  // }, []);
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
      <About />
    </div>
  )
}

export default Hero
