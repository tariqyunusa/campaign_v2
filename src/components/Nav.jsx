import React, { useState } from 'react';
import '../styles/Nav.css';
import { FiMenu } from "react-icons/fi";
import Logo from '../assets/Subtract.svg';
import { links } from '../Data';
import { FiX } from "react-icons/fi";

const Nav = ({ color }) => {
  // State to track which link is hovered
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);

  const handleMouseEnter = (index) => {
    // Only update state if the hovered link is not already the current one
    if (hoveredLinkIndex !== index) {
      setHoveredLinkIndex(index);
    }
  };

  const handleMouseLeave = () => {
    // Only clear state if it's not already null
    if (hoveredLinkIndex !== null) {
      setHoveredLinkIndex(null);
    }
  };

  return (
    <nav className='nav_container'>
      <div className='nav__menu'>
        <FiMenu className='menu' style={{ color: color.menu }} />
      </div>
      <div className='nav__logo'>
        <img src={color.logo} alt="Logo" />
      </div>
      <div className='nav__filler'></div>
      <ul className="nav__ul">
        <div className='ul__nav_upper'>
          <div className='links__wrapper'>
            {links.map((link, i) => (
              <li
                key={i}
                onMouseEnter={() => handleMouseEnter(i)} // Call handler on hover
                onMouseLeave={handleMouseLeave} // Call handler on mouse leave
              >
                <a href={link.path} className='nav__links__item'>{link.name}</a>
              </li>
            ))}
          </div>
          <div className="img__nav__wrapper">
            {hoveredLinkIndex !== null && links[hoveredLinkIndex] && (
              <img
                src={links[hoveredLinkIndex].image}
                alt={links[hoveredLinkIndex].name}
              />
            )}
          </div>
        </div>
        <div className="nav__links_fillers">
          <div className='nav__links_span_wrapper'>
            <p><span className='nav__links_filler_span'>Nav design concept by</span> studio lumio</p>
            <p><span className='nav__links_filler_span'>Project built by</span> Tariq Yunusa</p>
            <p><span className='nav__links_filler_span'>Font: </span>Suse</p>
          </div>
          <div className='icon__close'><FiX /></div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
