import React, { Component, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import Landing from '../components/landing/Landing'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Contact from '../components/contact/Contact'
import { useLocation } from 'react-router-dom'


// let path = (window.location.pathname).substring(1);
// let section = path.substring(1);
export default function HomePage() {
    let location = useLocation()
    const landing = useRef(null)
    const skills = useRef(null)
    const experience = useRef(null)
    const contact = useRef(null)


    
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun) => useEffect(fun, [location])
let section = (window.location.pathname).substring(1);

function determineSection (section) {
    switch(section) {
        case 'skills':
            return(skills);
        case 'experience':
            return(experience);    
        case 'contact':
            return(contact);
        default:
            return(landing);
            
    }
}

    useMountEffect(() => {scrollToRef(determineSection(section)) ;  }) // Scroll on mount
    

    
    return (
    <>
    <div ref={landing}></div> 
    <Landing />
    
    <div ref={skills}></div>
    <Skills/>

    <div ref={experience}></div>
    <Experience/>
  
    <div ref={contact}></div>
    <Contact/> 
    </>
    )
}
