import React from 'react';
import 'animate.css/animate.min.css';

function Portfolio() {
  const projects = [
    // ... (same projects as before)
    {
      title: 'Project 1',
      description: 'A description of your first project.',
      technologies: 'React, JavaScript, HTML, CSS',
      demoLink: 'https://example.com/project1',
      sourceCodeLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'A description of your second project.',
      technologies: 'Node.js, Express, MongoDB',
      demoLink: 'https://example.com/project2',
      sourceCodeLink: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      technologies: 'Tech 3, Tech 4',
      demoLink: 'https://example.com/project3',
      sourceCodeLink: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4.',
      technologies: 'Tech 5, Tech 6',
      demoLink: 'https://example.com/project4',
      sourceCodeLink: 'https://github.com/yourusername/project4',
    },
  ];

  const education = [
    {
      institution: 'VIT Bhopal',
      degree: 'Bachelor of Science in Computer Science',
      year: '2021 - 2025',
    },
    {
      institution: 'St. MONTFORT SCHOOL ',
      degree: 'Matrix and Inter',
      year: '2017 - 2019',
    },
  ];

  const portfolioStyles = {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  };

  const headerStyles = {
    fontSize: '2em',
    color: '#ff6f61',
  };

  const subheaderStyles = {
    fontSize: '1.2em',
    color: '#3498db',
  };

  const sectionStyles = {
    backgroundColor: '#ffffff',
    padding: '20px',
    margin: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const linkStyles = {
    textDecoration: 'none',
    display: 'inline-block',
    padding: '8px 16px',
    margin: '5px',
    backgroundColor: '#27ae60',
    color: '#ffffff',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={portfolioStyles}>
      <header>
        <h1 className="animated bounceInLeft" style={headerStyles}>
          PRADYUMNA GARG
        </h1>
        <p className="animated bounceInRight" style={subheaderStyles}>
          Web Developer
        </p>
      </header>
      <section style={sectionStyles}>
        <h2>About Me</h2>
        <p>Provide a brief introduction about yourself and your skills.</p>
      </section>
      <section className="projects" style={sectionStyles}>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} style={sectionStyles}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies}</p>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="animated fadeInLeft"
              style={linkStyles}
            >
              Demo
            </a>
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="animated fadeInRight"
              style={linkStyles}
            >
              Source Code
            </a>
          </div>
        ))}
      </section>
      <section style={sectionStyles}>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} style={sectionStyles}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
