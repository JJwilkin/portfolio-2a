import React, { Component, useRef, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'

import Unyte from './components/projects/unyte/Unyte'
import DelphX from './components/projects/delphx/DelphX'
import HomePage  from './views/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// const useMountEffect = (fun) => useEffect(fun, [])

function App() {
	// const myRef = useRef(null)

	// useMountEffect(() => scrollToRef(myRef)) // Scroll on mount
  return (
    <div className="App">
    <Router>
		<Navbar/>
    
      <Switch> 
            <Route  exact  path="/" component={HomePage} />
            <Route  exact  path="/skills" component={HomePage} />
            <Route  exact  path="/experience" component={HomePage} />
            <Route  exact  path="/contact" component={HomePage} />
            <Route path="/d2l" component={Unyte} />
            <Route path="/btnx" component={Unyte} />
            <Route path="/chowtime" component={Unyte} />
            <Route path="/unyte" component={Unyte} /> 
            <Route path="/delphx" component={DelphX} /> 
        </Switch>
    </Router>
          


      
      
      
    </div>
  );
}

export default App;
