import Hero from './Sections/Hero'
import './App.css'
import About from './Sections/About'
import Nav from './components/Nav'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import { AppProvider } from './AppContext'
import { useAppContext } from './AppContext'
gsap.registerPlugin(ScrollTrigger)

function App() {
  const scrollRef = useRef(null)
  useLayoutEffect(() => {
    scrollRef.current = ScrollTrigger.create({
      trigger: ".main_guy",
      start: "top top",
      end: "+=500vh",
      scrub: 1,
      pin: true,
    invalidateOnRefresh: true,
      pinSpacer: false,
      pinSpacing: false,
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
    <div className='main_guy'>
      <div className='main'>
      <Nav />
    <Hero containerAnimation={scrollRef.current}/>
     {/* <About /> */}
    </div>
    <div className="spacer" > 

    </div>
    </div>
    </AppProvider>
   
  )
}

export default App
