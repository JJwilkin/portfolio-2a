import React from 'react';
import styles from './Experience.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { style } from '@material-ui/system';
import { StylesContext } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiPaper: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
    
        color: 'white',
        height: 45,
        width: 70,
        position:'relative',
        right: 70,
        
        padding: '0 30px',

        boxShadow: '0 3px 3px 2px rgba(0, 0, 0, 0.3)',
    },
      
    },
  },
});



const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, rgba(83,100,255,1) 0%, rgba(144,141,255,1) 100%)',

        color: 'white',
      height: 45,
      width: 120,
      position:'relative',
      right: 90,
      
      padding: '0 30px',
      
      
    },

  }));

export default function Skills ()  {
    const classes = useStyles();
    return (
        <div id="experience" class="section">
        
        
            {/* <ThemeProvider theme={theme}>
            
            <Paper  className={classes.root } variant="elevation" elevation={0}>
            <h1  class='offset' >Experience</h1>
            
            
            </Paper></ThemeProvider> */}
             <div class='main-subtitle'>
        <h1>Case Studies</h1>
        </div>
        <div class="entry">
            <div class="caption">
                <h1 id='full-stack'>Software Developer</h1>
                <h3>D2L</h3>
                <p>Currently working as a Software Developer @ D2L</p>
            <div class="learn">
                {/* <Link style={{ textDecoration: 'none'}} to='/unyte'> */}
                {/* <button class="more">
                Coming Soon!
                </button> */}
                {/* </Link> */}
            </div>
            </div>
            <div class="card-image">
            {/* <Link style={{ textDecoration: 'none'}} to='/unyte'> */}
                <div id='d2l' class='card'></div>
                {/* </Link> */}
                {/* <div class="image">
                    
                    <div class='tools'>
                    <div class='tool list-item'>
                    Node
                    </div>
                    <div class='tool list-item'>
                    React
                    </div>
                    <div class='tool list-item'>
                    AWS
                    </div>
                    </div>
                </div> */}
            </div>
        </div>

        <div class="entry">
            <div class="caption">
                <h1 id='full-stack'>ChowTime</h1>
                <h3>Scan Food, Get Recipes</h3>
                <p>Developed a React Native mobile app that scans food in a user's fridge to suggest healthy recipes. Trained an object detection model using Tensorflow by collecting, labelling, and preprocessing images of common grocery and produce items. Applied natural language processing (NLP) and optical character recognition (OCR) to extract and interpret text from labelled/packaged food items.</p>
            <div class="learn">
                <a style={{ textDecoration: 'none'}} target="_blank" href='https://linktr.ee/JJWilkin'>
                <button class="more">
                Try it Now!
                </button>
                </a>
            </div>
            </div>
            <div class="card-image">
            <a style={{ textDecoration: 'none'}} target="_blank" href='https://linktr.ee/JJWilkin'>
                <div id='chowtime' class='card'></div>
                </a>
                {/* <div class="image">
                    
                    <div class='tools'>
                    <div class='tool list-item'>
                    Node
                    </div>
                    <div class='tool list-item'>
                    React
                    </div>
                    <div class='tool list-item'>
                    AWS
                    </div>
                    </div>
                </div> */}
            </div>
        </div>

        <div class="entry">
            <div class="caption">
                <h1 id='full-stack'>Software Developer</h1>
                <h3>BTNX Inc</h3>
                <p>Designed, trained, and implemented a convolutional neural network using Tensorflow to automatically classify images of drug tests as positive/negative. Preprocessed images using OpenCV and Python for use in the machine learning model. Developed a cross-platform mobile app with Xamarin and .NET used by over 500 customers to capture and log COVID-19 tests, automate drug testing, and simplify form submission.</p>
            <div class="learn">
                {/* <Link style={{ textDecoration: 'none'}} to='/unyte'> */}
                <button class="more">
                Coming Soon!
                </button>
                {/* </Link> */}
            </div>
            </div>
            <div class="card-image">
            {/* <Link style={{ textDecoration: 'none'}} to='/unyte'> */}
                <div id='btnx' class='card'></div>
                {/* </Link> */}
                {/* <div class="image">
                    
                    <div class='tools'>
                    <div class='tool list-item'>
                    Node
                    </div>
                    <div class='tool list-item'>
                    React
                    </div>
                    <div class='tool list-item'>
                    AWS
                    </div>
                    </div>
                </div> */}
            </div>
        </div>       

        <div class="entry">
            <div class="caption">
                <h1 id='full-stack'>Full Stack Developer</h1>
                <h3>Unyte Health Inc</h3>
                <p>Worked with a small team to develop a React/Redux web dashboard for therapists to manage clients and track progress. Developed a new GraphQL API in Node hosted on AWS/Serverless used to manage client data and optimize performance. Used Sequelize models for schema design on a Postgres database enabling organized and semantic architecture. Automated product shipping using Webhook triggered notifications.</p>
            <div class="learn">
                <Link style={{ textDecoration: 'none'}} to='/unyte'>
                <button class="more">
                Learn More
                </button>
                </Link>
            </div>
            </div>
            <div class="card-image">
            <Link style={{ textDecoration: 'none'}} to='/unyte'>
                <div id='unyte' class='card'></div>
                </Link>
                {/* <div class="image">
                    
                    <div class='tools'>
                    <div class='tool list-item'>
                    Node
                    </div>
                    <div class='tool list-item'>
                    React
                    </div>
                    <div class='tool list-item'>
                    AWS
                    </div>
                    </div>
                </div> */}
            </div>
        </div>

        <div class="entry">
            <div class="caption">
                <h1>QA Developer</h1>
                <h3>DelphX Inc</h3>

                <p>Wrote integration and unit tests for Python micro-services with Nose to ensure the web-based bond-trading platform functioned efficiently. Deployed and maintained Kubernetes containers in Docker to ensure optimal uptime of microservices. Improved search load times by 30% using Elasticsearch to perform  database queries.</p>
                <div class="learn">
                <Link style={{ textDecoration: 'none'}} to='/delphx'>
                <button class="more">
                Learn More
                </button>
                </Link>
            </div>
            </div>
            <div class="card-image">
            <Link style={{ textDecoration: 'none'}} to='/delphx'>
                <div id='delphx-img' class='card'></div>
                </Link>
                {/* <div class="image">
                    
                    <div class='tools'>
                    <div class='tool list-item'>
                    Node
                    </div>
                    <div class='tool list-item'>
                    React
                    </div>
                    <div class='tool list-item'>
                    AWS
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
        {/* <div class="text" > <h2 >Its nice to meet you</h2></div> */}
        </div>
    )
}