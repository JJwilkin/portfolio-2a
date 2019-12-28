import React from 'react';
import styles from './Experience.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { style } from '@material-ui/system';
import { StylesContext } from '@material-ui/styles';

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
        height: 40,
        width: 70,
        position:'relative',
        right: 70,
        
        padding: '0 30px',
        boxShadow: '0 7px 5px 2px rgba(255, 105, 135,0.3)',
      },
      
    },
  },
});



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
     position: 'relative',
     padding:'0 20px 20px 20px',
     
     
     right:30,
        margin: theme.spacing(3),
        minWidth: 250,
        maxWidth: 350,
        width:'30%',
        minHeight: 300,
      
    },

  }));

export default function Landing ()  {
    const classes = useStyles();
    return (
        <div id="experience" class="skills">
        <div class="title">
        
        <ThemeProvider theme={theme}>
        
        <Paper  variant="elevation" elevation={0}>
        <h1  class='offset text-shadow' >Skills</h1>
        
        
        </Paper></ThemeProvider>

        </div>

        <div class='cards'>
        <ThemeProvider theme={theme}>
        
        <Paper className={classes.root } elevation={0}>
        <h1 class='header text-shadow'>Tools</h1>
        <div class='list'>

        </div>
        </Paper>
        
        
        
        </ThemeProvider>
        <ThemeProvider theme={theme}>
        
        <Paper className={classes.root} elevation={0}>
        <h1 class='header text-shadow'>Languages</h1>
        <div class='list'>

        </div>
        </Paper>
        
        
        
        </ThemeProvider>
        <ThemeProvider theme={theme}>
        
        <Paper className={classes.root} elevation={0}>
        <h1 class='header text-shadow'>Technologies</h1>
        <div class='list'>

        </div>
        </Paper>
        
        
        
        </ThemeProvider>
        </div>
       
        {/* <div class="text" > <h2 >Its nice to meet you</h2></div> */}
        </div>
    )
}