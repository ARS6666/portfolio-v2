import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Nav from '../src/components/navbar';
import Home from './components/home';
import Projects from './components/home/projects';
import Contact from './components/home/contact';
import Aboutme from './components/aboutme';
import MesZanajn from './components/worksamples/one';
import Ltdida from './components/worksamples/two';
const AppContent = () => {
  return (
    <>
      <Helmet>
        <title>Arshia Ghasemzade</title>
        <meta name="description" content="A portfolio showcasing my web development projects and skills." />
        <meta name="keywords" content="portfolio, web development, projects, skills" />
      </Helmet>
      <div className='main-bg-color scrollable'>
        <Nav />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/worksamples' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/worksample1' element={<MesZanajn />} />
          <Route path='/worksample2' element={<Ltdida />} />
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
