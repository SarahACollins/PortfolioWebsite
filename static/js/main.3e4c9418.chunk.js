(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},30:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){e.exports=t(59)},41:function(e,a,t){},46:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),i=t.n(l),s=t(11),o=t(12),c=t(14),m=t(13),h=(t(41),t(1)),u=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null)}}]),t}(n.Component),g=Object(h.e)(u),d=t(3),p=(t(16),t(46),t(30),["btn--primary","btn--outline"]),E=["btn--medium","btn--large","btn--mobile","btn--wide"],_=["primary","blue","red","green"],v=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.buttonStyle,i=e.buttonSize,s=e.buttonColor,o=p.includes(l)?l:p[0],c=E.includes(i)?i:E[0],m=_.includes(s)?s:null;return r.a.createElement("button",{className:"btn ".concat(o," ").concat(c," ").concat(m),onClick:n,type:t},a)},f=(t(15),t(8));var b=function(e){var a=e.exactClassName,t=e.topLine,n=(e.lightText,e.lightTextDesc,e.headline),l=e.description,i=(e.buttonLabel,e.img),s=(e.heroimg,e.alt);return e.imgStart,r.a.createElement("div",{className:a},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row home__hero-row hero-alt",style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-text-wrapper home__hero-text-wrapper-alt"},r.a.createElement("div",{className:"top-line top-line-alt"},t),r.a.createElement("h1",{className:"heading heading-alt"},n),r.a.createElement("p",{className:"home__hero-subtitle home__hero-subtitle-alt dark "},l),r.a.createElement(v,{className:"btn btn--medium"},r.a.createElement(f.Link,{to:"footer",smooth:!0,offset:-50},"Contact Me")))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-img-wrapper home__hero-img-wrapper-alt"},r.a.createElement("img",{src:i,alt:s,className:"home__hero-img home__hero-img-alt imgborder"}))))))},w={exactClassName:"home__hero-section home__hero-section-alt aboutmeBg",lightText:!1,lightTextDesc:!1,headline:"Sarah Collins",description:"Hello! I am a recent Spring 2021 graduate from Embry-Riddle Aeronautical University with a Bachelor's of Science in        Software Engineering, seeking an entry-level role within the gaming industry.",imgStart:"",heroimg:!0,img:"images/headshot3.png",alt:"Personal Headshot"};var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement(d.b,{className:"cards__item__link",to:e.path},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text),r.a.createElement("h6",{className:"cards__item__descriptor"},e.descriptor)))))};t(54);var y=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,"PROJECTS"),r.a.createElement("div",{className:"cards_container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(N,{src:"images/largelunarlogo.png",text:"Lunar Languages",descriptor:"Senior Capstone",path:"/LunarLanguages"}),r.a.createElement(N,{src:"images/apothecaryimage.jpeg",text:"Apothecary - Coming Soon!",descriptor:"Personal Project",path:"/Apothecary"})))))},k=t(9);t(55),t(56);function x(e){return r.a.createElement("g",{className:"bar-group"},r.a.createElement("rect",{width:100,height:100,fill:"#000"}))}function C(e){return r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("text",{y:"-30"},"Beginner"),r.a.createElement("text",{y:"-30"},"Elementary")))}r.a.Component;var S=function(e){var a=e.exactClassName,t=e.heading,l=e.img,i=e.altimg,s=e.alt,o=Object(n.useState)(!0),c=Object(k.a)(o,2),m=c[0],h=c[1],u=function(){window.innerWidth<=650?h(!1):h(!0)};return window.addEventListener("resize",u),Object(n.useEffect)((function(){u()})),r.a.createElement("div",{className:a},r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement("h2",{className:"skills-heading"},t),r.a.createElement("div",{className:"barchart-image-wrapper"},r.a.createElement("img",{className:"barchart-image",alt:s,src:m?l:i}))))},j={exactClassName:"skills-section",heading:"Programming and Scripting Languages",img:"images/barchart1.png",altimg:"images/barchart1alt.png",alt:"Programming Languages Bar Chart"},L={exactClassName:"skills-section skills-section-end",heading:"Game and Graphic Software",img:"images/barchart2.png",altimg:"images/barchart2alt.png",alt:"Programming Languages Bar Chart"};t(57);var T=function(){return r.a.createElement("div",{className:"coursework"},r.a.createElement("h1",null,"COURSEWORK"),r.a.createElement("div",{className:"coursework__container"},r.a.createElement("div",{className:"coursework__wrapper"},r.a.createElement("ul",{className:"coursework__itemlist"},r.a.createElement("li",{className:"coursework__item"},r.a.createElement("h3",null,"Software Engineering"),r.a.createElement("ul",{className:"coursework__classlists"},r.a.createElement("li",null,"Software Engineering Practices"),r.a.createElement("li",null,"Data Structures and Analysis Algorithms"),r.a.createElement("li",null,"Files/Database Systems"),r.a.createElement("li",null,"Operating Systems"),r.a.createElement("li",null,"Information & Computer Security"),r.a.createElement("li",null,"Analysis & Design of Software Systems"),r.a.createElement("li",null,"Software Construction"),r.a.createElement("li",null,"Software Quality Assurance"),r.a.createElement("li",null,"Real-Time Systems"),r.a.createElement("li",null,"Human-Computer Interfaces"),r.a.createElement("li",null,"Telecommunications Systems"),r.a.createElement("li",null,"Computer Architecture"),r.a.createElement("li",null,"Organization of Programming Languages"))),r.a.createElement("li",{className:"coursework__item"},r.a.createElement("h3",null,"Games & Animation"),r.a.createElement("ul",{className:"coursework__classlists"},r.a.createElement("li",null,"Intro to Computer Games Systems I & II"),r.a.createElement("li",null,"Interactive Media I"),r.a.createElement("li",null,"Modeling & World Building"),r.a.createElement("li",null,"Intro to Computer Graphics")))),r.a.createElement("ul",{className:"coursework__itemlist"},r.a.createElement("li",{className:"coursework__item"},r.a.createElement("h3",null,"Basic Core"),r.a.createElement("ul",{className:"coursework__classlists"},r.a.createElement("li",null,"Calculus I, II & III"),r.a.createElement("li",null,"Differential Equations and Math Methods"),r.a.createElement("li",null,"Intro to Discrete Structures"),r.a.createElement("li",null,"Probability and Statistics"),r.a.createElement("li",null,"Physics for Engineers I, II, & III"))),r.a.createElement("li",{className:"coursework__item"},r.a.createElement("h3",null,"Other Engineering"),r.a.createElement("ul",{className:"coursework__classlists"},r.a.createElement("li",null,"Digital Circuit Design"),r.a.createElement("li",null,"Linear Circuits Analysis"),r.a.createElement("li",null,"Microprocessor Systems")))))))};t(58);var I=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("h2",{className:"footer-subscription-heading"},"Contact Me"),r.a.createElement("p",{className:"footer-subscription-text"},"Email: saraha_collins@outlook.com"),r.a.createElement("div",null,r.a.createElement(d.b,{to:"www.linkedin.com/in/sarah-collins-"},r.a.createElement("img",{src:"images/liicon.png",className:"icon-links"})),r.a.createElement(d.b,{to:"https://github.com/SarahACollins"},r.a.createElement("img",{src:"images/githubicon.png",className:"icon-links"})))))};t(34);var O=function(){var e=Object(n.useState)(!1),a=Object(k.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(!0),s=Object(k.a)(i,2),o=(s[0],s[1]),c=function(){return l(!1)};return window.removeEventListener("resize",(function(){window.innerWidth<=960?o(!1):o(!0)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container container"},r.a.createElement(d.b,{to:"/",className:"navbar-logo",onClick:c},"sarah collins"),r.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},r.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.Link,{to:"aboutme",smooth:!0,className:"nav-links",offset:-50,onClick:c},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.Link,{to:"projects",smooth:!0,className:"nav-links",offset:-50,onClick:c},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.Link,{to:"skills",smooth:!0,className:"nav-links",offset:-50,onClick:c},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.Link,{to:"coursework",smooth:!0,className:"nav-links",offset:-50,onClick:c},"Coursework")),r.a.createElement("li",{className:"nav-btn"})))))};var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{id:"aboutme"},r.a.createElement(b,w)),r.a.createElement("div",{id:"projects"},r.a.createElement(y,null)),r.a.createElement("div",{id:"skills"},r.a.createElement("h1",null,"SKILLS"),r.a.createElement(S,j),r.a.createElement(S,L)),r.a.createElement("div",{id:"coursework"},r.a.createElement(T,null)),r.a.createElement("div",{id:"footer"},r.a.createElement(I,null)))};var P=function(e){var a=e.exactClassName,t=e.topLine,n=e.lightText,l=e.lightTextDesc,i=e.headline,s=e.description,o=(e.buttonLabel,e.img),c=e.heroimg,m=e.alt,h=e.imgStart;return r.a.createElement("div",{className:a},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row home__hero-row project-row",style:{display:"flex",flexDirection:"start"===h?"row-reverse project-row":"row project-row"}},r.a.createElement("div",{className:"col project-col"},r.a.createElement("div",{className:"home__hero-text-wrapper"},r.a.createElement("div",{className:"top-line"},t),r.a.createElement("h1",{className:n?"heading heading-project":"heading dark heading-project"},i),r.a.createElement("p",{className:l?"home__hero-subtitle home__hero-subtitle-project":"home__hero-subtitle home__hero-subtitle-reverse dark"},s))),r.a.createElement("div",{className:"col project-col"},r.a.createElement("div",{className:"home__hero-img-wrapper home__hero-img-wrapper-project"},r.a.createElement("img",{src:o,alt:m,className:c?"home__hero-img home__hero-img-project":"home__hero-gif"}))))))};var A=function(e){var a=e.exactClassName,t=e.topLine,n=e.lightText,l=e.lightTextDesc,i=e.headline,s=e.description,o=(e.buttonLabel,e.img),c=e.heroimg,m=e.alt,h=e.imgStart;return r.a.createElement("div",{className:a},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===h?"row-reverse":"row"}},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-img-wrapper"},r.a.createElement("img",{src:o,alt:m,className:c?"home__hero-img":"home__hero-gif"}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-text-wrapper"},r.a.createElement("div",{className:"top-line top-line-reverse"},t),r.a.createElement("h1",{className:n?"heading heading-reverse":"heading heading-reverse dark"},i),r.a.createElement("p",{className:l?"home__hero-subtitle home__hero-subtitle-reverse":"home__hero-subtitle home__hero-subtitle-reverse dark"},s))))))};var M=function(){var e=Object(n.useState)(!1),a=Object(k.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(!0),s=Object(k.a)(i,2),o=(s[0],s[1]),c=function(){return l(!1)};return window.removeEventListener("resize",(function(){window.innerWidth<=960?o(!1):o(!0)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container container"},r.a.createElement(d.b,{to:"/",className:"navbar-logo",onClick:c},"sarah collins"),r.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},r.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-links",onClick:c},"Return to Home")),r.a.createElement("li",{className:"nav-btn"})))))},B={exactClassName:"home__hero-section home__hero-section-project darkBg",lightText:!0,lightTextDesc:!0,topLine:"Fall 2020 - Spring 2021",headline:"Lunar Languages",description:"Developed by six students as their senior capstone project, Lunar Languages provides an immersive        language-learning experience, allowing users to learn Mandarin Chinese by walking to augmented reality       (AR) hotspots located around the Embry-Riddle Aeronautical University Prescott campus.\n\n      The project was designed during Fall 2020 and developed during the Spring 2021 semester. The app was released       on the Apple App Store and the Google Play Store, though has since been modified by the Embry-Riddle administration       outside of the work of the original team.",imgStart:"",heroimg:!0,img:"images/lunarlogo.png",alt:"Lunar Languages Logo"},R={exactClassName:"home__hero-section home__hero-section-gif lightBg",lightText:!1,lightTextDesc:!1,topLine:"How to Play",headline:"Walk Around Campus",description:"Players can view their environment and their position, as well as nearby hotspots, via a top-down map.        They will be notified if they walk outside the campus boundary.",imgStart:"",heroimg:!1,img:"images/map.gif",alt:"Map Module"},F={exactClassName:"home__hero-section home__hero-section-gif lightBg",lightText:!1,lightTextDesc:!1,topLine:"",headline:"Visit Hotspots to Learn New Words",description:"When near a hotspot, the player can click on the hotspot icon to open AR mode to learn new words.       Each hotspot is themed around different subjects, such as food, people, or language basics.",imgStart:"",heroimg:!1,img:"images/hotspot.gif",alt:"Hotspot Module"},z={exactClassName:"home__hero-section home__hero-section-gif lightBg",lightText:!1,lightTextDesc:!1,topLine:"",headline:"Study for a Test or Refresh Your Memory",description:"Players are able to review words they have already learned in practice mode.",imgStart:"",heroimg:!1,img:"images/practicemode.gif",alt:"Practice Mode Module"},H={exactClassName:"home__hero-section home__hero-section-gif lightBg",lightText:!1,lightTextDesc:!1,topLine:"",headline:"See Your Progress!",description:"Players can see their experience and level in different subjects of the Mandarin language.",imgStart:"",heroimg:!1,img:"images/userinfomode.gif",alt:"User Info Module"},W={exactClassName:"home__hero-section home__hero-section darkBg",lightText:!0,lightTextDesc:!0,topLine:"Personal Role",headline:"Project Manager & Team Member",description:"As project manager, I planned and scheduled all tasks within the project, assigning weekly tasks to       team members to effectively meet deadlines and produce a minimum viable product within 12 weeks. \n\n       As a team member on this project, I created the JSON file databases to organize subjects, categories, and       vocab words for the application, the C# scripts to read the JSON files into the application, and the system       controlling which subject, category, and vocab words are selected when visiting a hotspot or using practice       mode. I also created the functionality behind displaying different questions, randomizing questions, randomizing       answers, checking for the correct answer when selected, and updating the player\u2019s experience and level as they       answer questions correctly.",imgStart:"",heroimg:!0,img:"images/headshot.png",alt:"Personal Headshot"},G={exactClassName:"home__hero-section home__hero-section-project home__hero-section-end darkBg",lightText:!0,lightTextDesc:!0,topLine:"Creation of Lunar Languages",headline:"Development",description:"Lunar Languages was developed using the Unity game engine, combined with the software development        kits Mapbox, which provides accurate renditions of the player\u2019s environment and real-time tracking        of their position, and ARCore, a Google developed plug-in allowing for access to player camera and        the superimposition of images onto the player\u2019s view. \n\n        All coding scripts were written in C#; 3D models were created and animated in Blender; and other        art and images were created using Clip Studio Paint, Adobe Illustrator, and Procreate.",imgStart:"",heroimg:!0,img:"images/unity-mwu-white.png",alt:"Made with Unity"};function U(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement("div",{className:"project-section-div"},r.a.createElement(P,B)),r.a.createElement("div",{className:"project-section-div"},r.a.createElement(A,R),r.a.createElement(A,F),r.a.createElement(A,z),r.a.createElement(A,H)),r.a.createElement("div",null,r.a.createElement(P,W),r.a.createElement(P,G)))}var J={exactClassName:"home__hero-section darkBg",lightText:!0,lightTextDesc:!0,topLine:"Fall 2021 - Current",headline:"Coming Soon!",description:"",imgStart:"",heroimg:!0,img:"",alt:""};function q(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement("div",{className:"project-section-div"},r.a.createElement(P,J)))}var K=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(g,null),r.a.createElement(h.a,{path:"/",exact:!0,component:D}),r.a.createElement(h.a,{path:"/LunarLanguages",component:U}),r.a.createElement(h.a,{path:"/Apothecary",component:q})))}}]),t}(n.Component);i.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3e4c9418.chunk.js.map