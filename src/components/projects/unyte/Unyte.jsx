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
            <div class='subtitle bottom-margin-30'>
                <h1 >Summary of Experience</h1>
            </div>
            <div class='description bottom-margin-sm'>
                <div id='bar'></div>
                <div id='text'>Worked with a small team to develop a React/Redux web dashboard
for therapist to manage clients and track progress. Developed a new GraphQL API in Node hosted on AWS/Serverless
used to manage client data and optimize performance. Used Sequelize models for schema design on a Postgres database
enabling organized and semantic architecture. Automated product shipping using Webhook triggered notifications.</div>
            </div>
            <div class='subtitle'>
                <h1 >Tech Stack</h1>
            </div>
            <div class='key-summary bottom-margin-sm'>
                <div class='backend'>
                    <div id='aws' class='tool-card '><i class=" devicon-amazonwebservices-plain-wordmark"></i>
                        <h1>AWS</h1>
                    </div>
                    <div class='tool-card'><i class="cib-graphql"></i>
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
                    <div class='tool-card'><i class="cib-material-design"></i>
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
            <div class='roles bottom-margin-sm'>
                <div class='tool-card'><i class="cib-graphql"></i>
                    <h1>Build a Serverless GraphQL API</h1>
                </div>
                <div class='tool-card'><i class="devicon-react-original"></i>
                    <h1>Develop a React Web Dashboard </h1>
                </div>
                <div class='tool-card'><i class="cib-slack"></i>
                    <h1>Automate Shipping Process </h1>
                </div>
            </div>



            <div class='padding-top subtitle'><h1>Notable Projects</h1></div>

            <div class='padding-top  full-width flex-align-center bottom-margin-30'>
                
                <h2 onClick={() =>setActiveTab('password')} className={activeTab =='password' ? "active" : "inactive"}>Forgot Password Sequence</h2> 
                <h2 onClick={() =>setActiveTab('serverless')} className={activeTab =='serverless' ? "active" : "inactive"}> GraphQL API</h2>
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
