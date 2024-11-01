import Hero from './Sections/Hero';
import Nav from './components/Nav';
import gsap from 'gsap';
import Lenis from 'lenis';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AppProvider } from './AppContext';
import BlackLogo from './assets/Black-logo.png';
import whiteLogo from './assets/Subtract.svg';
import Works from './Sections/Works';
import Testimonials from './Sections/Testimonial';
import Hire from './Sections/Hire';
import HireMe from './pages/HireMe';
import { textReveal } from './animations/textReveal';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [nav, setNav] = useState({ logo: whiteLogo, menu: "white" });
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    scrollRef.current = ScrollTrigger.create({
      trigger: ".main_guy",
      start: "top top",
      end: "+=200vh",
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        gsap.to(".main", { x: `${-100 * self.progress}vw`, duration: 0.6, ease: "none" });
      },
    });

    return () => scrollRef.current.kill();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }, []);

  useEffect(() => {
    textReveal();
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".testimonials__wrapper",
      start: "top top",
      end: "bottom bottom",
      onEnter: () => setNav({ logo: BlackLogo, menu: "black" }),
      onLeaveBack: () => setNav({ logo: whiteLogo, menu: "white" }),
    });
  }, []);

  return (
    <AppProvider>
      <Router>
        <Content nav={nav} scrollRef={scrollRef} />
      </Router>
    </AppProvider>
  );
}

function Content({ nav, scrollRef }) {
  const location = useLocation();

 


  // useEffect(() => {
  //   window.location.reload();
  // }, [location.pathname]);

  return (
    <>
     
      <Nav color={nav} />

      <div className='main_guy'>
        <div className='main' >
          <Routes>
            <Route path='/' element={<Hero containerAnimation={scrollRef.current} />} />
            <Route path='/hireMe' element={<HireMe />} />
          </Routes>
        </div>
      </div>

      {/* Only render these components on the main page */}
      {location.pathname === '/' && (
        <>
          <Works />
          <Testimonials />
          <Hire />
        </>
      )}
    </>
  );
}

export default App;
