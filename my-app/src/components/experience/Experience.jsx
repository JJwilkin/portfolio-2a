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
        <div class="title">
        
            <ThemeProvider theme={theme}>
            
            <Paper  className={classes.root } variant="elevation" elevation={0}>
            <h1  class='offset' >Experience</h1>
            
            
            </Paper></ThemeProvider>

        </div>
        <div class="entry">
            <div class="caption">
                <h1>Full Stack Developer</h1>
                <h3>Unyte Health Inc.</h3>
                <p>This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.</p>
            <div class="learn">
                <div class="more">
                    Learn More
                </div>
            </div>
            </div>
            <div class="card-image">
                <div id='unyte' class='card'></div>
                <div class="image">
                    
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
                </div>
            </div>
        </div>

        <div class="entry">
        <div class="card-image">
                <div id='unyte' class='card'></div>
                <div class="image">
                    
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
                </div>
            </div>
            <div class="caption">
                <h1>Full Stack Developer</h1>
                <h3>Unyte Health Inc.</h3>

                <p>This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.</p>
                <div class="learn">
                <div class="more">
                    Learn More
                </div>
            </div>
            </div>
        </div>
        <div class="entry">
            <div class="caption">
                <h1>Full Stack Developer</h1>
                <h3>Unyte Health Inc.</h3>

                <p>This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.This is a short description about what is is like working at Unyte.</p>
                <div class="learn">
                <div class="more">
                    Learn More
                </div>
            </div>
            </div>
            <div class="card-image">
                <div id='unyte' class='card'></div>
                <div class="image">
                    
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
                </div>
            </div>
        </div>
        {/* <div class="text" > <h2 >Its nice to meet you</h2></div> */}
        </div>
    )
}