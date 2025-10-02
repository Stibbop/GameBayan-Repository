import React, { useState } from 'react';
import './App.css';
import HomePage from './Home Page';
import AboutUs from './About Us';
import ExplorePage from './Explore Page';
import Games from './Games';
import DevelopersPage from './Developers Page';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUs onNavigate={setCurrentPage} />;
      case 'explore':
        return <ExplorePage onNavigate={setCurrentPage} />;
      case 'games':
        return <Games onNavigate={setCurrentPage} />;
      case 'developers':
        return <DevelopersPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
