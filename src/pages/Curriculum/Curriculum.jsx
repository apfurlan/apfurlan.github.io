import React from 'react';
import './Curriculum.css';

const experience = [
  {
    period: 'Dec 2025 – Present',
    role: 'Data Platform Specialist – Data, MLOps and LLMOps',
    company: 'Cielo',
    items: ['MLOps Process Development and Implementation Lead'],
  },
  {
    period: 'Apr 2023 – Present',
    role: 'Tech Lead · Data Platform Engineer',
    company: 'BEES – AB InBev',
    items: [
      'Mentored and trained new team members, fostering technical and professional growth',
      'Developed custom automation framework integrating Jira with Terraform for seamless deployments',
      'Spearheaded end-to-end development of secure data-sharing platform (Delta Sharing) between ABI and external partners',
      'Designed scalable and compliant data exchange solution architecture',
      'Implemented monitoring and alerting systems (Slack/email) for real-time issue detection',
    ],
  },
  {
    period: 'Apr 2023 – Apr 2024',
    role: 'Data Platform Engineer',
    company: 'BEES – AB InBev',
    items: [
      'Led automation and Databricks Delta-sharing initiatives from design to implementation',
      'Developed automation framework integrating ticketing systems with infrastructure-as-code',
      'Connected multiple databases, APIs, and Databricks for data exchange platform',
    ],
  },
  {
    period: 'Jun 2022 – Apr 2023',
    role: 'Platform Engineer',
    company: 'Z-Tech Brasil – AB InBev',
    items: [
      'Designed, provisioned, and monitored cloud infrastructure for global engineering and analytics teams',
      'Automated cloud resource provisioning (AKS, Azure VMs, Databricks) using Terraform',
      'Developed Airflow pipelines to track platform metrics (costs, access logs, workloads)',
      'Provisioned Databricks workspaces, optimized compute resources, and enforced access policies',
    ],
  },
  {
    period: 'Nov 2021 – Jun 2022',
    role: 'Data Engineer',
    company: 'A3Data',
    items: [
      'Configuration of AWS services (IAM, EC2, S3, EMR, EKS)',
      'Infrastructure development as code via Terraform',
      'Extraction and cleaning of on-premises data via Spark',
      'Orchestration of Spark jobs via Airflow',
      'Kubernetes cluster configuration and service delivery',
    ],
  },
  {
    period: 'Apr 2021 – Nov 2021',
    role: 'Data Analyst',
    company: 'A3Data',
    items: [
      'Requirements prospecting with customers',
      'Understanding and implementation of business rules',
      'Development of Power BI dashboards',
    ],
  },
];

const academic = [
  {
    period: 'Apr 2017 – Apr 2021',
    role: 'Postdoctoral Research Scientist',
    company: 'Universidade Federal de Minas Gerais',
    items: [],
  },
  {
    period: 'Mar 2016 – Nov 2016',
    role: 'Visiting PhD Student',
    company: 'CSIC, Madrid, Spain',
    items: [],
  },
];

const education = [
  { period: '2013 – 2017', degree: 'Doctor of Philosophy (Ph.D.), Physics', institution: 'Universidade Federal do Rio Grande do Sul' },
  { period: '2011 – 2013', degree: "Master's Degree in Physics", institution: 'Universidade Federal do Rio Grande do Sul' },
  { period: '2005 – 2010', degree: "Bachelor's and Licentiate Degree in Physics", institution: 'Universidade Federal do Paraná' },
];

const skills = [
  { label: 'Databricks', level: 6 },
  { label: 'Python · PySpark · Bash · C++', level: 6 },
  { label: 'Cloud (AWS · Azure)', level: 5 },
  { label: 'DevOps (Terraform · CI/CD)', level: 5 },
  { label: 'English', level: 4 },
  { label: 'Spanish', level: 3 },
];

const TimelineItem = ({ period, role, company, items }) => (
  <div className="cv-timeline-item">
    <div className="cv-timeline-period">{period}</div>
    <div className="cv-timeline-body">
      <div className="cv-timeline-role">{role}</div>
      <div className="cv-timeline-company">{company}</div>
      {items.length > 0 && (
        <ul className="cv-timeline-list">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </div>
  </div>
);

const Curriculum = () => (
  <section className="curriculum">
    <div className="container">
      <h2 className="section-title">Curriculum Vitae</h2>

      <div className="cv-layout">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="cv-sidebar">
          <div className="cv-profile-name">Alexandre P. Furlan</div>
          <div className="cv-profile-title">Data Platform Engineer</div>

          <div className="cv-contact-list">
            <span>📍 Belo Horizonte – MG – Brazil</span>
            <span>📧 <a href="mailto:alexandrepfurlan@gmail.com">alexandrepfurlan@gmail.com</a></span>
            <span>🔗 <a href="https://www.linkedin.com/in/alexandrepfurlan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/alexandrepfurlan</a></span>
            <span>🐙 <a href="https://github.com/apfurlan" target="_blank" rel="noopener noreferrer">github.com/apfurlan</a></span>
          </div>

          <div className="cv-about">
            Results-driven Data Engineer and former Physicist with a strong background in data modeling,
            distributed systems, and cloud infrastructure. Leveraging a decade of experience in
            computational physics and data engineering, I design and implement robust data platforms
            that drive business value.
          </div>

          <div className="cv-skills-section">
            <div className="cv-skills-title">Technical Skills</div>
            {skills.map(({ label, level }) => (
              <div key={label} className="cv-skill">
                <div className="cv-skill-label">{label}</div>
                <div className="cv-skill-bar">
                  {[1,2,3,4,5,6].map(n => (
                    <div key={n} className={`cv-skill-dot ${n <= level ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
            ))}
            <div className="cv-skills-note">Scale: 0 (basic) – 6 (expert)</div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="cv-main">
          <div className="cv-section">
            <h3 className="cv-section-title">Professional Summary</h3>
            <p className="cv-summary">
              Data Engineer and Physicist with a PhD, I transitioned from academic research in
              statistical and computational physics to data engineering. I currently work as a
              Tech Lead at BEES (AB InBev), where I lead the development of scalable, automated,
              and governed data platforms, building robust solutions for data integration and sharing.
              My experience spans from business analysis and dashboard creation to building and
              automating cloud infrastructure (AWS/Azure) using Terraform, Airflow, Kubernetes,
              and Databricks, always aiming to bridge scientific rigor with high-performance engineering.
            </p>
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Professional Experience</h3>
            {experience.map((item, i) => <TimelineItem key={i} {...item} />)}
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Academic Experience</h3>
            {academic.map((item, i) => <TimelineItem key={i} {...item} />)}
          </div>

          <div className="cv-section">
            <h3 className="cv-section-title">Education</h3>
            {education.map(({ period, degree, institution }, i) => (
              <div key={i} className="cv-timeline-item">
                <div className="cv-timeline-period">{period}</div>
                <div className="cv-timeline-body">
                  <div className="cv-timeline-role">{degree}</div>
                  <div className="cv-timeline-company">{institution}</div>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  </section>
);

export default Curriculum;
