import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import Experience from './components/experience/Experience'
import './App.css';

function App() {
  return (
    <div className="App">
		<Navbar/>
      <Landing />
			<Experience/>
    </div>
  );
}

export default App;
