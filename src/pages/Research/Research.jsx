import React from 'react';
import './Research.css';
import research from '../../data/research.json'

// import configImage from './config.png'
// import configImage2 from './opxtau_1.png'
// import configImage3 from './potencial.png'
// import configImage4 from './tunelamento.png'
// import Latex from 'react-latex';

const Research = () => {

  return (
    <section className="research">
      <div className="container">
        <h2 className="section-title">Research Interest</h2>
        
        <div className="research-list">
          {research.map((problem, index) => (
            <div key={index} className="research-item">
              <div className="research-content">
                <div className="research-text">
                  <h3 className="research-title">
                    <span className=" umber">{index + 1}.</span>
                    {problem.title}
                  </h3>
                  <p className="research-description">{problem.description}</p> 
                  <div className="research-tags">
                    {problem.tags.map((tag, i) => (
                      <span key={i} className="research-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="research-figure">
                  <img 
                    src={problem.figure} 
                    alt={problem.title} 
                    className="research-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;