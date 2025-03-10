import React from 'react';
import '../styles/projects.css'
const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="projects-title">Featured Projects</h2>
    <div className="projects-grid">
      {/* Project 1: Cloud Hosted Trello Board */}
      <div className="project-item">
        <h3 className="project-title">Cloud Hosted Trello Board</h3>
        <p className="project-description">
          A full-stack task management app hosted on Azure, featuring real-time collaboration and drag-and-drop functionality.
        </p>
        <div className="project-media">
          {/* Replace with your actual video or image */}
          <video controls className="project-video" src="path-to-trello-demo.mp4" poster="path-to-trello-poster.jpg">
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-skills">
          <h4>Technologies:</h4>
          <ul>
            <li>Node.js</li>
            <li>React</li>
            <li>MySQL</li>
            <li>Azure</li>
            <li>Socket.IO</li>
            <li>DnD-kit</li>
          </ul>
        </div>
        <div className="project-links">
          <a href="https://github.com/JKelleyDev/trello-board" target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
          <a href="https://trello-board.azurewebsites.net" target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        </div>
      </div>

      {/* Project 2: WildFire Detection LoRa Mesh System */}
      <div className="project-item">
        <h3 className="project-title">WildFire Detection LoRa Mesh System</h3>
        <p className="project-description">
          An IoT-based fire detection system using ESP32 nodes and LoRa mesh for real-time alerts.
        </p>
        <div className="project-media">
          {/* Replace with your actual image or video */}
          <img src="path-to-wildfire-gui.jpg" alt="WildFire Detection GUI" className="project-image" />
        </div>
        <div className="project-skills">
          <h4>Technologies:</h4>
          <ul>
            <li>C++</li>
            <li>Heltec ESP32</li>
            <li>LoRa</li>
          </ul>
        </div>
        <div className="project-links">
          <a href="https://github.com/JKelleyDev/wildfire-detection" target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
        </div>
      </div>

      {/* Project 3: Personal Portfolio */}
      <div className="project-item">
        <h3 className="project-title">Personal Portfolio</h3>
        <p className="project-description">
          A scalable, static portfolio site showcasing my work, deployed on Vercel.
        </p>
        <div className="project-media">
          {/* Replace with your actual image */}
          <img src="path-to-portfolio-gui.jpg" alt="Portfolio GUI" className="project-image" />
        </div>
        <div className="project-skills">
          <h4>Technologies:</h4>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Vercel</li>
          </ul>
        </div>
        <div className="project-links">
          <a href="https://github.com/JKelleyDev/portfolio" target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
          <a href="https://your-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;