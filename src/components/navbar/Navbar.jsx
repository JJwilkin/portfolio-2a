import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import'./Navbar.scss'

export default function Navbar () {

	

    return (
<nav class="navbar navbar-expand-md navbar-dark fixed-top">
	<a class="navbar-brand nav-item" href="#">Joshua Wilkinson</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span class="navbar-toggler-icon"></span> 
	</button>

	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item" >
				<a class="nav-link" href="#" onclick='setActiveTab("about")'>About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#skills">Skills</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id='blue' href="#experience">Experience</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id='green' href="#contact">Contact</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="https://drive.google.com/file/d/1iKhlN3r6mirEqOJ_A6Q7h-Ua9d7kCvUn/view?usp=sharing" target="_blank">Resume</a>
			</li>
		</ul>
	</div>
	
</nav>
    )
}