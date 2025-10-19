import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <i className="fas fa-rocket text-purple-400 text-2xl mr-2"></i>
            <span className="text-xl font-bold">PitchCraft</span>
          </div>
          <p className="text-gray-400">Your AI startup partner for creating professional pitches in minutes.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
            <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>© 2023 PitchCraft. All rights reserved.</p>
        <p className="mt-2 text-sm">"AI sirf madad ke liye hai, final faisla aapka apna hai."</p>
      </div>
    </footer>
  );
};

export default Footer;