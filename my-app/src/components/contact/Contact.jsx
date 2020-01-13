import React from 'react';
import styles from './Contact.scss';
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
        borderRadius: 1,
    
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
    background: 'linear-gradient(45deg, rgba(5,166,148,1) 0%, rgba(122,203,191,1) 100%)',
    color: 'white',
    height: 45,
    width:80,
    position:'relative',
    right: 50,
    
    padding: '0 30px',
    
    
  },

}));

export default function Contact ()  {
    const classes = useStyles();
    return (
        <div id="contact" class="section">
              <div class="title">
        
        {/* <ThemeProvider theme={theme}>
        
        <Paper  className={classes.root } variant="elevation" elevation={0}>
        <h1  class='offset' >Contact</h1>
        
        
        </Paper></ThemeProvider> */}
         <div class='main-subtitle'>
        <h1>Contact</h1>
        
        </div>

    </div>
    <div class='entry'>
    <div class='profile-picture'>
    <img src='./img/profile.jpg' alt='forgot-password first page'></img>
</div>
      <div class='stack-section'>
      <div class='horizontal-stack'>
        <div id='side-bar'></div>
        <div><h1>Interested in working together? Let's chat.</h1></div>
      </div>
      <div class='horizontal-stack'>
        <div class='icon-bar'>
          <span id='phone' class="iconify contact-item" data-icon="el:phone" data-inline="false"></span>
          <span id='email' class="iconify contact-item" data-icon="ic:sharp-email" data-inline="false"></span>
          <span id='linkedin' class="iconify contact-item" data-icon="fa-brands:linkedin-in" data-inline="false"></span>
        </div>
        <div class='contact-panel'>
          <h3>647-219-4678</h3>
          <h3>joshjeffreywilkinson@gmail.com</h3>
          <h3>linkedin.com/in/jjwilkin</h3>
        </div>
      </div>
      </div>
    </div>
        
        </div>
    )
}