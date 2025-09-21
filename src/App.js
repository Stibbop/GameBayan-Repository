import React, { useState } from 'react';
import './App.css';
import AboutUs from './About Us';
import ExplorePage from './Explore Page';
import Games from './Games';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutUs onNavigate={setCurrentPage} />;
      case 'explore':
        return <ExplorePage onNavigate={setCurrentPage} />;
      case 'games':
        return <Games onNavigate={setCurrentPage} />;
      default:
        return <AboutUs onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
