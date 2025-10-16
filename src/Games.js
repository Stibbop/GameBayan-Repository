import React, { useState } from 'react';

const Games = ({ onNavigate }) => {
  const [featuredSlide, setFeaturedSlide] = useState(0);
  const [newArrivalSlide, setNewArrivalSlide] = useState(0);
  const [categorySlide, setCategorySlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredGames = [
    {
      id: 1,
      title: "Jeepney Simulator",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2489990/capsule_616x353.jpg?t=1694866586",
      description: "Embrace your inner jeepney driver! Pick up passengers, calculate change, and weave through traffic in this Filipino-made driving game. Feed your family, customize your jeepneys, and unlock more rides! Don't forget to bring your towel!"
    },
    {
      id: 2,
      title: "Silent Still",
      image: "https://img.itch.zone/aW1hZ2UvMzYwMjQyMi8yMTQ0MzY5Mi5qcGc=/original/EF9AxN.jpg", 
      description: "Silent Still is a first-person psychological horror game that delves into the terrifying experience of sleep paralysis and nightmares. You will feel the true horror that sleep paralysis can bring and the overwhelming fear it instills in a person."
    }
  ];

  const newArrivals = [
    {
      id: 1,
      title: "Lola's Lutong Bahay",
      image: "https://cdna.artstation.com/p/assets/images/images/066/281/302/large/jamier-prime-lola-s-lutong-bahay-title-1.jpg?1692539397"
    },
    {
      id: 2,
      title: "Until Then",
      image: "https://www.rappler.com/tachyon/2024/02/until-then-ShoulderLean.jpg"
    },
    {
      id: 3,
      title: "Agnostiko Origins",
      image: "https://images.eshop-prices.com/games/14782/480w.jpeg"
    }
  ];

  const categories = [
    {
      id: 1,
      name: "MOBILE GAMES",
      image: "https://www.businessofapps.com/wp-content/uploads/2020/06/app-store-games.jpg",
      color: "from-red-600 to-red-800"
    },
    {
      id: 2,
      name: "RPG GAMES", 
      image: "https://nolisoli.ph/wp-content/uploads/2018/12/mamayani.png",
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      name: "FIGHTING GAMES",
      image: "https://sm.ign.com/ign_ap/screenshot/default/sinag-eventtemplate1-withlogo_bmsg.png", 
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 4,
      name: "STRATEGY GAMES",
      image: "https://i0.wp.com/gamingph.com/wp-content/uploads/2025/05/cHm0OO.png?ssl=1",
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  const nextFeatured = () => {
    setFeaturedSlide((prev) => (prev + 1) % featuredGames.length);
  };

  const prevFeatured = () => {
    setFeaturedSlide((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  const nextNewArrival = () => {
    setNewArrivalSlide((prev) => Math.min(prev + 1, newArrivals.length - 3));
  };

  const prevNewArrival = () => {
    setNewArrivalSlide((prev) => Math.max(prev - 1, 0));
  };

  const nextCategory = () => {
    setCategorySlide((prev) => Math.min(prev + 1, categories.length - 4));
  };

  const prevCategory = () => {
    setCategorySlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="bg-gray-800 shadow-lg relative">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">🎮</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  <span className="text-red-500">GAME</span>
                  <span className="text-blue-400">BAYAN</span>
                </h1>
              </div>
            </button>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => onNavigate('about')} 
                className="text-cyan-600 hover:text-cyan-500"
              >
                About Us
              </button>
              <button className="text-yellow-400 hover:text-yellow-300 font-medium underline">Games</button>
              <button 
                onClick={() => onNavigate('explore')} 
                className="text-cyan-600 hover:text-cyan-500"
              >
                Explore
              </button>
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-yellow-400 w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <span className="font-medium">Games</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      onNavigate('explore');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
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
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105 cursor-default">Discover Filipino Games!</h1>
          </div>
          
        </div>

        {/* Featured & Recommended Section with Search Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 transform hover:scale-105">Featured & Recommended</h2>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center bg-gray-700 hover:bg-gray-600 rounded-lg px-4 py-2 transition-all duration-300 cursor-pointer transform hover:scale-105">
                <span className="text-gray-300 mr-2">All</span>
                <svg className="w-4 h-4 text-gray-300 transition-transform duration-300 hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="max-w-md relative">
                <input 
                  type="text" 
                  placeholder="Search something..." 
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 transition-all duration-300 hover:bg-gray-600 transform hover:scale-105"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Featured Game Image */}
                <div className="relative">
                  <img 
                    src={featuredGames[featuredSlide].image}
                    alt={featuredGames[featuredSlide].title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {featuredSlide === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                    </div>
                  )}
                </div>
                
                {/* Game Info */}
                <div className="flex flex-col justify-center items-center text-center group">
                  <h3 className="text-3xl font-bold text-white mb-4 transition-all duration-300 transform group-hover:scale-105 group-hover:text-cyan-400">
                    {featuredGames[featuredSlide].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed transition-all duration-300 group-hover:text-white">
                    {featuredGames[featuredSlide].description}
                  </p>
                  <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 active:scale-95">
                    DOWNLOAD
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows for Featured */}
            <button 
              onClick={prevFeatured}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
            >
              <svg className="w-6 h-6 transition-transform duration-300 hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextFeatured}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
            >
              <svg className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {featuredGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setFeaturedSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === featuredSlide 
                      ? 'bg-white shadow-lg' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* GALA Mobile Era Banner Section */}
        <div className="mb-8">
          <div className="bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20 group cursor-pointer">
            <div className="grid grid-cols-2 gap-0">
              {/* GALA Game Image */}
              <div className="overflow-hidden">
                <img 
                  src="https://kendikorp.com/wp-content/uploads/2023/01/banner.png?w=1024"
                  alt="GALA Mobile Era Game"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              {/* Game Info */}
              <div className="bg-gray-700 group-hover:bg-gray-600 flex flex-col justify-center p-6 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2 transition-all duration-300 transform group-hover:scale-105 group-hover:text-cyan-400">
                  Mobile Era: The Filipino Game Wave
                </h3>
                <p className="text-cyan-400 text-base font-semibold transition-all duration-300 group-hover:text-cyan-300">
                  NOW THRU AUGUST 30 AT 10 AM PT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrival Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-105">New Arrival</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newArrivals.slice(newArrivalSlide, newArrivalSlide + 3).map((game, index) => (
                <div key={game.id} className="bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 group cursor-pointer">
                  <div className="overflow-hidden">
                    <img 
                      src={game.image}
                      alt={game.title}
                      className="w-full h-64 object-cover transition-all duration-500 transform group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white mb-1 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-105">{game.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 transition-colors duration-300 group-hover:text-gray-300">{game.subtitle}</p>
                    <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded text-sm transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 active:scale-95">
                      DOWNLOAD
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows for New Arrivals */}
            {newArrivalSlide > 0 && (
              <button 
                onClick={prevNewArrival}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
              >
                <svg className="w-6 h-6 transition-transform duration-300 hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {newArrivalSlide < newArrivals.length - 3 && (
              <button 
                onClick={nextNewArrival}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
              >
                <svg className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Dots Indicator for New Arrivals */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: Math.ceil(newArrivals.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setNewArrivalSlide(index * 3)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    Math.floor(newArrivalSlide / 3) === index 
                      ? 'bg-white shadow-lg' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Browse Category Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-105">Browse Category</h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.slice(categorySlide, categorySlide + 4).map((category) => (
                <div key={category.id} className="relative group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <div className="relative rounded-lg h-40 overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 flex items-center justify-center transition-all duration-300`}>
                      <h3 className="text-white font-bold text-sm md:text-base px-2 text-center transition-all duration-300 transform group-hover:scale-110 group-hover:text-yellow-200">
                        {category.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows for Categories */}
            {categorySlide > 0 && (
              <button 
                onClick={prevCategory}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
              >
                <svg className="w-6 h-6 transition-transform duration-300 hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {categorySlide < categories.length - 4 && (
              <button 
                onClick={nextCategory}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
              >
                <svg className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Dots Indicator for Categories */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: Math.ceil(categories.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCategorySlide(index * 4)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    Math.floor(categorySlide / 4) === index 
                      ? 'bg-white shadow-lg' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12  border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* GameBayan Logo and Description */}
            <div className="md:col-span-2">
              <button 
                onClick={() => onNavigate('home')}
                className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">🎮</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="text-red-500">GAME</span>
                    <span className="text-blue-400">BAYAN</span>
                  </h3>
                </div>
              </button>
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
                <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white text-sm">About Us</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Games</a></li>
                <li><button onClick={() => onNavigate('explore')} className="text-gray-400 hover:text-white text-sm">Explore</button></li>
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

export default Games;
