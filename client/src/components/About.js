import React from 'react';
import '../styles/header.css';
const About = () => (
  <section className="about" id="about">
    <h2 className="about-title">About Me</h2>
    <div className="about-content">
      <img src="/IMG_6372.jpeg" alt="Jordan Kelley" className="personal-photo" />
      <div className="about-text">
        <p>
          Hello! I’m Jordan Kelley, a passionate Software Engineering student and developer with a focus on creating innovative, user-friendly solutions. 
          I blend technical expertise with a keen eye for design to build projects that make an impact.
        </p>
        <p>
          When I’m not coding, you can find me exploring new technologies, refining my skills, or enjoying a good book. 
          My goal is to craft software that’s as elegant as it is functional.
        </p>
      </div>
    </div>
  </section>
);

export default About;