import React from 'react';
import { FaRocket } from 'react-icons/fa';

const Footer = () => {
  return (
  <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white py-14 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-4">
            <FaRocket className="text-purple-400 text-3xl mr-2 animate-bounce" />
            <span className="text-2xl font-extrabold tracking-tight">PitchCraft</span>
          </div>
          <p className="text-gray-300 text-base">Your AI startup partner for creating professional pitches in minutes.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="text-gray-400 hover:text-purple-300 transition">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-400 hover:text-purple-300 transition">How It Works</a></li>
            <li><a href="#pricing" className="text-gray-400 hover:text-purple-300 transition">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-300 transition">API</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-purple-300 transition">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-300 transition">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-300 transition">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-300 transition">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-purple-300 transition">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-300 transition">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-300 transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p className="text-base">© 2023 PitchCraft. All rights reserved.</p>
        <p className="mt-2 text-sm italic">"AI sirf madad ke liye hai, final faisla aapka apna hai."</p>
      </div>
    </footer>
  );
};

export default Footer;