import React from 'react';
import '../styles/header.css';

const Header = () => (
  <header className="header">
    <nav className="nav-bar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="header-content">
      <img src="/IMG_6372.jpeg" alt="Jordan Kelley" className="profile-photo" />
      <h1 className="typing-effect">Welcome to Jordan Kelley's Portfolio</h1>
      <p>Software Engineering Student | Developer</p>
    </div>
  </header>
);

export default Header;