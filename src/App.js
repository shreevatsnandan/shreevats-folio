import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landingp from './components/Landingp';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import {Contact} from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Landingp /></div>
      <div id="about"><Aboutme /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default App;