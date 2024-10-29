import Hero from './Sections/Hero'
import './App.css'
import About from './Sections/About'
import Nav from './components/Nav'
import gsap from 'gsap'
import Lenis from 'lenis'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AppProvider } from './AppContext'
import BlackLogo from './assets/Black-logo.png'
import whiteLogo from './assets/Subtract.svg'
import Works from './Sections/Works'
import Testiomonials from './Sections/Testimonial'
import Hire from './Sections/Hire'
import { textReveal } from './animations/textReveal'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [nav, setNav] = useState({logo: whiteLogo, menu: "white"})
  const scrollRef = useRef(null)
  useLayoutEffect(() => {
    scrollRef.current = ScrollTrigger.create({
      trigger: ".main_guy",
      start: "top top",
      end: "+=200vh",
      scrub: 1,
      pin: true,
    invalidateOnRefresh: true,
      
      onEnter: () => {scrollRef.current = this;},
      onLeave: () => {scrollRef.current = null;},
      onUpdate: (self) => {
        gsap.to(".main", 
          {x: `${-100 * self.progress}vw`,
          duration: 0.6,
          ease: "none"
        }
        )
        
      }
  })

    return () => {
      scrollRef.current.kill()
      
    }
  },[])
useEffect(() => {
  const lenis = new Lenis();
  lenis.on('scroll', (e) => {
    // console.log(e);
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});
  gsap.ticker.lagSmoothing(0);
},[])

useEffect(() => {
  textReveal()
},[])

useEffect(() => {
  ScrollTrigger.create({
    trigger: ".testimonials__wrapper",
    start: "top top",
    end: "bottom bottom",
    onEnter: () => {
      setNav({logo: BlackLogo, menu: "black"})
    }, 
    onLeaveBack: () => {
      setNav({logo: whiteLogo, menu: "white"})
    }
  })
  
},[])




  
  

  return (
    <AppProvider >
    <Nav color={nav} />
    <div className='main_guy'>
      <div className='main'>
        <Hero containerAnimation={scrollRef.current}/>
      </div>
    </div>
    <Works />
    <Testiomonials />
    <Hire />
    </AppProvider>
   
  )
}

export default App
