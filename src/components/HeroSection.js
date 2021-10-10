import React from 'react'
import styles from './HeroSection.css'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './ProjectSection.css'
import './Button.css'
import { Link as ScrollLink } from 'react-scroll';

function AboutMeButton(props) {
  const isAboutMeSection = props.isAboutMeSection;
  if (isAboutMeSection) {
    return (
      <Button className='btn btn--medium'>
        <ScrollLink to='footer' smooth={true} offset={-50}>
        Contact Me
        </ScrollLink>
      </Button>
    )
  }
  else {
    return (
      <>
      </>
    )
  }
}

function TextColumn(props) {
  const colClass = props.colClass;
  const textWrapper = props.textWrapper;
  const topLineClass = props.topLineClass;
  const topLine = props.topLine;
  const headlineClass = props.headlineClass;
  const headline = props.headline;
  const descriptionClass = props.descriptionClass;
  const description = props.description;
  const displayButtonBool = props.displayButtonBool;

  return (
    <div className={colClass}>
        <div className={textWrapper}>
            <div className={topLineClass}>
                {topLine}
            </div>
            <h1 className={headlineClass}>
               {headline}
            </h1>
            <p className={descriptionClass}>
                {description}
            </p>
            <AboutMeButton isAboutMeSection={displayButtonBool} />
        </div>
    </div>
  )
}

function ImageColumn(props) {
  const colClass = props.colClass;
  const imgWrapper = props.imgWrapper;
  const img = props.img;
  const alt = props.alt;
  const imgClass = props.imgClass;

  return (
    <div className={colClass}>
        <div className={imgWrapper}>
            <img src={img} alt={alt} className={imgClass} />
        </div>
    </div>
  )
}

function ReverseColumns(props) {
  const reverseColumns = props.reverseColumns;

  const colClass = props.colClass;
  const textWrapper = props.textWrapper;
  const topLineClass = props.topLineClass;
  const topLine = props.topLine;
  const headlineClass = props.headlineClass;
  const headline = props.headline;
  const descriptionClass = props.descriptionClass;
  const description = props.description;
  const displayButtonBool = props.displayButtonBool;

  const imgWrapper = props.imgWrapper;
  const img = props.img;
  const alt = props.alt;
  const imgClass = props.imgClass;

  if (reverseColumns) {
    return (
      <>
        <ImageColumn 
            colClass={colClass}
            img={img}
            alt={alt}
            imgClass={imgClass}  
        />
        <TextColumn 
            colClass={colClass}
            textWrapper={textWrapper}
            topLineClass={topLineClass}
            topLine={topLine}
            headlineClass={headlineClass}
            headline={headline}
            descriptionClass={descriptionClass}
            description={description}
            displayButtonBool={displayButtonBool}
        />
      </>
    )
  }
  else {
    return (
      <>
        <TextColumn 
            colClass={colClass}
            textWrapper={textWrapper}
            topLineClass={topLineClass}
            topLine={topLine}
            headlineClass={headlineClass}
            headline={headline}
            descriptionClass={descriptionClass}
            description={description}
            displayButtonBool={displayButtonBool}
        />
        <ImageColumn 
            colClass={colClass}
            img={img}
            alt={alt}
            imgClass={imgClass}  
            imgWrapper={imgWrapper}
        />
      </>
    )
  }
}

function HeroSection({
  reverseColumns,

  exactClassName,
  rowClass,
  colClass,
  flexDirection,
  textWrapper,
  topLineClass,
  topLine,
  headlineClass,
  headline,
  description,
  descriptionClass,
  displayButtonBool,
  imgWrapper,
  img,
  imgClass,
  alt,
  imgStart
}
) {
  return (
      <div className={exactClassName}>
        <div className='container'>
          <div
            className={rowClass}
            style={{
              display: 'flex',
              flexDirection: {flexDirection}
            }}
          >
          <ReverseColumns
            reverseColumns={reverseColumns}

            colClass={colClass}
            textWrapper={textWrapper}
            topLineClass={topLineClass}
            topLine={topLine}
            headlineClass={headlineClass}
            headline={headline}
            descriptionClass={descriptionClass}
            description={description}
            displayButtonBool={displayButtonBool}

            colClass={colClass}
            img={img}
            alt={alt}
            imgClass={imgClass}  
            imgWrapper={imgWrapper}
          />
          </div>
        </div>
      </div>
  );
}

export default HeroSection;