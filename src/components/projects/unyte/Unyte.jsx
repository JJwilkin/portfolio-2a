import React, {useState, useRef, useEffect} from 'react';
import styles from './Unyte.scss';
import ForgotPassword  from './forgot-password/ForgotPassword';
import Serverless from './serverless-project/Serverless'
import Shipping from './automate-shipping/Shipping'
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 
const useMountEffect = (fun) => useEffect(fun, [])

export default function Unyte() {
    const [activeTab, setActiveTab] = useState('password');
    const landing = useRef(null)

    useMountEffect(() => {scrollToRef(landing) ;  }) // Scroll on mount
    

    return (<>
        <div ref={landing}></div> 
        <div class="project">
            <div class='header-picture'></div>
            <div id='unyte-title'>
                <h1>Full Stack Developer</h1>
                <h2> Unyte Health Inc </h2>
            </div>
            <div class='subtitle'>
                <h1 >Summary of Experience</h1>
            </div>
            <div class='description'>
                <div id='bar'></div>
                <div id='text'>Worked in a small startup that developed a web dashboard for therapists and their clients to monitor progress and statistics. </div>
            </div>
            <div class='subtitle'>
                <h1 >Tech Stack</h1>
            </div>
            <div class='key-summary'>
                <div class='backend'>
                    <div id='aws' class='tool-card'><i class="devicon-amazonwebservices-plain-wordmark"></i>
                        <h1>AWS</h1>
                    </div>
                    <div class='tool-card'><span class="iconify" data-icon="simple-icons:graphql" data-inline="false"></span>
                        <h1>Graphql</h1>
                    </div>
                    <div class='tool-card'><i class="devicon-nodejs-plain"></i>
                        <h1>Node</h1>
                    </div>
                    <div class='tool-card'><i class="devicon-postgresql-plain"></i>
                        <h1>Postgres</h1>
                    </div>


                    <div id='bar'></div>

                    <div class='tool-card'>
                        <h1>Backend</h1>
                    </div>
                </div>
                <div class='frontend'> <div class='tool-card'><i class="devicon-react-original"></i>
                    <h1>React</h1>
                </div>
                    <div class='tool-card'><span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>
                        <h1>Material UI</h1>
                    </div>
                    <div id='aws' class='tool-card'><i class="devicon-amazonwebservices-plain-wordmark"></i>
                        <h1>AWS</h1>
                    </div>
                    <div class='tool-card'><i class="devicon-javascript-plain"></i>
                        <h1>Javascript</h1>
                    </div>

                    <div id='bar'></div>

                    <div class='tool-card'>
                        <h1>Frontend</h1>
                    </div>
                </div>


            </div>
            <div class='subtitle'><h1>Role Breakdown</h1></div>
            <div class='roles'>
                <div class='tool-card'><span class="iconify" data-icon="mdi:numeric-1-circle-outline" data-inline="false"></span>
                    <h1>Build a Serverless API</h1>
                </div>
                <div class='tool-card'><span class=" iconify" data-icon="mdi:numeric-2-circle-outline" data-inline="false"></span>
                    <h1>Develop Front-end UI </h1>
                </div>
                <div class='tool-card'><span class=" iconify" data-icon="mdi:numeric-3-circle-outline" data-inline="false"></span>
                    <h1>Automate Shipping Process </h1>
                </div>
            </div>



            <div class='padding-top subtitle'><h1>Notable Projects</h1></div>

            <div class='padding-top  full-width flex-align-center'>
                
                <h2 onClick={() =>setActiveTab('password')} className={activeTab =='password' ? "active" : "inactive"}>Forgot Password Sequence</h2> 
                <h2 onClick={() =>setActiveTab('serverless')} className={activeTab =='serverless' ? "active" : "inactive"}>Serverless API</h2>
                <h2 onClick={() =>setActiveTab('automate')} className={activeTab =='automate' ? "active" : "inactive"}>Automate Order Logistics</h2>
                
                
                
            </div>
            
     {  activeTab == 'password' ?  
            <ForgotPassword />

            :
            activeTab =='serverless' ?  
           <Serverless />
        : 

            <Shipping />
        }

        </div>

    </>
    )
}
