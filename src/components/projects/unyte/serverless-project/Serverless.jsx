import React, {useState} from 'react';

export default function Serverless() {

    return (<>
          
          <div class='description bottom-margin-sm'>
                <div id='bar'></div>
                <div id='text'>Being a small startup, the overhead costs and maintenance required to buy and run a server made serverless architechture the only feasible solution. In order to retrieve and store data for the web dashboard a fast, low maintenance, and iterable API had to be developed. The Node based API was created using cutting edge tech like Graphql to optimize performance and was hosted on AWS for reliabilitys and scaling.     </div>
            </div>

            {/* <div class='padding-top white-text full-width flex-align-center'>
                <h2 >Project Breakdown</h2>
            </div> */}

            <div class="subtitle">
                <h1>Project Breakdown</h1>
            </div>
            <div class='roles bottom-margin-sm'>
                <div class='tool-card'><span id="node"class="iconify" data-icon="simple-icons:node-dot-js" data-inline="false"></span>
                    <h1 id="node">Developed new API in Node</h1>
                </div>
                <div class='tool-card'><i id="graphql" class="cib-graphql"></i>
                    <h1 id="graphql">Used GraphQL for efficient, highly customizeable queries</h1>
                </div>
                <div class='tool-card'><span class="iconify" data-icon="logos:serverless" data-inline="false"></span>
                    <h1 id="serverless">Hosted API on AWS/Serverless Framework</h1>
                </div>
            </div>
            <div class='two-column-entry full-width'>
                <div class='full-height left-text'>
                    <p>The API was designed with performance and scalability in mind. Occupational therapists previously had to log and manage data manually creating the need for a web platform where content management was automated. Due to the large amounts of data many therapists would deal with, GraphQL was choosen to enable highly customizeable queries and mutations to our Postgres database allowing optimal API performance. During my term, I worked extensively on developing GraphQL queries and mutations as new data structures were added to our Schema and business logic.  </p>
                </div>
                <div class='full-height right-image'>
                    <img src='https://miro.medium.com/max/1100/1*G5SHJcfMXtofKwJmQmlB2A.jpeg' alt='forgot-password first page'></img>
                </div>
            </div>

            <div class='two-column-entry full-width'>
                <div class='full-height left-text'>
                    <p>The API was also designed to be highly scalable and reliable to meet the needs of a fast growing startup. For this, AWS coupled with the Serverless framework allowed for the team to focus on the API development and less on server maintenance. I worked with various AWS services such as: Cognito, for user authentication ; API gateway and Lambda, to handle dynamic API calls; RDS, to host our PostgresQL database.   </p>
                </div>
                <div class='full-height right-image'>
                    <img src='https://miro.medium.com/max/682/0*U45w6iFDevZ53HCn' alt='forgot-password first page'></img>
                </div>
            </div>
            
            

{/* 
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
        
        </> 
        
    
    )
}