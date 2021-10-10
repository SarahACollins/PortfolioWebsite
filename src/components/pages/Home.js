import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection'
import { aboutMe } from './AboutMeData';
import Cards from '../Cards';
import SkillsSection from '../SkillsSection';
import { programming, gameAndGraphic } from './SkillsData';
import CourseworkSect from '../CourseworkSect';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home () {
    return (
        <>
            <Navbar />

            <div id="aboutme">
                <HeroSection {...aboutMe} />
            </div> 
            <div id="projects">
                <Cards/>
            </div> 
            <div id="skills">
                <h1>SKILLS</h1>
                <SkillsSection {...programming}/>
                <SkillsSection {...gameAndGraphic}/>
            </div>
            <div id="coursework">
                <CourseworkSect/>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </>
    )
}

export default Home;