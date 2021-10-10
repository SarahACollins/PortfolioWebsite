import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.removeEventListener('resize', showButton)


  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container container'>
            <Link to='/PortfolioWebsite' className='navbar-logo' onClick={closeMobileMenu}>
                sarah collins
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/PortfolioWebsite' className='nav-links' onClick={closeMobileMenu}>
                        Return to Home
                    </Link>
                </li>
                <li className='nav-btn'>
                </li>
            </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar;