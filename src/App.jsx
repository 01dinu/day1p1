import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <HeroSection />
      {/* Add other sections and routes here */}
    </div>
  </Router>
  );
};

export default App;