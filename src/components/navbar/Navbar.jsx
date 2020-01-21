import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import'./Navbar.scss'
import { Link } from 'react-router-dom';


export default function Navbar () {

	

    return (
<nav class="navbar navbar-expand-md navbar-dark fixed-top">
	<Link to={'/'}>
	<a class="navbar-brand nav-item" href="#">Joshua Wilkinson</a>
	</Link>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span class="navbar-toggler-icon"></span> 
	</button>

	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item" >
				<Link to={'/'}>
				<a id='about' class="nav-link" href="#" onclick='setActiveTab("about")'>About</a>
				</Link>
			</li>
			<li class="nav-item">
			<Link to={'/skills'}>
				<a class="nav-link" href="#skills">Skills</a>
				</Link>
			</li>
			<li class="nav-item">
				<Link to={'/experience'}>
				<a class="nav-link" id='blue' href="#experience">Experience</a>
				</Link>
			</li>
			<li class="nav-item">
			<Link to={'/contact'}>
				<a class="nav-link" id='green' href="#contact">Contact</a>
				</Link>
			</li>
			<li class="nav-item">
			
				<a id='resume' class="nav-link" href="https://drive.google.com/file/d/1f5lPJTaMpOi9Q6nCVNVuqTgdO-L5jYsB/view?usp=sharing" target="_blank">Resume</a>
				
			</li>
		</ul>
	</div>
	
</nav>
    )
}