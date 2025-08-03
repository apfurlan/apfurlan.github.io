import React from 'react';
// import SocialIcons from '../SocialIcons';
// import '../../App.css';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'physics', label: 'Physics' },
    { id: 'data', label: 'Data' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'contact', label: 'Contact' }
];

  return (
     <header className="header">
      <div className="header-container">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;