import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setShowMenu(false);
  };

  return (
    <div className="navbar">
      <div className='logo'>
        Nikku Kumar Das
      </div>
      <nav>
        <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
          <li><Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>Home</Link></li>
          <li><Link to="/about" className={activeLink === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}>About</Link></li>
          <li><Link to="/project" className={activeLink === '/project' ? 'active' : ''} onClick={() => handleLinkClick('/project')}>Work</Link></li>
          <li><Link to="/edu" className={activeLink === '/edu' ? 'active' : ''} onClick={() => handleLinkClick('/edu')}>Resume</Link></li>
          <li><Link to="/contact" className={activeLink === '/contact' ? 'active' : ''} onClick={() => handleLinkClick('/contact')}>Contact us</Link></li>
        </ul>
      </nav>
      <div className="menu-bar" onClick={handleShowMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
