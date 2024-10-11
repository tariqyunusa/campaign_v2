import React from 'react'
import '../styles/Nav.css'
import { FiMenu } from "react-icons/fi";
// import Logo from '../assets/Subtract.png'
import Logo from '../assets/Subtract.svg'


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
    </nav>
  )
}

export default Nav
