import React from 'react';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';

import '../../App.css';
import './About.css';
import { useState, useEffect } from 'react';

import photo from './assets/photo.png'

const About = () => {
	
 	const [htmlContent, setHtmlContent] = useState('');
	useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/content/About/about-content.html')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(text => setHtmlContent(text))
      .catch(error => console.error('Error loading content:', error));
  	}, []);

	return (
		<section className="section" id="about">
			<div className="about-container">
				<div className="about-content">
					<span className="font-weight-normal"> Alexandre P. </span>
					<span className="font-weight-bold">  &nbsp;Furlan</span>
					<div className="profile-info">
						<p className="profile-title">PhD Physics | Researcher | Professor | Data Engineer</p>
					</div>
					<div className="body" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }} />
					</div>				
				{/* <div className="profile-image-container">
					<img
						src={photo}
						alt="Profile"
						className="profile-img-rect"
					/>
				</div> */}
			</div>
		</section>
	);
};

export default About;