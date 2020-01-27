import React, {useState, useRef, useEffect} from 'react';
import styles from './DelphX.scss';
import Automation from './automationTest/AutomationTest';
import Microservices from './microservices/Microservices';
import Debug from './debuging/Debug';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 
const useMountEffect = (fun) => useEffect(fun, [])

export default function Unyte() {
    const [activeTab, setActiveTab] = useState('automation');
    const landing = useRef(null)

    useMountEffect(() => {scrollToRef(landing) ;  }) // Scroll on mount
    

    return (<>
        <div ref={landing}></div> 
        <div class="project">
            <div class='delphx-picture'></div>
            <div id='delphx-title'>
                <h1>QA Developer</h1>
                <h2> DelphX Inc </h2>
            </div>
            <div class='subtitle bottom-margin-30'>
                <h1 >Summary of Experience</h1>
            </div>
            <div class='description bottom-margin-sm'>
                <div id='bar'></div>
                <div id='text'>Wrote integration and unit tests for Python micro-services with Nose to ensure the web corporate bond-trading platform functioned efficiently. Deployed and maintained Kubernetes containers in Docker to ensure optimal uptime of micro-services. Improved search load times by 30% using Elasticsearch to perform  database queries time.</div>
            </div>
            <div class='subtitle'>
                <h1 >Tech Stack</h1>
            </div>
            <div class='key-summary bottom-margin-sm'>
                <div class='backend'>
                    <div id='aws' class='tool-card'><i class="devicon-python-plain"></i>
                        <h1>Python</h1>
                    </div>
                    <div class='tool-card'><i class="cib-kubernetes"></i>
                        <h1>Kubernetes</h1>
                    </div>
                    <div class='tool-card'><i class="devicon-docker-plain"></i>
                        <h1>Docker</h1>
                    </div>
                    <div class='tool-card'><i class="cib-azure-devops"></i>
                        <h1>Azure</h1>
                    </div>


                    <div id='bar'></div>

                    <div class='tool-card'>
                        <h1>Technologies</h1>
                    </div>
                </div>
              


            </div>
            <div class='subtitle'><h1>Role Breakdown</h1></div>
            <div class='roles bottom-margin-sm'>
                <div class='tool-card'><span class="iconify" data-icon="mdi:numeric-1-circle-outline" data-inline="false"></span>
                    <h1> Deploy and maintain microservices</h1>
                </div>
                <div class='tool-card'><span class=" iconify" data-icon="mdi:numeric-2-circle-outline" data-inline="false"></span>
                    <h1>Write Integration and Unit tests </h1>
                </div>
                <div class='tool-card'><span class=" iconify" data-icon="mdi:numeric-3-circle-outline" data-inline="false"></span>
                    <h1>Improve Search Query Time</h1>
                </div>
            </div>



            <div class='padding-top subtitle'><h1>Notable Tasks</h1></div>

            <div class='padding-top  full-width flex-align-center bottom-margin-30'>
            <h2 onClick={() =>setActiveTab('microservices')} className={activeTab =='microservices' ? "active" : "inactive"}> Maintain Micro-services</h2>
                <h2 onClick={() =>setActiveTab('automation')} className={activeTab =='automation' ? "active" : "inactive"}>Python Testing</h2> 
             
                <h2 onClick={() =>setActiveTab('debug')} className={activeTab =='debug' ? "active" : "inactive"}> Search Query Time</h2>
                
                
                
            </div>
            {  activeTab == 'microservices' ?  
            <Microservices />

            :
            activeTab =='automation' ?  
           <Automation />
        : 

            <Debug />
        }
    

        </div>

    </>
    )
}
