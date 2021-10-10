import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection';
import '../ProjectSection.css'
import Navbar from '../AlternativeNavbar';
import { comingSoon } from './ApothecaryData';

export default function Services() {
    return (
        <>
            <Navbar />
            <div className='project-section-div'>
                <HeroSection {...comingSoon} />
            </div>
        </>
    )
}