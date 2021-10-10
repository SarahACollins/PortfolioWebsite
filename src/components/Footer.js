import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

import linkedinIcon from '../assets/images/liicon.png';
import githubIcon from '../assets/images/githubicon.png';


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <h2 className="footer-subscription-heading">
                    Contact Me
                </h2>
                <p className="footer-subscription-text">
                    Email: saraha_collins@outlook.com
                </p>
                <div>
                    <Link to="www.linkedin.com/in/sarah-collins-">
                        <img src={linkedinIcon} className='icon-links' />
                    </Link>
                    <Link to="https://github.com/SarahACollins">
                        <img src={githubIcon} className='icon-links' />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Footer
