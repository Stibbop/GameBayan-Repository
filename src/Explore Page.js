import React, { useState } from 'react';

const ExplorePage = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const headlines = [
    {
      id: 1,
      image: "https://www.gadgetpilipinas.net/wp-content/uploads/2025/07/Philippine-Game-Dev-Expo-PGDX-2025.jpg",
      title: "Philippine GameDev Expo 2025: Celebrating Filipino Gaming with Tournaments, Talent, and Community Engagement"
    },
    {
      id: 2,
      image: "https://contents.spin.ph/image/resize/image/2023/08/26/spinlifenew-banner-1692979509.webp",
      title: "These Pinoy Indie Games prove that gaming can also educate audiences"
    },
    {
      id: 3,
      image: "https://od2-image-api.abs-cbn.com/prod/editorImage/1722646237589indie-games1.jpg",
      title: "LIST: Indie games that showcase Filipino culture"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % headlines.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + headlines.length) % headlines.length);
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="bg-gray-800 shadow-lg relative">
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
              <button className="text-yellow-400 hover:text-yellow-300 font-medium underline">Explore</button>
              <button 
                onClick={() => onNavigate('developers')} 
                className="text-cyan-600 hover:text-cyan-500"
              >
                Developers
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-700 shadow-lg z-50">
              <div className="container mx-auto px-6 py-4">
                <div className="bg-black rounded-lg p-4 space-y-3">
                  <button 
                    onClick={() => {
                      onNavigate('about');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">About Us</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      onNavigate('games');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <span className="font-medium">Games</span>
                  </button>
                  
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-yellow-400 w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="font-medium">Explore</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      onNavigate('developers');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">Developers</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-cyan-400 mb-4">Explore GameBayan Today!</h1>
          <p className="text-gray-300 text-lg mb-8">Stay updated on what's new and hot</p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Search something..." 
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Headlines Carousel Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Headliners</h2>
          <div className="relative">
            {/* Carousel Container */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={headlines[currentSlide].image}
                  alt={headlines[currentSlide].title}
                  className="w-full h-96 object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {headlines[currentSlide].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {headlines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Random Blogs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Random Blogs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Horror Games Blog */}
            <div>
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <img 
                  src="https://contents.spin.ph/image/resize/image/2025/02/08/thin-threads-hapunan-horror-banner-1739001549.webp" 
                  alt="Filipino Horror Games" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white mb-3">
                  These Filipino horror games are so scary, content creators are losing it!
                </h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Read More
                </button>
              </div>
            </div>

            {/* Silent Still Blog */}
            <div>
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <img 
                  src="https://scontent.fcrk2-4.fna.fbcdn.net/v/t39.30808-6/518311501_586603811190855_5567820748489506115_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEi1OTklNx7SoZrsAKLJ_8hJHHR0rkArLwkcdHSuQCsvFw4jYrhtcScGU0PZbrwcjp_Nug1eRUFf0E81YNJeKzk&_nc_ohc=oz8YtWvuk4kQ7kNvwHKxXtv&_nc_oc=Adk-hg7e4R_ucl-Opdi3JlNWF3YwddmX-_9ZXS3Zmfa_VlSqiyRJLBRv-b6eFN9XrqU&_nc_zt=23&_nc_ht=scontent.fcrk2-4.fna&_nc_gid=SrUiHyXSsJtH0Egvsl2mZw&oh=00_AfYtsAJUnNAyts597FEEsIR5UoxVCI0vsilRKNWUAPrdGw&oe=68D58677" 
                  alt="Silent Still 2" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white mb-3">
                  Silent Still 2 is out now on itch.io
                </h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* More Button */}
          <div className="text-center mt-8">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg text-lg transition-colors">
              More
            </button>
          </div>
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

export default ExplorePage;
