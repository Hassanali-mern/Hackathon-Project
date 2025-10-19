import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <i className="fas fa-rocket text-purple-600 text-2xl mr-2"></i>
        <span className="text-xl font-bold text-gray-800">PitchCraft</span>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link 
          to="/" 
          className={`${isActive('/') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600 transition`}
        >
          Home
        </Link>
        <a href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition">How It Works</a>
        <Link 
          to="/dashboard" 
          className={`${isActive('/dashboard') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600 transition`}
        >
          Dashboard
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link 
          to="/login" 
          className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition"
        >
          Login
        </Link>
        <Link 
          to="/register" 
          className="gradient-bg text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          Sign Up
        </Link>
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600 transition`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#features" 
              className="text-gray-600 hover:text-purple-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-purple-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <Link 
              to="/dashboard" 
              className={`${isActive('/dashboard') ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600 transition`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;