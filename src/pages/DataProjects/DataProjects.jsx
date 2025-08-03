import React from 'react';

import './DataProjects.css';
import projectsData from '../../data/projects.json';

console.log('[Projects.jsx] Imported data:', projectsData)

const DataProjects = () => {
  console.log('[Projects.jsx] Imported data:', projectsData)
  return (
    <div className="projects-page">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        {/* <p className="projects-subtitle">A showcase of my technical projects and research work.</p> */}
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  <i className="fas fa-external-link-alt"></i> View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataProjects;