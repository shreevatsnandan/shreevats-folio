import React from 'react';
import './Landingp-style.css';

export default function Landingp() {
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
            <div className='landingp'>
                <div className='ldggp-head'>
                    Hey! I am <b>Shreevats Nandan</b>
                </div>
                <div className='ldgp-sub'>
                    I'm a <b>web developer</b> who is passionate about <b>front-end development</b>. Currently, building web apps with <b>reactjs</b>
                    . Enthusiastic about diving into <b>new technologies </b>and expanding my skill set.
                </div>
                <div className='ldgp-btn-grp'>
                <a href="shreevats-resume.pdf"><button role="button">Resume</button></a>
                    <button classname="btn1" role="button" onClick={() => scrollToSection('contact')}>Contact me</button>
                </div>

            </div>
        </div>
            )
}
