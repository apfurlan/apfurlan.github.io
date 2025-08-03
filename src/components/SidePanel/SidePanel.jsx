import { Link } from 'react-router-dom';
// import './SidePanel.css'; // Optional styling
import React, { useState } from 'react';


import {
    FaUser,
    FaProjectDiagram,
    FaBook,          // Publications
    FaAtom,           // Physics
    FaEnvelope,     // Contact
    FaGraduationCap, // Google Scholar
    FaGoogle,        // Google Scholar
    FaGithub,        // GitHub
    FaGitlab,        // GitLab
    FaMedium,        // Medium
    FaLinkedin,      // LinkedIn
    FaFilePdf        // CV Latex
} from 'react-icons/fa';

//import profilePhoto from './sections/AboutMe/assets/willphoto_withoutbackground.png';


const SidePanel = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const menuItems = [
        { name: 'About Me', icon: <FaUser className="menu-icon" /> },
        { name: 'Curriculum', icon: <FaUser className="menu-icon" /> },
        { name: 'Data Science', icon: <FaProjectDiagram className="menu-icon" /> },
        { name: 'Physics', icon: <FaAtom className="menu-icon" /> },
        { name: 'Publications', icon: <FaBook className="menu-icon" /> },
        { name: 'Contact', icon: <FaEnvelope className="menu-icon" /> },
    ];


    const externalLinks = [
        {
            name: 'Google Scholar',
            icon: <FaGraduationCap className="menu-icon" />,
            url: 'https://scholar.google.com/your-profile'
        },
        {
            name: 'GitHub',
            icon: <FaGithub className="menu-icon" />,
            url: 'https://github.com/apfurlan'
        },
        {
            name: 'GitLab',
            icon: <FaGitlab className="menu-icon" />,
            url: 'https://gitlab.com/apfurlan'
        },
        {
            name: 'Medium',
            icon: <FaMedium className="menu-icon" />,
            url: 'https://apfurlan.medium.com/'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="menu-icon" />,
            url: 'https://www.linkedin.com/in/alexandrepfurlan/'
        },
        {
            name: 'CV Lattes',
            icon: <FaGraduationCap className="menu-icon" />,
            url: 'http://lattes.cnpq.br/your-id'
        }
    ];

    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="side-panel">
            <nav>
                <ul className="menu-items">
                    {filteredItems.map((item) => (
                        <li
                            key={item.name}
                            className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
                            onClick={() => setActiveItem(item.name)}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            <span className="menu-text">{item.name}</span>
                        </li>

                    ))}

                </ul>
                <ul className="menu-items">
                    {externalLinks.map((item) => (
                        <li
                            key={item.name}
                            className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
                            onClick={() => setActiveItem(item.name)}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            <span className="menu-text">{item.name}</span>
                        </li>

                    ))}

                </ul>
            </nav>
        </div>
    );
};

export default SidePanel;


// // HomePage.js
// import React, { useState } from 'react';
// import './HomePage.css';
// import { FiSearch } from 'react-icons/fi';
// import ReactMarkdown from 'react-markdown';

// import { 
//   FaUser,
//   FaProjectDiagram,
//   FaReact,
//   FaFolder,
//   FaBook,          // Publications
//   FaAtom,          // Physics
//   FaEnvelope  ,     // Contact
//   FaCalendarAlt,
//   FaUsers,
//   FaComments,
//   FaCog,
//   FaSearch,
//   FaGraduationCap, 
//   FaGoogle,        // Google Scholar
//   FaGithub,        // GitHub
//   FaGitlab,        // GitLab
//   FaMedium,        // Medium
//   FaLinkedin,      // LinkedIn
//   FaFilePdf        // CV Latex
// } from 'react-icons/fa';


// import profilePhoto from './assets/willphoto_withoutbackground.png';

// const HomePage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeItem, setActiveItem] = useState('About Me');
//    const [searchQuery, setSearchQuery] = useState('');

//   const menuItems = [
//     { name: 'About Me', icon: <FaUser className="menu-icon" /> },
//     { name: 'Curriculum', icon: <FaUser className="menu-icon" /> },
//     { name: 'Data Science', icon: <FaProjectDiagram className="menu-icon" /> },
//     { name: 'Physics', icon: <FaAtom className="menu-icon" /> },
//     { name: 'Publications', icon: <FaBook className="menu-icon" /> },
//     { name: 'Contact', icon: <FaEnvelope className="menu-icon" /> } , 
//   ];


//   const filteredItems = menuItems.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//    const externalLinks = [
//     { 
//       name: 'Google Scholar', 
//       icon: <FaGoogle className="menu-icon" />,
//       url: 'https://scholar.google.com/your-profile'
//     },
//     { 
//       name: 'GitHub', 
//       icon: <FaGithub className="menu-icon" />,
//       url: 'https://github.com/apfurlan'
//     },
//     { 
//       name: 'GitLab', 
//       icon: <FaGitlab className="menu-icon" />,
//       url: 'https://gitlab.com/apfurlan'
//     },
//     { 
//       name: 'Medium', 
//       icon: <FaMedium className="menu-icon" />,
//       url: 'https://apfurlan.medium.com/'
//     },
//     { 
//       name: 'LinkedIn', 
//       icon: <FaLinkedin className="menu-icon" />,
//       url: 'https://www.linkedin.com/in/alexandrepfurlan/'
//     },
//     { 
//       name: 'CV Lattes', 
//       icon: <FaGraduationCap className="menu-icon" />, 
//       url: 'http://lattes.cnpq.br/your-id' 
//     }
//   ];



//    return (
//     <div className="homepage">
//       {/* Sidebar */}
//       <div className='sidebar'>
//         <div className="sidebar-header">
//           <div className="profile-section">
//             <div className="profile-photo">
//               <img 
//                 src={profilePhoto}
//                 alt="Profile" 
//                 className="circular-photo"
//               />
//             </div>
//             <div className="profile-info">
//               {/* <h2>Alexandre Furlan</h2> */}
//               {/* <p>Welcome back!</p> */}
//             </div>
//           </div>
//         </div>