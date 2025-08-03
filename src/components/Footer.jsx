import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
        <div className="footer-credits">
          Powered by React and al-folio inspired design
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;