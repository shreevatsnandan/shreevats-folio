import React from 'react';
import './Aboutme-style.css';

export default function Aboutme() {
    return (
        <div>
            <div className='aboutme'>
                <div className='abtme-txt'>
                    <div className='abtme-head'><h1>About me:</h1></div>
                    <div className='abtme-sub'>
              I am a final-year student pursuing a B.Tech in Computer Science at Pillai College of Engineering, affiliated with Mumbai University. Currently, I'm deeply involved in front-end web development. What truly drives my passion in programming is the problem-solving aspect and the thrill of mastering new technologies. There's nothing quite like the satisfaction of resolving those pesky coding errors. My primary stack includes <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b>, with familiarity in <b>MySQL</b>, <b>Bootstrap</b>, and <b>Node.js</b>. I'm constantly seeking to expand my knowledge base and am particularly eager to delve deeper into front-end engineering.<br/><br/>Outside of coding, I enjoy chess, delving into world affairs, and staying fit. I'm passionate about expanding my knowledge and meeting new people. Recently, I've been reintegrating jogging into my routine, finding it invigorating.</div>
   <div className='abtme-stack'>
    Tech Stack: <b>HTML</b> <b>CSS</b> <b>JavaScript</b> <b>React</b> <b>Node.js</b> <b>MySQL</b> <b>Bootstrap</b>
   </div>
                </div>
                <div className='abtme-img'><img src='.\assets\abtmeimg.png' alt='logo'></img></div>
                </div>
            </div>
    );
}
