import Hero from './Sections/Hero'
import './App.css'
import About from './Sections/About'
import Nav from './components/Nav'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

function App() {
  useLayoutEffect(() => {
    const HorizontalScroll = ScrollTrigger.create({
      trigger: ".main_guy",
      start: "top top",
      end: "+=500vh",
      scrub: 1,
      pin: true,
      pinSpacer: false,
      pinSpacing: false,
      // markers: true,
      onUpdate: (self) => {
        gsap.to(".main", 
          {x: `${-100 * self.progress}vw`,
          duration: 1,
          ease: "power3.inOut"
        }
        )
        
      }
    })
    // const opacityAnim = ScrollTrigger.create({
    //   trigger: ".main_guy",
    //   start: "end end",
    //   end: "+=10vh",
    //   scrub: 1,
    //   markers: true,
    //   pin: true,
    //   // pinSpacing: false,
    //   // pinSpacer: false,

    // })

    return () => {
      HorizontalScroll.kill()
      // opacityAnim.kill()
    }
  },[])
 

  return (
    <div className='main_guy'>
      <div className='main'>
      <Nav />
    <Hero />
     {/* <About /> */}
    </div>
    <div className="spacer" > 

    </div>
    </div>
   
  )
}

export default App
