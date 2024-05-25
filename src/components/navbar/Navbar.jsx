import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showMenu,setShowMenu] =useState(false)
  const handleShowMenu = () => {
    console.log("click");
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu) {
      navMenu.classList.toggle("active");
    }
    console.log(navMenu)
  };
  return (
    <div>
      <div className='logo'>
        Nikku Kumar Das
      </div>
      <nav>
        <ul className='nav-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/edu">Resume</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
        </ul>

      
      </nav>

      <div className="menu-bar" onClick={handleShowMenu}>
        <i className="fa-solid fa-bars" color='green'></i>
        
        </div>
    </div>
  )
}

export default Navbar
