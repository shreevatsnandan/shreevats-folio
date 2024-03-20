import React from 'react';
import './Navbar-style.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop
      });
    }
  };

  return (
    <div>
      <div className='Navbar'>
        <div className='nav-logo'>
          <img src='./assets/nav-logo.png' alt='logo' />
        </div>
        <div className='nav-option'>
          <ul>
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About me</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('contact')}>Contact me</li>
          </ul>
        </div>
        <div className='nav-resume'>
        <a href="shreevats-resume.pdf"><button role="button">Resume</button></a>
        </div>
      </div>
    </div>
  );
}