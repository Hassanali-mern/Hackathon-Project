import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="gradient-bg text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your AI Startup Partner</h1>
          <p className="text-lg mb-8">Generate professional startup pitches in minutes with AI. Perfect for students and aspiring founders.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/dashboard" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
            >
              Try For Free
            </Link>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Try PitchCraft Now</h3>
            <div className="mb-4">
              <label className="block text-sm mb-2">Your Startup Idea</label>
              <textarea 
                className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg p-3 text-white placeholder-white placeholder-opacity-70" 
                rows="3" 
                placeholder="Describe your startup idea..."
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Industry</label>
              <select className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg p-3 text-white">
                <option>Technology</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>E-commerce</option>
              </select>
            </div>
            <Link 
              to="/dashboard" 
              className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center block"
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