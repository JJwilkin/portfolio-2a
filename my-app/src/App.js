import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Unyte from './components/projects/unyte/Unyte'
import './App.css';

function App() {

  const [showUnyte, setShowUnyte] = useState(false);
  return (
    <div className="App">
		<Navbar/>
    {showUnyte && <Unyte/>}
    {!showUnyte && <><Landing />
			<Skills/>
      <Experience />
      <Contact/> </>}
      
    </div>
  );
}

export default App;
