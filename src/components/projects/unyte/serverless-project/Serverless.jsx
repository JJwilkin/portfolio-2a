import React, {useState} from 'react';

export default function Serverless() {

    return (<>
          
          <div class='description'>
                <div id='bar'></div>
                <div id='text'>Being a small startup, the overhead costs and maintenance required to buy and run a server made serverless architechture the only feasible solution. In order to retrieve and store data for the web dashboard a fast, low maintenance, and iterable API had to be developed. The Node based API was created using cutting edge tech like Graphql to optimize performance and was hosted on AWS for reliabilitys and scaling.     </div>
            </div>

            <div class='padding-top white-text full-width flex-align-center'>
                <h2>Project Breakdown</h2>
            </div>
            <div class='roles'>
                <div class='tool-card'><span class="iconify" data-icon="simple-icons:node-dot-js" data-inline="false"></span>
                    <h1 id="material">Design and build UI components.</h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="cib:graphql" data-inline="false"></span>
                    <h1 id="ses">Utilize AWS SES to send recovery emails. </h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="logos:serverless" data-inline="false"></span>
                    <h1 id="cognito">Call AWS Cognito API to reset password.</h1>
                </div>
            </div>
            <div class='two-column-entry full-width'>
                <div class='full-height left-text'>
                    <p>Users the enter Forgot Password Sequence via the log-in page. After clicking "Forgot Password" users are redirected through a seamless and intuitive funnel beginning with the "Enter Email" page. Descriptive feedback is presented to the users with Material UI toast notifications indicating whether a email was sent or not. Upon entering a valid email address, the submission triggers a personalized email containing a reset link via AWS SES. </p>
                </div>
                <div class='full-height right-image'>
                    <img src='./img/forgot-password-1.png' alt='forgot-password first page'></img>
                </div>
            </div>

            <div class='two-column-entry full-width'>
                <div class='full-height left-text'>
                    <p>Upon clicking the customized link, users are redirected to a "Reset Password" page which reads a custom reset token located in the URL payload. The reset token is generated automatically by AWS Cognito and is passed in the API call to authorize the reset attempt. Users receive feedback on their reset password attempt via form based error messaging, showing the specific field which caused the new password to be rejected. This is convenient as it shows users more detailed information about what needs to be changed for the new password. Upon successful reset, users are redirected to the sign-in page and complete the sequence.</p>
                </div>
                <div class='full-height right-image'>
                    <img src='./img/forgot-password-2.png' alt='forgot-password first page'></img>
                </div>
            </div>
            
            


            <div class='padding-top white-text full-width flex-align-center'>
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
        
    
    )
}