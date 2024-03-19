import React from 'react';
import './Footer-style.css';

export default function Footer() {
  return (
    <div>
      <div className='footer'>
      <div className='nav-logo'>
          <img src='./assets/nav-logo.png' alt='web'/>
        </div>
        <div className='social-apps'><p>Connect with me:</p>
        <a href="https://github.com/shreevatsnandan"><img src='./assets/gitlogo.png' alt='web'/></a>
        <a href="https://leetcode.com/shreevatsnandan/"><img src='./assets/leetcodelogo.png' alt='web'/></a>
         <a href="https://www.linkedin.com/in/shreevats-nandan/"><img src='./assets/linkedinlogo.png' alt='web'/></a>
        </div>
      </div>
    </div>
  )
}
