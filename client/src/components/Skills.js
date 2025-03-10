import React from 'react';
import '../styles/skills.css'; 
const Skills = () => (
  <section className="skills" id="skills">
    <h2 className="skills-title">Technical Expertise</h2>
    <div className="skills-grid">
      <div className="skill-category">
        <h3 className="category-title">Languages</h3>
        <ul className="skill-list">
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3 className="category-title">Tools</h3>
        <ul className="skill-list">
          <li>Docker</li>
          <li>GitHub</li>
          <li>JUnit</li>
          <li>Node.js</li>
          <li>React</li>
          <li>MySQL</li>
          <li>Socket.IO</li>
          <li>Vercel</li>
          <li>Azure</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3 className="category-title">Competencies</h3>
        <ul className="skill-list">
          <li>Full-Stack Development</li>
          <li>Cloud Deployment</li>
          <li>IoT Systems</li>
          <li>Test-Driven Development (TDD)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;