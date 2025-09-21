import React, { useState } from 'react';

const DevelopersPage = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const developers = [
    {
      id: 1,
      name: "Ranida Games",
      logo: "https://pbs.twimg.com/profile_images/1042651911088828416/TYBaUlFK_400x400.jpg",
    },
    {
      id: 2,
      name: "Solitary Studios",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5EOMGmmcLnow0OUhKijmtnOMD4R2EogiGA&s",
    },
    {
      id: 3,
      name: "Spacezero Interactive",
      logo: "https://yt3.googleusercontent.com/IFqxB1tIc7395szE_O47buj6d9Dfgye5MZ3SqT1qsszAXqTtrktt-Fh4CrAxhCDNbFKE4Llw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 4,
      name: "Polychroma Games",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8TYvLFyehx-ucpootSjncx7nXQDBAhYHhQ&s",
    },
    {
      id: 5,
      name: "Sekai Project",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6a/Sekai_Project_logo.jpeg",
    },
    {
      id: 6,
      name: "Kendikorp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnu0eXswXyoW5BsZoYUTFsgbJwWJmbX8T65g&s", 
    }
  ];

  const developersPerPage = 6;
  const startIndex = (currentPage - 1) * developersPerPage;
  const currentDevelopers = developers.slice(startIndex, startIndex + developersPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">🎮</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  <span className="text-red-500">GAME</span>
                  <span className="text-blue-400">BAYAN</span>
                </h1>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => onNavigate('about')} 
                className="text-cyan-600 hover:text-cyan-500"
              >
                About Us
              </button>
              <button 
                onClick={() => onNavigate('games')} 
                className="text-cyan-600 hover:text-cyan-500"
              >
                Games
              </button>
              <button 
                onClick={() => onNavigate('explore')} 
                className="text-cyan-600 hover:text-cyan-500"
              >
                Explore
              </button>
              <button className="text-yellow-400 hover:text-yellow-300 font-medium underline">Developers</button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-cyan-400 mb-4">Meet the Creators!</h1>
          <p className="text-gray-300 text-lg mb-8">Discover the teams and talents behind your favorite Filipino games</p>
          <p className="text-gray-400 text-base">Developers in the Website</p>
        </div>

        {/* Developers Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentDevelopers.map((developer) => (
              <div key={developer.id} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                {/* Developer Logo */}
                <div className="mb-4">
                  <img 
                    src={developer.logo}
                    alt={developer.name}
                    className="w-32 h-32 mx-auto rounded-lg object-cover bg-white"
                  />
                </div>
                
                {/* Developer Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {developer.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {developer.description}
                  </p>
                </div>
                
                {/* Learn More Button */}
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          <button 
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === 1 
                ? 'text-gray-500 cursor-not-allowed' 
                : 'text-white hover:bg-gray-700'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous</span>
          </button>
          
          <div className="text-white">
            <span>Page {currentPage} of {totalPages}</span>
          </div>
          
          <button 
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === totalPages 
                ? 'text-gray-500 cursor-not-allowed' 
                : 'text-white hover:bg-gray-700'
            }`}
          >
            <span>Next</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

        {/* Footer */}
      <footer className="bg-black py-12  border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* GameBayan Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">🎮</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="text-red-500">GAME</span>
                    <span className="text-blue-400">BAYAN</span>
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                GameBayan is a web-based platform designed to promote and feature video games
                proudly made by Filipino game developers. The web platform totally made indie and
                accessible "Steam-style" catalog so games can easily discover, explore, and support homegrown talent.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Explore</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Developers</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">+639876543021</p>
                <p className="text-gray-400">GameBayan@gmail.com</p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4 justify-center">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-white text-sm">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <span className="text-white text-sm">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-white text-sm">@</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 GameBayan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DevelopersPage;
