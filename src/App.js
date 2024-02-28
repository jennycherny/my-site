import Header from './Components/Header/Header';
import Hello from './Components/Hello/Hello';
import About from './Components/About/About';

import './App.css';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header/>
      <Hello/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
