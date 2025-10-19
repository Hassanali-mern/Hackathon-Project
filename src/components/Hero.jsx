import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

const Hero = () => {
  return (
  <section className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-300 text-white py-20 px-8">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center mb-6">
            <FaRocket className="text-white text-5xl mr-3 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight">Your AI Startup Partner</h1>
          </div>
          <p className="text-xl mb-10">Generate professional startup pitches in minutes with AI. Perfect for students and aspiring founders.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/dashboard" 
              className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-purple-100 transition-all duration-150 shadow-lg text-center"
            >
              Try For Free
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:bg-opacity-10 transition-all duration-150 shadow-lg">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Try PitchCraft Now</h3>
            <div className="mb-6">
              <label className="block text-lg mb-2 text-white">Your Startup Idea</label>
              <textarea 
                className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl p-4 text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-purple-400 focus:border-transparent" 
                rows="3" 
                placeholder="Describe your startup idea..."
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-lg mb-2 text-white">Industry</label>
              <select className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent">
                <option>Technology</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>E-commerce</option>
              </select>
            </div>
            <Link 
              to="/dashboard" 
              className="w-full bg-white text-purple-700 py-4 rounded-xl font-bold hover:bg-purple-100 transition-all duration-150 shadow-lg text-center block"
            >
              Generate Pitch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;