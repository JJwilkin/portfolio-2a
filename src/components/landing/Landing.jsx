import React from 'react';
import './Landing.scss';
import Fade from "react-reveal/Fade";

export default function Landing ()  {
    return (
        
        <div class="landing ">
        <div class='landing-caption'>
        

            <div class="text">
            <Fade top>
                <h1 >
                Hey there,</h1>
            <h1 >I'm Josh.</h1>
            </Fade>

            </div>
            
            <div class="text" > <Fade opposite><h2 >Seeking Summer Internships. Previously Data Science @  <strong>Nuralogix</strong></h2></Fade></div>
        
        </div>
        <Fade opposite>
        <img src='./img/landing.svg' alt='landing'></img>
        </Fade>
        </div>
      
    )
}