import React from 'react';
import styles from './Skills.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { style } from '@material-ui/system';
import { StylesContext } from '@material-ui/styles';

// const theme = createMuiTheme({
//   overrides: {
//     // Style sheet name ⚛️
//     MuiPaper: {
//       // Name of the rule
//       root: {
//         // Some CSS
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
    
//         color: 'white',
//         height: 45,
//         width: 70,
//         position:'relative',
//         right: 70,
        
//         padding: '0 30px',
//         // boxShadow: '0 3px 3px 2px rgba(0, 0, 0, 0.3)',
//       },
      
//     },
//   },
// });



// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexDirection:'column',
//       justifyContent: 'flex-start',
//       alignItems: 'center',
//      position: 'relative',
//      padding:'0 20px 20px 20px',
     
     
//      right:30,
//         margin: theme.spacing(3),
//         minWidth: 250,
//         maxWidth: 350,
//         width:'30%',
//         minHeight: 400,
      
//     },

//   }));

export default function Skills ()  {
    // const classes = useStyles();
    return (
        <div id="skills" class=" section ">
         <div class='main-subtitle'>
            <h1>Skills</h1>
          </div>
        <div id='skills-main'>
         
          <div class='skills-list'>
          <div class='key-summary'>
                <div class='backend'>
                <div class='tool-card'><i class="devicon-react-original"></i>
                    <h1>React</h1>
                </div>
                    <div class='tool-card'><i class="devicon-nodejs-plain"></i>
                        <h1>Node</h1>
                    </div>
                
                    
            
                    <div class='tool-card'><i class="devicon-javascript-plain"></i>
                        <h1>Javascript</h1>
                    </div>
                    <div class='tool-card'><i class="devicon-cplusplus-plain"></i>
                        <h1>C++</h1>
                    </div>
                    <div class='tool-card'><i class="devicon-python-plain"></i>
                        <h1>Python</h1>
                    </div>
                    


                    <div id='bar'></div>

                    <div class='tool-card'>
                        <h1>Languages</h1>
                    </div>
                </div>
                <div class='frontend'> <div class='tool-card'><i class="cib-graphql"></i>
                        <h1 >Graphql</h1>
                    </div>
                <div id='aws' class='tool-card'><i class="devicon-amazonwebservices-plain-wordmark"></i>
                        <h1>AWS</h1>
                    </div>
                    <div class='tool-card'><i class="cib-material-design"></i>
                        <h1 id='material'>Material UI</h1>
                    </div>
                    <div class='tool-card'><i class="devicon-postgresql-plain"></i>
                        <h1>Postgres</h1>
                    </div>
                    <div class='tool-card'><i class="devicon-express-original"></i>
                        <h1>Express</h1>
                    </div>
                    
                   

                    <div id='bar'></div>

                    <div class='tool-card'>
                        <h1>Technology</h1>
                    </div>
                </div>



            </div>

          </div>


           
        </div>
        </div>
        
        /* <div class="title">
        
        <ThemeProvider theme={theme}>
        
        <Paper  variant="elevation" elevation={0}>
        <h1  class='offset' >Skills</h1>
        
        
        </Paper></ThemeProvider>

        </div>

        <div class='cards'>
        <ThemeProvider theme={theme}>
        
        <Paper className={classes.root } elevation={0}>
        <h1 class='header text-shadow'>Tools</h1>
        <div class='list'>
        <ul>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
        
        </ul>
           
        
        </div>
        </Paper>
        
        
        
        </ThemeProvider>
        <ThemeProvider theme={theme}>
        
        <Paper className={classes.root} elevation={0}>
        <h1 class='header text-shadow'>Languages</h1>
        <div class='list'>
        <ul>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
        
        </ul>
        </div>
        </Paper>
        
        
        
        </ThemeProvider>
        <ThemeProvider theme={theme}>
        
        <Paper className={classes.root} elevation={0}>
        <h1 class='header text-shadow'>Technologies</h1>
        <div class='list'>
        <ul>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
            <li class='list-item'>test2</li>
        
        </ul>
        </div>
        </Paper>
        
        
        
        </ThemeProvider>
        </div>
        */
    )
}