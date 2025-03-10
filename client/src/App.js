import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;