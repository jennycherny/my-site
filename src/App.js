import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from './Components/Header/Header';
import Hello from './Components/Hello/Hello';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:lang" element={<MainApp />} />
        <Route path="/" element={<LanguageRedirect />} />
      </Routes>
    </Router>
  );
};


const LanguageRedirect = () => {
  const { i18n } = useTranslation();
  const savedLanguage = localStorage.getItem('language') || 'en';

  useEffect(() => {
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [savedLanguage, i18n]);

  return <Navigate to={`/${savedLanguage}`} replace />;
};

const MainApp = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'ru')) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    } else {
      i18n.changeLanguage('en');
    }
  }, [lang, i18n]);

  return (
      <div className="app">
        <Header />
        <Hello />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact"/>
      </div>
  );
};

export default App;
