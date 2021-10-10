import React from 'react'
import './CourseworkSect.css'

function CourseworkSect() {
    return (
        <div className='coursework'>
            <h1>COURSEWORK</h1>
            <div className='coursework__container'>
                <div className='coursework__wrapper'>
                    <ul className='coursework__itemlist'>
                        <li className='coursework__item'>
                            <h3>Software Engineering</h3>
                            <ul className='coursework__classlists'>
                                <li>Software Engineering Practices</li>
                                <li>Data Structures and Analysis Algorithms</li>
                                <li>Files/Database Systems</li>
                                <li>Operating Systems</li>
                                <li>Information & Computer Security</li>
                                <li>Analysis & Design of Software Systems</li>
                                <li>Software Construction</li>
                                <li>Software Quality Assurance</li>
                                <li>Real-Time Systems</li>
                                <li>Human-Computer Interfaces</li>
                                <li>Telecommunications Systems</li>
                                <li>Computer Architecture</li>
                                <li>Organization of Programming Languages</li>
                            </ul>
                        </li>
                        <li className='coursework__item'>
                            <h3>Games & Animation</h3>
                            <ul className='coursework__classlists'>
                                <li>Intro to Computer Games Systems I & II</li>
                                <li>Interactive Media I</li>
                                <li>Modeling & World Building</li>
                                <li>Intro to Computer Graphics</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='coursework__itemlist'>
                        <li className='coursework__item'>
                            <h3>Basic Core</h3>
                            <ul className='coursework__classlists'>
                                <li>Calculus I, II & III</li>
                                <li>Differential Equations and Math Methods</li>
                                <li>Intro to Discrete Structures</li>
                                <li>Probability and Statistics</li>
                                <li>Physics for Engineers I, II, & III</li>
                            </ul>
                        </li>
                        <li className='coursework__item'>
                            <h3>Other Engineering</h3>
                            <ul className='coursework__classlists'>
                                <li>Digital Circuit Design</li>
                                <li>Linear Circuits Analysis</li>
                                <li>Microprocessor Systems</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseworkSect