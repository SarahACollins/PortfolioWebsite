import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link, Route } from 'react-router-dom'

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
                    <a href="https://www.linkedin.com/in/sarah-collins-">
                        <img src={linkedinIcon} className='icon-links' />
                    </a>
                    <a href="https://github.com/SarahACollins">
                        <img src={githubIcon} className='icon-links' />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Footer
