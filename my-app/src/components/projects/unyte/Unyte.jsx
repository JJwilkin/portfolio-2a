import React, {useState} from 'react';
import styles from './Unyte.scss';

export default function Unyte() {
    const [activeTab, setActiveTab] = useState('password');
    return (<>

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
                <div id='text'>This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph. </div>
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
                    <h1>Build and Iterate on a Serverless API</h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="mdi:numeric-2-circle-outline" data-inline="false"></span>
                    <h1>Develop Web Platform and Integrate Backend</h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="mdi:numeric-3-circle-outline" data-inline="false"></span>
                    <h1>Automate Logistics Process </h1>
                </div>
            </div>



            <div class='padding-top subtitle'><h1>Notable Projects</h1></div>

            <div class='padding-top  full-width flex-align-left'>
                
                <h2 onClick={() =>setActiveTab('password')} className={activeTab =='password' ? "active" : "inactive"}>Forgot Password Sequence</h2> 
                <h2 onClick={() =>setActiveTab('serverless')} className={activeTab =='serverless' ? "active" : "inactive"}>Serverless API</h2>
                <h2 onClick={() =>setActiveTab('automate')} className={activeTab =='automate' ? "active" : "inactive"}>Automate Order Logistics</h2>
                
                
                
            </div>
            
     {  activeTab == 'password' ?  <>   <div class='description'>
                <div id='bar'></div>
                <div id='text'>This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph. </div>
            </div>
            <div class='two-column-entry full-width'>
                <div class='full-height left-text'>
                    <p>This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.</p>
                </div>
                <div class='full-height right-image'>
                    <img src='./img/forgot-password-1.png' alt='forgot-password first page'></img>
                </div>
            </div>

            <div class='two-column-entry full-width'>
                <div class='full-height left-text'>
                    <p>This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.</p>
                </div>
                <div class='full-height right-image'>
                    <img src='./img/forgot-password-2.png' alt='forgot-password first page'></img>
                </div>
            </div>
            
            
            <div class='padding-top white-text full-width flex-align-left'>
                <h2>Project Breakdown</h2>
            </div>
            <div class='roles'>
                <div class='tool-card'><span class="iconify" data-icon="logos:material-ui" data-inline="false"></span>
                    <h1 id="material">Design and build UI components.</h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="logos:aws-ses" data-inline="false"></span>
                    <h1 id="ses">Utilize AWS SES to send recovery emails. </h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="logos:aws-cognito" data-inline="false"></span>
                    <h1 id="cognito">Call AWS Cognito API to reset password.</h1>
                </div>
            </div>

            <div class='padding-top white-text full-width flex-align-left'>
                <h2>Demo</h2>
            </div>
            <div class='two-column-entry full-width'>

                <div id='full' class='full-height right-image'>
                    <video width="100%" controls>
                        <source src=".//img/video1.mov" type="video/mp4"></source>
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div> 
            </>

            :
            activeTab =='serverless' ? <>   <div class='description'>
            <div id='bar'></div>
            <div id='text'>This is a severless paragraph. This is a severless paragraph.This is a severless paragraph.This is a This is a severless paragraph.This is a severless paragraph.This is a severless paragraph.This is a severless paragraph.This is a severless paragraph.This is a severless paragraph. </div>
        </div>
        <div class='two-column-entry full-width'>
            <div class='full-height left-text'>
                <p>This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.</p>
            </div>
            <div class='full-height right-image'>
                <img src='./img/forgot-password-1.png' alt='forgot-password first page'></img>
            </div>
        </div>

        <div class='two-column-entry full-width'>
            <div class='full-height left-text'>
                <p>This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.</p>
            </div>
            <div class='full-height right-image'>
                <img src='./img/forgot-password-2.png' alt='forgot-password first page'></img>
            </div>
        </div>
        
        
        <div class='padding-top white-text full-width flex-align-left'>
            <h2>Project Breakdown</h2>
        </div>
        <div class='roles'>
            <div class='tool-card'><span class="iconify" data-icon="logos:material-ui" data-inline="false"></span>
                <h1 id="material">Design and build UI components.</h1>
            </div>
            <div class='tool-card'><span class="iconify" data-icon="logos:aws-ses" data-inline="false"></span>
                <h1 id="ses">Utilize AWS SES to send recovery emails. </h1>
            </div>
            <div class='tool-card'><span class="iconify" data-icon="logos:aws-cognito" data-inline="false"></span>
                <h1 id="cognito">Call AWS Cognito API to reset password.</h1>
            </div>
        </div>

        <div class='padding-top white-text full-width flex-align-left'>
            <h2>Demo</h2>
        </div>
        <div class='two-column-entry full-width'>

            <div id='full' class='full-height right-image'>
                <video width="100%" controls>
                    <source src=".//img/video1.mov" type="video/mp4"></source>
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div> 
        </> 
        
        : 

        <>   <div class='description'>
        <div id='bar'></div>
        <div id='text'>This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph.This is a description paragraph. </div>
    </div>
    <div class='two-column-entry full-width'>
        <div class='full-height left-text'>
            <p>This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.</p>
        </div>
        <div class='full-height right-image'>
            <img src='./img/forgot-password-1.png' alt='forgot-password first page'></img>
        </div>
    </div>

    <div class='two-column-entry full-width'>
        <div class='full-height left-text'>
            <p>This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.This is a description type of sort of paragraph.</p>
        </div>
        <div class='full-height right-image'>
            <img src='./img/forgot-password-2.png' alt='forgot-password first page'></img>
        </div>
    </div>
    
    
    <div class='padding-top white-text full-width flex-align-left'>
        <h2>Project Breakdown</h2>
    </div>
    <div class='roles'>
        <div class='tool-card'><span class="iconify" data-icon="logos:material-ui" data-inline="false"></span>
            <h1 id="material">Design and build UI components.</h1>
        </div>
        <div class='tool-card'><span class="iconify" data-icon="logos:aws-ses" data-inline="false"></span>
            <h1 id="ses">Utilize AWS SES to send recovery emails. </h1>
        </div>
        <div class='tool-card'><span class="iconify" data-icon="logos:aws-cognito" data-inline="false"></span>
            <h1 id="cognito">Call AWS Cognito API to reset password.</h1>
        </div>
    </div>

    <div class='padding-top white-text  full-width flex-align-left'>
        <h2>Demo</h2>
    </div>
    <div class='two-column-entry full-width'>

        <div id='full' class='full-height right-image'>
            <video width="100%" controls>
                <source src=".//img/video1.mov" type="video/mp4"></source>
                Your browser does not support HTML5 video.
            </video>
        </div>
    </div> 
    </>
        }

        </div>

    </>
    )
}