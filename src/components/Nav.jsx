import React, { useState, useRef } from 'react';
import '../styles/Nav.css';
import { FiMenu, FiX } from "react-icons/fi";
import Logo from '../assets/Subtract.svg';
import { links } from '../Data';
import gsap from 'gsap';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Nav = ({ color }) => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef([]);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoveredLinkIndex(index);
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (link) => {
    if (link.path === "/") {
      navigate(link.path);  // Navigate to the different page
    }
  };

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
              >
                {link.path === "/" ? (
                  <span onClick={() => handleClick(link)} className='nav__links__item'>
                    {link.name}
                  </span>
                ) : (
                  <Link to={link.path} smooth={true} duration={800} className='nav__links__item'>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </div>
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
