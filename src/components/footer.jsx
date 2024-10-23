import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center space-y-8 md:space-y-0 px-4">
        
        {/* Brand Name/Logo */}
        <div className="text-center md:text-left">
          <h1 className="lg:text-xl text-2xl font-bold">Mubashar Siddique</h1>
          <p className="text-gray-400 text-center">javaScript Developer</p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="flex items-center  justify-center md:justify-start mb-2">
            <i className="fas fa-envelope mr-2 text-blue-500"></i>
            <a href="mailto:contact@mubasahar.dev" className="hover:text-gray-400">mdmubashar51438@gmail.com</a>
          </p>
          <p className="flex items-center  justify-left md:justify-start mb-2">
            <i className="fas fa-phone mr-2 text-green-500"></i>
            <a href="tel:+1234567890" className="hover:text-gray-400">+92 301 0659929</a>
          </p>
          <p className="flex lg:items-center   md:justify-start">
            <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
            Faisalabad, Punjab Pakistan
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Start A Conversation</h2>
          <form className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
            />
            <textarea 
              rows={3}
              placeholder="Your message" 
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
            />
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-1 text-center text-sm text-gray-400">
        &copy; 2024 Mubasahar Siddique
      </div>
    </footer>
  );
};

export default Footer;
