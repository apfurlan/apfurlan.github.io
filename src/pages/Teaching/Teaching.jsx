import React from 'react';
import { FaGithub } from 'react-icons/fa';
import MechanicsSVG from './MechanicsSVG';
import './Teaching.css';

const courses = [
  {
    title: 'Fundamentos de Mecânica',
    subtitle: 'UFMG – Engenharias',
    description: 'Cinemática, dinâmica, leis de Newton, trabalho e energia, quantidade de movimento e sistemas oscilatórios.',
    tags: ['Mecânica Clássica', 'Cinemática', 'Dinâmica', 'Oscilações'],
    image: <MechanicsSVG />,
    repo: 'https://github.com/apfurlan/notas-fisica-mecanica',
  },
];

const Teaching = () => (
  <section className="teaching">
    <div className="container">
      <h2 className="section-title">Teaching</h2>
      <div className="teaching-grid">
        {courses.map((course, i) => (
          <div key={i} className="teaching-card">
            <div className="teaching-card-image">
              {course.image}
            </div>
            <div className="teaching-card-content">
              <h3 className="teaching-card-title">{course.title}</h3>
              <span className="teaching-card-subtitle">{course.subtitle}</span>
              <p className="teaching-card-description">{course.description}</p>
              <div className="teaching-card-tags">
                {course.tags.map((tag, j) => (
                  <span key={j} className="teaching-tag">{tag}</span>
                ))}
              </div>
              {course.repo && (
                <a href={course.repo} className="teaching-card-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Notas de Aula
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Teaching;
