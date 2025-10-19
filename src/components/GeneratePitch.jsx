import React from 'react';
import { FaRedoAlt, FaSave, FaFilePdf, FaShareAlt, FaCopy } from 'react-icons/fa';

const GeneratedPitch = ({ pitchData, onRegenerate, onSave }) => {
  if (!pitchData) return null;

  return (
  <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-2xl shadow-xl p-8 mb-8">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Your Generated Pitch</h2>
        <div className="flex space-x-4">
          <button 
            onClick={onRegenerate}
            className="bg-gradient-to-r from-purple-100 to-purple-300 text-purple-700 px-6 py-3 rounded-xl font-semibold hover:from-purple-200 hover:to-purple-400 transition-all duration-150 shadow flex items-center gap-2"
          >
            <FaRedoAlt /> Regenerate
          </button>
          <button 
            onClick={onSave}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-800 transition-all duration-150 shadow flex items-center gap-2"
          >
            <FaSave /> Save Pitch
          </button>
        </div>
      </div>
      
      <div className="grid gap-8">
        <div className="border-l-4 border-purple-500 pl-6 bg-white rounded-xl shadow mb-2">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Startup Name</h3>
          <p className="text-2xl font-extrabold text-gray-900">{pitchData.name}</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-6 bg-white rounded-xl shadow mb-2">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Tagline</h3>
          <p className="text-xl text-blue-600 font-semibold">"{pitchData.tagline}"</p>
        </div>
        <div className="border-l-4 border-green-500 pl-6 bg-white rounded-xl shadow mb-2">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Elevator Pitch</h3>
          <p className="text-gray-700 text-base">{pitchData.pitch}</p>
        </div>
        <div className="border-l-4 border-yellow-500 pl-6 bg-white rounded-xl shadow mb-2">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Target Audience</h3>
          <p className="text-gray-700 text-base">{pitchData.audience}</p>
        </div>
        <div className="border-l-4 border-red-500 pl-6 bg-white rounded-xl shadow mb-2">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Landing Page Copy</h3>
          <p className="text-gray-700 text-base">{pitchData.landingCopy}</p>
        </div>
      </div>
      
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Export Options</h3>
        <div className="flex space-x-6">
          <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-150 shadow flex items-center gap-2">
            <FaFilePdf /> Export as PDF
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-150 shadow flex items-center gap-2">
            <FaShareAlt /> Share Link
          </button>
          <button className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-800 transition-all duration-150 shadow flex items-center gap-2">
            <FaCopy /> Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedPitch;