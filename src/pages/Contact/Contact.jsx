import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaMedium,
  FaGraduationCap,
} from 'react-icons/fa';
import { SiOrcid, SiResearchgate, SiGooglescholar } from 'react-icons/si';
import './Contact.css';

const links = [
  {
    label: 'E-mail',
    value: 'alexandrepfurlan@gmail.com',
    url: 'mailto:alexandrepfurlan@gmail.com',
    icon: <FaEnvelope />,
    color: '#D44638',
  },
  {
    label: 'LinkedIn',
    value: 'alexandrepfurlan',
    url: 'https://www.linkedin.com/in/alexandrepfurlan/',
    icon: <FaLinkedin />,
    color: '#0A66C2',
  },
  {
    label: 'ORCID',
    value: '0000-0002-9994-5383',
    url: 'https://orcid.org/0000-0002-9994-5383',
    icon: <SiOrcid />,
    color: '#A6CE39',
  },
  {
    label: 'ResearchGate',
    value: 'Alexandre-Furlan',
    url: 'https://www.researchgate.net/profile/Alexandre-Furlan',
    icon: <SiResearchgate />,
    color: '#00CCBB',
  },
  {
    label: 'Google Scholar',
    value: 'Google Scholar',
    url: 'https://scholar.google.com/',
    icon: <SiGooglescholar />,
    color: '#4285F4',
  },
  {
    label: 'GitHub',
    value: 'apfurlan',
    url: 'https://github.com/apfurlan',
    icon: <FaGithub />,
    color: '#24292e',
  },
  {
    label: 'GitLab',
    value: 'apfurlan',
    url: 'https://gitlab.com/apfurlan',
    icon: <FaGitlab />,
    color: '#FC6D26',
  },
  {
    label: 'Medium',
    value: 'apfurlan',
    url: 'https://apfurlan.medium.com/',
    icon: <FaMedium />,
    color: '#000000',
  },
  {
    label: 'CV Lattes',
    value: 'Lattes CNPq',
    url: 'http://lattes.cnpq.br/',
    icon: <FaGraduationCap />,
    color: '#005A9C',
  },
];

const Contact = () => (
  <section className="contact">
    <div className="container">
      <h2 className="section-title">Contact</h2>
      <p className="contact-subtitle">Feel free to reach out through any of the channels below.</p>
      <div className="contact-grid">
      {links.map(({ label, value, url, icon, color }) => (
        <a
          key={label}
          href={url}
          target={url.startsWith('mailto') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="contact-card"
        >
          <span className="contact-card-icon" style={{ color }}>
            {icon}
          </span>
          <div className="contact-card-info">
            <span className="contact-card-label">{label}</span>
            <span className="contact-card-value">{value}</span>
          </div>
        </a>
      ))}
      </div>
    </div>
  </section>
);

export default Contact;
