import React, { useState } from 'react';
import PitchForm from './PitchForm';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [pitches, setPitches] = useState([
    {
      id: 1,
      name: 'EduConnect',
      tagline: 'Learning Without Limits',
      pitch: 'A platform that connects students with expert tutors for personalized learning experiences.',
      date: '2023-05-15'
    },
    {
      id: 2,
      name: 'HealthTrack',
      tagline: 'Your Health, Our Priority',
      pitch: 'An AI-powered health monitoring app that tracks your vitals and provides personalized recommendations.',
      date: '2023-05-10'
    }
  ]);

  const handleNewPitch = (pitchData) => {
    const newPitch = {
      id: pitches.length + 1,
      ...pitchData,
      date: new Date().toISOString().split('T')[0]
    };
    setPitches([newPitch, ...pitches]);
    setActiveTab('saved');
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Pitch Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'create'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('create')}
            >
              Create New Pitch
            </button>
            <button
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'saved'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('saved')}
            >
              Saved Pitches ({pitches.length})
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'create' && <PitchForm onPitchGenerated={handleNewPitch} />}
          {activeTab === 'saved' && (
            <div>
              {pitches.length === 0 ? (
                <div className="text-center py-12">
                  <i className="fas fa-file-alt text-4xl text-gray-300 mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-500 mb-2">No Pitches Yet</h3>
                  <p className="text-gray-400 mb-6">Create your first pitch to get started!</p>
                  <button 
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
                    onClick={() => setActiveTab('create')}
                  >
                    Create Pitch
                  </button>
                </div>
              ) : (
                <div className="grid gap-6">
                  {pitches.map(pitch => (
                    <div key={pitch.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{pitch.name}</h3>
                          <p className="text-purple-600 font-medium">{pitch.tagline}</p>
                        </div>
                        <span className="text-sm text-gray-500">{pitch.date}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{pitch.pitch}</p>
                      <div className="flex space-x-3">
                        <button className="text-sm text-purple-600 hover:text-purple-800 transition">
                          <i className="fas fa-edit mr-1"></i> Edit
                        </button>
                        <button className="text-sm text-blue-600 hover:text-blue-800 transition">
                          <i className="fas fa-share-alt mr-1"></i> Share
                        </button>
                        <button className="text-sm text-green-600 hover:text-green-800 transition">
                          <i className="fas fa-file-pdf mr-1"></i> Export PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Tech Stack Info */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Powered By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <i className="fab fa-react text-3xl text-blue-500 mb-2"></i>
            <p className="font-medium">React</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <i className="fas fa-database text-3xl text-yellow-500 mb-2"></i>
            <p className="font-medium">Firebase</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <i className="fas fa-robot text-3xl text-purple-500 mb-2"></i>
            <p className="font-medium">Gemini AI</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <i className="fab fa-google text-3xl text-green-500 mb-2"></i>
            <p className="font-medium">Google AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;