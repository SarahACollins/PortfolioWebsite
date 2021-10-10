import React, { useState, useEffect} from 'react'
import './SkillsSection.css'

function SkillsSection({
    exactClassName,
    heading,
    img, 
    altimg,
    alt
}) 
{
    const [imageSize, setImage] = useState(true);

    const showMobileImage = () => {
        if (window.innerWidth <= 650) {
            setImage(true);
        } else {
            setImage(false);
        }
    };

    window.addEventListener('resize', showMobileImage)

    useEffect(() => {
        showMobileImage();
    });

    return (
        <div className={exactClassName}>
            <div className='skills-wrapper'>
                <h2 className='skills-heading'>{heading}</h2>   
                <div className='barchart-image-wrapper'>
                    <img 
                        className='barchart-image' 
                        alt={alt} 
                        src={imageSize ? altimg : img} />
                </div>     
            </div>
        </div>
    )
}

export default SkillsSection
