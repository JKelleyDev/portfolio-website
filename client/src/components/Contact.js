import React from 'react';
import '../styles/contact.css'
const Contact = () => (
  <section className="contact" id="contact">
    <h2 className="contact-title">Get in Touch</h2>
    <div className="contact-details">
      <p className="contact-item">
        <span className="contact-label">Email:</span>{' '}
        <a href="mailto:jordan.d.kelley1@gmail.com" className="contact-link">
          jordan.d.kelley1@gmail.com
        </a>
      </p>
      <p className="contact-item">
        <span className="contact-label">GitHub:</span>{' '}
        <a href="https://github.com/JKelleyDev" className="contact-link" target="_blank" rel="noopener noreferrer">
          JKelleyDev
        </a>
      </p>
      <p className="contact-item">
        <span className="contact-label">LinkedIn:</span>{' '}
        <a href="https://linkedin.com/in/jordan.kelley" className="contact-link" target="_blank" rel="noopener noreferrer">
          Jordan Kelley
        </a>
      </p>
    </div>
  </section>
);

export default Contact;