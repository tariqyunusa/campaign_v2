import Hero from './Sections/Hero'
import './App.css'
import About from './Sections/About'
import Nav from './components/Nav'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import { AppProvider } from './AppContext'
import { useAppContext } from './AppContext'
import Works from './Sections/Works'
gsap.registerPlugin(ScrollTrigger)

function App() {
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
  
  

  return (
    <AppProvider >
    <Nav />
    <div className='main_guy'>
      <div className='main'>
        <Hero containerAnimation={scrollRef.current}/>
    </div>
    </div>
    <Works />
    </AppProvider>
   
  )
}

export default App
