import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Hello from './Components/Hello/Hello';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const hashChangeHandler = () => {
      const hash = window.location.hash;
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', hashChangeHandler);
    hashChangeHandler();

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);


  return (
    <Router>
      <div className="app">
        <Header />
        <Hello />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact"/>
      </div>
    </Router>
  );
};

export default App;
