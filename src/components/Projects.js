import React from 'react';
import './Projects-style.css'; // Import CSS file
import ProjectsData from './Projects.json';

const Projects = () => {
  return (
    
    <div>
      <div className='prj-head'><h1>Projects</h1></div>
      <div className="project-container">
        {ProjectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.dp} alt={project.pname} />
            <div className="project-card-content">
              <h3>{project.pname}</h3>
              <p>Tech Stack:</p> <div className='ts'>{project.tstack}</div>
              <p>Description:</p> {project.pdesc}
              <div className='project-btn'>
              <a href={project.glink} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
                <a href={project.wlink} target="_blank" rel="noopener noreferrer"><button>Working Link</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
