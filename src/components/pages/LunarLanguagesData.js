import personalHeadshot2 from '../../assets/images/headshot.png';
import LunarLanguagesLogo from '../../assets/images/lunarlogo.png';
import MadeWithUnityLogo from '../../assets/images/unity-mwu-white.png';

import mapGif from '../../assets/images/map.gif';
import hotspotGif from '../../assets/images/hotspot.gif';
import practiceModeGif from '../../assets/images/practicemode.gif';
import userInfoModeGif from '../../assets/images/userinfomode.gif';

import '../ProjectSection.css';

  /*For the different sections on the lunar languages page */
  export const aboutLunarLanguages = {
    reverseColumns: false,

    exactClassName: 'hero-section hero-section-project darkBg',
    rowClass: 'row hero-row',
    colClass: 'col project-col',
    flexDirection: 'row',
    textWrapper: 'hero-text-wrapper',
    topLineClass: 'top-line',
    headlineClass: 'heading heading-project',
    descriptionClass: 'hero-subtitle hero-subtitle-project',
    imgWrapper: 'hero-img-wrapper',
    imgClass: 'hero-img hero-img-project',

    topLine: 'Fall 2020 - Spring 2021',
    headline: 'Lunar Languages',
    description:
    'Developed by six students as their senior capstone project, Lunar Languages provides an immersive \
     language-learning experience, allowing users to learn Mandarin Chinese by walking to augmented reality \
    (AR) hotspots located around the Embry-Riddle Aeronautical University Prescott campus.\n\n\
    The project was designed during Fall 2020 and developed during the Spring 2021 semester. The app was released \
    on the Apple App Store and the Google Play Store, though has since been modified by the Embry-Riddle administration \
    outside of the work of the original team.',
    img: LunarLanguagesLogo,
    alt: 'Lunar Languages Logo'
  };

  
  export const locationTracking = {
    reverseColumns: true,

    exactClassName: 'hero-section hero-section-gif lightBg',
    rowClass: 'row hero-row',
    colClass: 'col',
    flexDirection: 'row-reverse',
    textWrapper: 'hero-text-wrapper',
    topLineClass: 'top-line top-line-reverse',
    headlineClass: 'heading heading-reverse dark',
    descriptionClass: 'hero-subtitle hero-subtitle-reverse dark',
    imgWrapper: 'hero-img-wrapper ',
    imgClass: 'hero-gif',

    topLine: 'How to Play',
    headline: 'Walk Around Campus',
    description:
      'Players can view their environment and their position, as well as nearby hotspots, via a top-down map. \
       They will be notified if they walk outside the campus boundary.',
    img: mapGif,
    alt: 'Map Module'
  };

  export const hotspots = {
    reverseColumns: true,

    exactClassName: 'hero-section hero-section-gif lightBg',
    rowClass: 'row hero-row',
    colClass: 'col',
    flexDirection: 'row-reverse',
    textWrapper: 'hero-text-wrapper',
    topLineClass: 'top-line top-line-reverse',
    headlineClass: 'heading heading-reverse dark',
    descriptionClass: 'hero-subtitle hero-subtitle-reverse dark',
    imgWrapper: 'hero-img-wrapper ',
    imgClass: 'hero-gif',

    topLine: '',
    headline: 'Visit Hotspots to Learn New Words',
    description:
      'When near a hotspot, the player can click on the hotspot icon to open AR mode to learn new words. \
      Each hotspot is themed around different subjects, such as food, people, or language basics.',
    img: hotspotGif,
    alt: 'Hotspot Module'
  };

  export const practiceMode = {
    reverseColumns: true,

    exactClassName: 'hero-section hero-section-gif lightBg',
    rowClass: 'row hero-row',
    colClass: 'col',
    flexDirection: 'row-reverse',
    textWrapper: 'hero-text-wrapper',
    topLineClass: 'top-line top-line-reverse',
    headlineClass: 'heading heading-reverse dark',
    descriptionClass: 'hero-subtitle hero-subtitle-reverse dark',
    imgWrapper: 'hero-img-wrapper ',
    imgClass: 'hero-gif',

    topLine: '',
    headline: 'Study for a Test or Refresh Your Memory',
    description:
      'Players are able to review words they have already learned in practice mode.',
    img: practiceModeGif,
    alt: 'Practice Mode Module'
  };

  export const userInformation = {
    reverseColumns: true,

    exactClassName: 'hero-section hero-section-gif lightBg',
    rowClass: 'row hero-row',
    colClass: 'col',
    flexDirection: 'row-reverse',
    textWrapper: 'hero-text-wrapper',
    topLineClass: 'top-line top-line-reverse',
    headlineClass: 'heading heading-reverse dark',
    descriptionClass: 'hero-subtitle hero-subtitle-reverse dark',
    imgWrapper: 'hero-img-wrapper ',
    imgClass: 'hero-gif',

    topLine: '',
    headline: 'See Your Progress!',
    description:
      'Players can see their experience and level in different subjects of the Mandarin language.',
    img: userInfoModeGif,
    alt: 'User Information Module'
  };

  export const personalRole = {
    reverseColumns: false,

    exactClassName: 'hero-section hero-section-project darkBg',
    rowClass: 'row hero-row',
    colClass: 'col project-col',
    flexDirection: 'row',
    textWrapper: 'hero-text-wrapper',
    topLineClass: 'top-line',
    headlineClass: 'heading heading-project',
    descriptionClass: 'hero-subtitle hero-subtitle-project',
    imgWrapper: 'hero-img-wrapper ',
    imgClass: 'hero-img hero-img-project hero-img-projectclass',

    topLine: 'Personal Role',
    headline: 'Project Manager & Team Member',
    description:
    'As project manager, I planned and scheduled all tasks within the project, assigning weekly tasks to \
    team members to effectively meet deadlines and produce a minimum viable product within 12 weeks. \n\n \
    As a team member on this project, I created the JSON file databases to organize subjects, categories, and \
    vocab words for the application, the C# scripts to read the JSON files into the application, and the system \
    controlling which subject, category, and vocab words are selected when visiting a hotspot or using practice \
    mode. I also created the functionality behind displaying different questions, randomizing questions, randomizing \
    answers, checking for the correct answer when selected, and updating the player’s experience and level as they \
    answer questions correctly.',
    img: personalHeadshot2,
    alt: 'Personal Headshot'
  };

  export const development = {
    reverseColumns: false,

    exactClassName: 'hero-section hero-section-project darkBg',
    rowClass: 'row hero-row',
    colClass: 'col project-col',
    flexDirection: 'row',
    textWrapper: 'hero-text-wrapper',
    topLineClass: 'top-line',
    headlineClass: 'heading heading-project',
    descriptionClass: 'hero-subtitle hero-subtitle-project',
    imgWrapper: 'hero-img-wrapper ',
    imgClass: 'hero-img hero-img-project',

    topLine: 'Development',
    headline: 'Creation of Lunar Languages',
    description:
      'Lunar Languages was developed using the Unity game engine, combined with the software development \
       kits Mapbox, which provides accurate renditions of the player’s environment and real-time tracking \
       of their position, and ARCore, a Google developed plug-in allowing for access to player camera and \
       the superimposition of images onto the player’s view. \n\n \
       All coding scripts were written in C#; 3D models were created and animated in Blender; and other \
       art and images were created using Clip Studio Paint, Adobe Illustrator, and Procreate.',
    img: MadeWithUnityLogo,
    alt: 'Made with Unity'
  };