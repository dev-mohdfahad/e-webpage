import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import View from './View';
import Home from './Home';
import Login from './Login';

function Nav() {
  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50 p-4 flex justify-between items-center">
        
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-4">
          <img 
            src="/images/Logo.jpg" 
            alt="logo" 
            className="w-12 h-12 bg-white rounded-full transform transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            CODEVAMP STORE
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><Link to="/home" className="hover:text-blue-400 transition duration-300">Home</Link></li>
          <li><Link to="/view" className="hover:text-blue-400 transition duration-300">View</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link></li>
          <li><Link to="/login" className="hover:text-blue-400 transition duration-300">Login</Link></li>
        </ul>
      </nav>

      {/* Content Wrapper to Avoid Overlapping with Navbar */}
      <div className="pt-20">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/view' element={<View />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default Nav;
