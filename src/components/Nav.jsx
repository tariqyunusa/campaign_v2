import React, { useState, useEffect, useRef } from 'react';
import '../styles/Nav.css';
import { FiMenu, FiX } from "react-icons/fi";
import Logo from '../assets/Subtract.svg';
import { links } from '../Data';
import gsap from 'gsap';

const Nav = ({ color }) => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const listRef = useRef([])

 

  const handleMouseEnter = (index) => {
    setHoveredLinkIndex(index);
  };

  // useEffect(() => {
  //   if(isOpen) {
  //     listRef.current.forEach((ref, index) => {
  //       if(ref) {
  //         gsap.to(ref, {
  //           y: -50,
  //           stagger: 0.1
  //         })
  //       }
  //     })
  //   }
  //   else {
  //     gsap.to(listRef.current.children, {
  //       opacity: 0,
  //       y: 20,
  //       duration: 0.4,
  //       ease: "power2.out",
  //     })
  // },[isOpen])

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='nav_container'>
      <div className='nav__menu' onClick={toggleNav}>
        <FiMenu className='menu' style={{ color: color.menu }} />
      </div>
      <div className='nav__logo'>
        <img src={color.logo} alt="Logo" />
      </div>
      <div className='nav__filler'></div>
      <ul className={`nav__ul ${isOpen ? "nav__open" : ""}`} >
        <div className='ul__nav_upper'>
          <div className='links__wrapper'>
            {links.map((link, i) => (
               <li
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                ref={(el) => listRef.current[i] = el}
                // onMouseLeave={handleMouseLeave} 
              >
                <a href={link.path} className='nav__links__item'>{link.name}</a>
              </li>
            
            ))}
          </div>
          {/* {hoveredLinkIndex !== null && (
            <div
              className="img__nav__wrapper"
              style={{ backgroundImage: `url(${links[hoveredLinkIndex].image})` }}
            ></div>
          )} */}
        </div>
        <div className="nav__links_fillers">
          <div className='nav__links_span_wrapper'>
            <p><span className='nav__links_filler_span'>Nav design concept by</span> studio lumio</p>
            <p><span className='nav__links_filler_span'>Project built by</span> Tariq Yunusa</p>
            <p><span className='nav__links_filler_span'>Font:</span> Suse</p>
          </div>
          <div className='icon__close' onClick={toggleNav}><FiX /></div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
