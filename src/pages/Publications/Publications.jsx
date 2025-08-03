import React from 'react';
import './Publications.css';
import '../../components/Footer/Footer'
import publications from '../../data/publications.json'


const Publications = () => {  

  return (
    <section className="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item">
              <div className="publication-header">
                <h3 className="publication-title">
                    <span className="publication-number">{publications.length - index}. &nbsp;</span>
                    {pub.title}</h3>
                <div className="publication-meta">
                  <span className="publication-authors">{pub.authors}</span>
                  <span className="publication-journal">{pub.journal}</span>
                </div>
              </div>

              <div className="publication-links">
                {pub.links.map((link, i) => (
                  <a key={i} href={link.url} className={`pub-link ${link.type}`}>
                    {link.type}
                  </a>
                ))}
              </div>
              
              {pub.abstract && (
                <div className="publication-abstract">
                  <p>{pub.abstract}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;