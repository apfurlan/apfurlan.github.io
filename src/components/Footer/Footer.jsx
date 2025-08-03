import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-heading">A. P. Furlan</h3>
            <p className="footer-text">"If I have seen further it is by standing on the shoulders of giants"</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <p className="footer-text">
              <i className="fas fa-envelope"></i> alexandrepfurlan@gmail.com
            </p>
            <p className="footer-text">
              <i className="fas fa-map-marker-alt"></i> Belo Horizonte - Minas Gerais - Brazil
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} A. P. Furlan. All rights reserved (based on Ai-folio theme).
          </div>
          {/* <SocialIcons /> */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;