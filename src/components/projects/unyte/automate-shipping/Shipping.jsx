
import React, {useState} from 'react';

export default function Serverless() {
return (       
     <>            
     <div class='description bottom-margin-sm'>
                <div id='bar'></div>
                <div id='text'>The prior shipping and logistics process involved a lot of manual communication between the shipment team and customer support. This created a bottle-kneck on scalability and increased the possibility of missed shipments due to miscommunication. The shipping notification automation reduced processing time by 20% as well as greatly reduced the potential for human error.  </div>
            </div>

            <div class="subtitle">
                <h1>Project Breakdown</h1>
            </div>
            <div class='roles bottom-margin-sm'>
                <div class='tool-card'><span  class="iconify" data-icon="logos:webhooks" data-inline="false"></span>
                    <h1 id='webhook'>Webhook Triggered Shipping Notification</h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="logos:slack-icon" data-inline="false"></span>
                    <h1 id="slack">Sent Notification to Shipping Slack Channel </h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="logos:postgresql" data-inline="false"></span>
                    <h1 id="postgres">Stored order payload in Postgres database.</h1>
                </div>
            </div>
            <div class='two-column-entry full-width'>
                <div class='full-height left-text'>
                    <p>I created a webhook to be triggered upon order and training completion sending a POST request to our API containing the order information. This data was then parsed, stored in the database, and a shipping notification was sent via Slack to the shipment team notifying them to ship the order.  </p>
                </div>
                <div class='full-height right-image'>
                    <img src='http://www.cloudways.com/blog/wp-content/uploads/Rest-API-introduction.jpg' alt='forgot-password first page'></img>
                </div>
            </div>
{/* 
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
            </div>  */}
        
</>)
}