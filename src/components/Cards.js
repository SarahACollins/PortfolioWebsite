import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

import apothecaryLogo from '../assets/images/apothecaryimage.jpeg';
import largeLunarLogo from '../assets/images/largelunarlogo.PNG';


function Cards() {
    return (
        <div className='cards'>
            <h1>PROJECTS</h1>
            <div className="cards_container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={largeLunarLogo}
                            text="Lunar Languages"
                            descriptor="Senior Capstone"
                            path='/LunarLanguages'
                            alt='Lunar Logo'
                        />
                        <CardItem 
                            src={apothecaryLogo}
                            text="Apothecary - Coming Soon!"
                            descriptor="Personal Project"
                            path='/Apothecary'
                            alt='Apothecary Logo'
                        />
                    </ul>
                </div>
            </div>            
        </div>
    )
}

export default Cards
