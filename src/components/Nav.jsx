import React from 'react'
import '../styles/Nav.css'
import { FiMenu } from "react-icons/fi";
// import Logo from '../assets/Subtract.png'
import Logo from '../assets/Subtract.svg'
import {links} from '../Data'
import { FiX } from "react-icons/fi";


const Nav = ({color}) => {

  return (
    <nav className='nav_container'>
      <div  className='nav__menu'>
      <FiMenu  className='menu' style={{color: color.menu}}/>
      </div>
      <div className='nav__logo'>
        <img src={color.logo} alt="Logo"  />
      </div>
      <div className='nav__filler'></div>
      <ul className="nav__ul ">
        <div className='ul__nav_upper'>
        <div className ='links__wrapper'>
          {links.map((link, i) => (
          <li key={i}><a href={link.path} className='nav__links__item'>{link.name}</a></li>
          ))}
        </div>
        <div className="img__nav__wrapper">
          {/* <img src={Image1} alt=""  /> */}
        </div>
        </div>
        <div className="nav__links_fillers">
          <div className='nav__links_span_wrapper'>
          <p><span className='nav__links_filler_span'>Nav design concept by</span>  studio lumio</p>
          <p><span className='nav__links_filler_span'>Project built by</span>  Tariq Yunusa</p>
          <p><span className='nav__links_filler_span'>Font: </span>Suse</p>
          </div>
          <div className='icon__close' ><FiX /></div>
        </div>
      </ul>
    </nav>
  )
}

export default Nav
