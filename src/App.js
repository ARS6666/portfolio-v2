import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../src/components/navbar';
import Home from './components/home';
import Projects from './components/home/projects';
import Contact from './components/home/contact';
import Aboutme from './components/aboutme';

const AppContent = () => {
  return (
    <>
      <div className='main-bg-color scrollable'>
        <Nav />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/worksamples' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<Aboutme />} />
        </Routes>
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
