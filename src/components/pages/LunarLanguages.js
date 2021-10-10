import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection';
import Navbar from '../AlternativeNavbar';
import {aboutLunarLanguages, locationTracking, hotspots, practiceMode, userInformation, development, personalRole } from './LunarLanguagesData';

export default function Services() {
    return (
        <>
            <Navbar />
            <div className='project-section-div'>
                <HeroSection {...aboutLunarLanguages} />
            </div>
            <div className='project-section-div'>
                <HeroSection {...locationTracking} />
                <HeroSection {...hotspots} />
                <HeroSection {...practiceMode} />
                <HeroSection {...userInformation} />
            </div>
            <div>
                <HeroSection {...personalRole} />
                <HeroSection {...development} />
            </div>
        </>
    )
}