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
                        <ScrollLink to='aboutme' smooth={true} className='nav-links' offset={-50} onClick={closeMobileMenu}>
                            About
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink to='projects' smooth={true} className='nav-links' offset={-50} onClick={closeMobileMenu}>
                            Projects
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink to='skills' smooth={true} className='nav-links' offset={-100} onClick={closeMobileMenu}>
                            Skills
                        </ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <ScrollLink to='coursework' smooth={true} className='nav-links' offset={-50} onClick={closeMobileMenu}>
                            Coursework
                        </ScrollLink>
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