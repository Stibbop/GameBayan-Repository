import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const AboutUs = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Email form state
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Basic validation
    if (!emailForm.name || !emailForm.email || !emailForm.subject || !emailForm.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration - REPLACE WITH YOUR ACTUAL VALUES FROM STEPS 2, 3, AND 4
      const serviceID = 'service_bk1nkh2'; // STEP 2: Replace with YOUR Service ID
      const confirmationTemplateID = 'template_agzehjr'; // STEP 3: Template for user confirmation
      const adminNotificationTemplateID = 'template_gwmlibx'; // Your dedicated admin template
      const publicKey = 'vCjpTC8FR5OSky1my'; // STEP 4: Replace with YOUR Public Key

      // Check if credentials are still placeholder values
      if (serviceID === 'YOUR_SERVICE_ID' || confirmationTemplateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        setSubmitStatus({
          type: 'error',
          message: 'EmailJS is not configured yet. Please set up your EmailJS credentials first.'
        });
        setIsSubmitting(false);
        return;
      }

      console.log('Attempting to send emails with:', {
        serviceID,
        confirmationTemplateID,
        adminNotificationTemplateID,
        publicKey: publicKey.substring(0, 5) + '...' // Only show first 5 chars for security
      });

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // EMAIL 1: Send confirmation email TO USER
      const userConfirmationParams = {
        to_name: emailForm.name, // User's name
        to_email: emailForm.email, // Send TO the user's email
        from_name: 'GameBayan Team', // Your team name  
        from_email: 'GameBayan@gmail.com', // Your email
        subject: `Thank you for contacting GameBayan - ${emailForm.subject}`,
        user_message: `Thank you for your message about "${emailForm.subject}". 

Your original message:
"${emailForm.message}"

We have received your inquiry and will get back to you within 24 hours. In the meantime, feel free to explore our Filipino-made games!

If you need immediate assistance, please reply to this email.`,
        original_subject: emailForm.subject,
        user_email: emailForm.email,
        user_name: emailForm.name
      };

      // EMAIL 2: Send notification TO ADMIN using dedicated admin template
      const adminNotificationParams = {
        // Variables for your admin template (template_gwmlibx)
        from_name: emailForm.name,           // User's name - shows as sender {{from_name}}
        user_email: emailForm.email,         // User's email - for reply-to {{user_email}}
        original_subject: emailForm.subject, // Subject line {{original_subject}}
        user_message: emailForm.message,     // User's actual message {{user_message}}
        
        // Admin template should have these hardcoded in EmailJS dashboard:
        // To Email: stevensulayao@gmail.com (hardcoded)
        // Reply To: {{user_email}} (dynamic)
        // From Name: {{from_name}} (dynamic)
      };

      // Debug logging - check what's being sent
      console.log('=== EMAIL DEBUG INFO ===');
      console.log('User confirmation email (to_email):', userConfirmationParams.to_email);
      console.log('Admin notification email (to_email):', adminNotificationParams.to_email);
      console.log('Service ID:', serviceID);
      console.log('Template IDs:', { confirmationTemplateID, adminNotificationTemplateID });
      console.log('User params:', userConfirmationParams);
      console.log('Admin params:', adminNotificationParams);
      console.log('========================');

      // Send both emails
      console.log('Sending confirmation email to user...');
      const userResponse = await emailjs.send(serviceID, confirmationTemplateID, userConfirmationParams);
      console.log('User confirmation email sent successfully:', userResponse);

      console.log('Sending notification email to admin...');
      try {
        const adminResponse = await emailjs.send(serviceID, adminNotificationTemplateID, adminNotificationParams);
        console.log('Admin notification email sent successfully:', adminResponse);
      } catch (adminError) {
        console.error('Admin email failed:', adminError);
        // Don't fail the whole process if admin email fails
        console.log('User email sent successfully, but admin notification failed');
      }
      
      setSubmitStatus({
        type: 'success',
        message: `Thank you ${emailForm.name}! We've sent a confirmation email to ${emailForm.email} and notified our team. We'll get back to you soon!`
      });
      
      // Reset form
      setEmailForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Detailed error:', error);
      
      let errorMessage = 'Failed to send email. ';
      
      if (error.status === 400) {
        errorMessage += 'Invalid template or service configuration.';
      } else if (error.status === 401) {
        errorMessage += 'Authentication failed. Check your EmailJS credentials.';
      } else if (error.status === 403) {
        errorMessage += 'Access denied. Check your EmailJS public key.';
      } else if (error.status === 413) {
        errorMessage += 'Message too large.';
      } else if (error.text) {
        errorMessage += error.text;
      } else {
        errorMessage += 'Please check your internet connection and try again.';
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <button className="text-yellow-400 hover:text-yellow-300 font-medium underline">About Us</button>
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-yellow-400 w-full text-left py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">Developers</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
        
            <div className="space-y-8 group">
              <h1 className="text-5xl lg:text-6xl font-bold text-cyan-400 text-center hover:text-cyan-300 transition-all duration-300 transform hover:scale-105 cursor-default" >About Us</h1>
              
              {/* GameBayan Logo Large */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-4xl">🎮</span>
                </div>
                <div>
                  <h2 className="text-6xl lg:text-7xl font-bold">
                    <span className="text-red-500">GAME</span>
                    <span className="text-blue-400">BAYAN</span>
                  </h2>
                </div>
              </div>
              
              {/* Tagline */}
              <h3 className="text-2xl font-semibold text-gray-300 text-center hover:text-white transition-all duration-300 transform hover:scale-105">
                Where Pinoy Creativity Meets Gaming
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed hover:text-gray-300 transition-all duration-300 transform hover:scale-[1.02] cursor-default">
                GameBayan is a web-based platform designed to promote and
                feature video games proudly made by Filipino game developers.
                The web platform totally made indie and accessible "Steam-style" catalog 
                so games can easily discover, explore, and support homegrown talent.
              </p>
            </div>
            
            {/* Right Column - Game Development Team Image */}
            <div className="relative transform transition-all duration-500 hover:scale-105 group cursor-pointer">
              <img 
                src="https://meliorgames.com/wp-content/uploads/2019/09/game-dev-team-min-scaled.jpg" 
                alt="Game Development Team" 
                className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/30 group-hover:brightness-110 group-hover:contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">What We Offer?</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Visibility for Local Developers */}
            <div className="bg-gray-800 rounded-xl p-6 border border-cyan-400 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 hover:bg-gray-750">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-cyan-500 hover:scale-110">
                  <svg className="w-6 h-6 text-white transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400">Visibility for Local Developers</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-200">
                We give Filipino game creators a dedicated space to showcase their work to both local and international audiences.
              </p>
            </div>

            {/* Stream-Style Experience */}
            <div className="bg-gray-800 rounded-xl p-6 border border-cyan-400 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 hover:bg-gray-750">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-cyan-500 hover:scale-110">
                  <svg className="w-6 h-6 text-white transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400">A "Steam-Style" Catalog Experience</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-200">
                Browse games the way you would on global platforms, but with a focus on Filipino creativity, culture, and innovation.
              </p>
            </div>

            {/* Support for Gaming Industry */}
            <div className="bg-gray-800 rounded-xl p-6 border border-cyan-400 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 hover:bg-gray-750">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-cyan-500 hover:scale-110">
                <svg className="w-8 h-8 text-white transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400">Support for a Growing Industry</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-200">
                By featuring and promoting Philippine-made games, GameBayan helps fuel the growth of the local game development community.
              </p>
            </div>
            </div>

            {/* Bottom Row - 2 Cards Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Hub for Filipino-Made Games */}
            <div className="bg-gray-800 rounded-xl p-6 border border-cyan-400 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 hover:bg-gray-750">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-cyan-500 hover:scale-110">
                <svg className="w-8 h-8 text-white transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                </div>
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400">A Hub for Filipino-Made Games</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-200">
                GameBayan brings together locally developed indie and studio titles in one easy-to-access platform—your one-stop shop for discovering homegrown talent.
              </p>
            </div>

            {/* A Gateway to Unique and Culturally Inspired Titles */}
            <div className="bg-gray-800 rounded-xl p-6 border border-cyan-400 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 hover:bg-gray-750">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-cyan-500 hover:scale-110">
                  <svg className="w-6 h-6 text-white transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400">A Gateway to Unique and Culturally Inspired Titles</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-200">
                Find games with stories, art, and gameplay that reflect the rich heritage and imagination of the Philippines.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 transition-all duration-500 hover:text-cyan-300 hover:scale-105">
            Be part of the future of Philippine gaming!
          </h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
            Explore Games!
          </button>
        </div>
      </section>

      {/* Contact Us Email Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-400 mb-4">Get In Touch</h2>
              <p className="text-gray-300 text-lg">
                Have questions, suggestions, or want to submit your game? We'd love to hear from you!
              </p>
            </div>

            {/* Contact Form - Full Width */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 transform hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold text-white mb-6 transition-colors duration-300 hover:text-cyan-400">Send us a message</h3>
                
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={emailForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 hover:border-gray-500 focus:scale-[1.02]"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={emailForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 hover:border-gray-500 focus:scale-[1.02]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={emailForm.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 hover:border-gray-500 focus:scale-[1.02]"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={emailForm.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-vertical transition-all duration-300 hover:border-gray-500 focus:scale-[1.02]"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus.message && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-900 border border-green-600 text-green-200'
                        : 'bg-red-900 border border-red-600 text-red-200'
                    }`}>
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        : 'bg-cyan-600 text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <li><button onClick={() => onNavigate('games')} className="text-gray-400 hover:text-white text-sm">Games</button></li>
                <li><button onClick={() => onNavigate('explore')} className="text-gray-400 hover:text-white text-sm">Explore</button></li>
                <li><button onClick={() => onNavigate('developers')} className="text-gray-400 hover:text-white text-sm">Developers</button></li>
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

export default AboutUs;
