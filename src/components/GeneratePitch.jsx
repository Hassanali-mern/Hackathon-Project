import React from 'react';

const GeneratedPitch = ({ pitchData, onRegenerate, onSave }) => {
  if (!pitchData) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Generated Pitch</h2>
        <div className="flex space-x-3">
          <button 
            onClick={onRegenerate}
            className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-200 transition flex items-center"
          >
            <i className="fas fa-redo-alt mr-2"></i>
            Regenerate
          </button>
          <button 
            onClick={onSave}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center"
          >
            <i className="fas fa-save mr-2"></i>
            Save Pitch
          </button>
        </div>
      </div>
      
      <div className="grid gap-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Startup Name</h3>
          <p className="text-2xl font-bold text-gray-800">{pitchData.name}</p>
        </div>
        
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Tagline</h3>
          <p className="text-xl text-blue-600 font-medium">"{pitchData.tagline}"</p>
        </div>
        
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Elevator Pitch</h3>
          <p className="text-gray-600">{pitchData.pitch}</p>
        </div>
        
        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Target Audience</h3>
          <p className="text-gray-600">{pitchData.audience}</p>
        </div>
        
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Landing Page Copy</h3>
          <p className="text-gray-600">{pitchData.landingCopy}</p>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Export Options</h3>
        <div className="flex space-x-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center">
            <i className="fas fa-file-pdf mr-2"></i>
            Export as PDF
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center">
            <i className="fas fa-share-alt mr-2"></i>
            Share Link
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition flex items-center">
            <i className="fas fa-copy mr-2"></i>
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedPitch;