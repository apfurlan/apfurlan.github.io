import React from 'react';

const SocialIcons = () => {
  const socialLinks = [
    { name: 'github', url: 'https://github.com/yourusername' },
    { name: 'twitter', url: 'https://twitter.com/yourhandle' },
    { name: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
    { name: 'google-scholar', url: 'https://scholar.google.com/citations?user=yourid' },
    { name: 'email', url: 'mailto:your.email@example.com' }
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((social, index) => (
        <a 
          key={index} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`social-icon ${social.name}`}
          aria-label={social.name}
        >
          <i className={`fab fa-${social.name}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;