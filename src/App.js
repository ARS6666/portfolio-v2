import './App.css';
import Nav from '../src/components/navbar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const AppContent = () => {
  return (
    <>
      <div className='main-bg-color'>
        <Nav />
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
