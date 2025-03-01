import './App.css';
import Nav from '../src/components/navbar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/home/hero';
import Skills from './components/home/skills';

const AppContent = () => {
  return (
    <>
      <div className='main-bg-color scrollable'>
        <Nav />
        <Hero />
        <Skills/>
        {/* <Routes>
          <Route path='' element={<Home theme={theme} />} />
        </Routes> */}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
