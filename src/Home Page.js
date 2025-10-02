import React, { useState } from 'react';

const HomePage = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    <span className="font-medium">About Us</span>
                  </button>
                  
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-yellow-400 w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span className="font-medium">Games</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      onNavigate('explore');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span className="font-medium">Explore</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      onNavigate('developers');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span className="font-medium">Developers</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Hero Text */}
            <div className="space-y-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                Web Advertisement
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-white">All New</span>
                <span className="text-cyan-400"> Gaming</span>
              </h1>
              <p className="text-gray-300 text-lg">
                Discover cutting-edge gaming experiences from Filipino developers. 
                Join our community and explore the best indie games the Philippines has to offer.
              </p>
              <div className="flex space-x-4">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Gaming
                </button>
                <button className="border border-gray-600 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  View more games →
                </button>
              </div>
            </div>

            {/* Right Column - Featured Games */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Game Card 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-cyan-400">
                <div className="h-40 bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="font-bold text-lg">REPUBLIC DEFENDER</h3>
                    <p className="text-sm opacity-90">Strategy Game</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm">Defend the archipelago in this tactical strategy game.</p>
                </div>
              </div>

              {/* Game Card 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-600">
                <div className="h-40 bg-gradient-to-br from-orange-600 to-red-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="font-bold text-lg">HAPUNAN</h3>
                    <p className="text-sm opacity-90">Horror Game</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm">Experience a nightmare at the dinner table.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Limited Edition Games */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Limited Edition Games</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Until Then Game */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-pink-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-bold text-2xl mb-2">UNTIL THEN</h3>
                  <p className="text-lg opacity-90">Interactive Drama</p>
                </div>
              </div>
            </div>

            {/* Game Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">Until Then</h3>
              <p className="text-gray-300 leading-relaxed">
                Until Then is a 2D adventure game about Mark, a typical high school student whose life takes a dramatic turn when mysterious things start happening in his hometown. Experience an emotional journey through a story that explores themes of friendship, loss, and the supernatural.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Set in the Philippines, this narrative-driven game features beautiful pixel art, compelling characters, and choices that matter. Uncover the mysteries surrounding your town while navigating the complexities of teenage life.
              </p>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exogenesis: Perils of Rebirth */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Game Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">Exogenesis: Perils of Rebirth</h3>
              <p className="text-gray-300 leading-relaxed">
                Embark on an epic space adventure in Exogenesis: Perils of Rebirth. This action-packed RPG combines stunning visuals with deep strategic gameplay as you explore alien worlds and uncover ancient mysteries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Lead your crew through dangerous territories, make crucial decisions that affect the story, and engage in tactical combat against hostile alien forces. With multiple endings and branching storylines, every playthrough offers a unique experience.
              </p>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Discover More
              </button>
            </div>

            {/* Game Visual */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-600 to-orange-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-bold text-2xl mb-2">EXOGENESIS</h3>
                  <p className="text-lg opacity-90">Perils of Rebirth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bayani Fighting Game */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Game Visual */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-red-600 to-purple-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-bold text-2xl mb-2">BAYANI</h3>
                  <p className="text-lg opacity-90">Fighting Game</p>
                </div>
              </div>
            </div>

            {/* Game Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">Bayani Fighting Game</h3>
              <p className="text-gray-300 leading-relaxed">
                Step into the arena with Bayani, a fighting game that celebrates Filipino heroes and mythology. Choose from a diverse roster of fighters, each with unique abilities inspired by Philippine folklore and history.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Master combo systems, special moves, and ultimate attacks while competing in beautifully designed arenas that showcase iconic Filipino landmarks. Whether you're playing locally or online, Bayani delivers intense fighting action.
              </p>
              <div className="flex space-x-4">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Play Now
                </button>
                <button className="border border-cyan-600 hover:bg-cyan-600 text-cyan-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Developers Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Top Developers in the Platform</h2>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View All
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Developer 1 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Polychroma Games</h3>
              <p className="text-gray-400">Indie Studio</p>
            </div>

            {/* Developer 2 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secret Project</h3>
              <p className="text-gray-400">Game Studio</p>
            </div>

            {/* Developer 3 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ranida Games</h3>
              <p className="text-gray-400">Indie Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
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
              <p className="text-gray-400 text-sm leading-relaxed">
                GameBayan is a web-based platform designed to promote and feature video games
                proudly made by Filipino game developers. Discover, explore, and support homegrown talent.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white text-sm">About Us</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Games</a></li>
                <li><button onClick={() => onNavigate('explore')} className="text-gray-400 hover:text-white text-sm">Explore</button></li>
                <li><button onClick={() => onNavigate('developers')} className="text-gray-400 hover:text-white text-sm">Developers</button></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">GameBayan@gmail.com</p>
                <p className="text-gray-400">Support & Partnerships</p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
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

export default HomePage;
