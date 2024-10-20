import React from 'react'
import '../styles/Nav.css'
import { FiMenu } from "react-icons/fi";
// import Logo from '../assets/Subtract.png'
import Logo from '../assets/Subtract.svg'
import Image1 from "../assets/output1.jpg"


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
          <div>
          <li><a href="" className='nav__links__item'>Home</a></li>
          <li><a href="" className='nav__links__item'>About</a></li>
          <li><a href="" className='nav__links__item'>Works</a></li>
          <li><a href="" className='nav__links__item'>Contact</a></li>
          <li><a href="" className='nav__links__item'>Hire Me</a></li>
          </div>
        </div>
        <div className="img__nav__wrapper">
          {/* <img src={Image1} alt=""  /> */}
        </div>
        </div>
        <div className="nav__links_fillers">
          <p>Nav design concept by studio lumio</p>
          <p>Project built by Tariq Yunusa</p>
          <p><span className='nav__links_filler_span'>Font: </span>Suse</p>
          
        </div>
      </ul>
    </nav>
  )
}

export default Nav
