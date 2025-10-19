import React, { useState } from 'react';
import PitchForm from './PitchForm';
import { FaFileAlt, FaEdit, FaShareAlt, FaFilePdf, FaReact, FaDatabase, FaRobot, FaGoogle } from 'react-icons/fa';

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
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">Your Pitch Dashboard</h1>
      <div className="bg-gradient-to-br from-purple-100 via-white to-purple-200 rounded-2xl shadow-xl overflow-hidden mb-10">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 text-center border-b-2 font-semibold text-base focus:outline-none transition-all duration-150 ${
                activeTab === 'create'
                  ? 'border-purple-500 text-purple-700 bg-purple-50'
                  : 'border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300'
              }`}
              onClick={() => setActiveTab('create')}
            >
              <span className="inline-flex items-center gap-2"><FaEdit className="text-purple-500" /> Create New Pitch</span>
            </button>
            <button
              className={`py-4 px-6 text-center border-b-2 font-semibold text-base focus:outline-none transition-all duration-150 ${
                activeTab === 'saved'
                  ? 'border-purple-500 text-purple-700 bg-purple-50'
                  : 'border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300'
              }`}
              onClick={() => setActiveTab('saved')}
            >
              <span className="inline-flex items-center gap-2"><FaFileAlt className="text-purple-500" /> Saved Pitches ({pitches.length})</span>
            </button>
          </nav>
        </div>
        <div className="p-8">
          {activeTab === 'create' && <PitchForm onPitchGenerated={handleNewPitch} />}
          {activeTab === 'saved' && (
            <div>
              {pitches.length === 0 ? (
                <div className="text-center py-12">
                  <FaFileAlt className="text-5xl text-gray-300 mb-4 mx-auto animate-pulse" />
                  <h3 className="text-2xl font-semibold text-gray-500 mb-2">No Pitches Yet</h3>
                  <p className="text-gray-400 mb-6">Create your first pitch to get started!</p>
                  <button 
                    className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-150 shadow-md"
                    onClick={() => setActiveTab('create')}
                  >
                    <FaEdit className="inline mr-2" /> Create Pitch
                  </button>
                </div>
              ) : (
                <div className="grid gap-8">
                  {pitches.map(pitch => (
                    <div key={pitch.id} className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-xl transition-all duration-150">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{pitch.name}</h3>
                          <p className="text-purple-600 font-medium text-lg">{pitch.tagline}</p>
                        </div>
                        <span className="text-sm text-gray-500 font-mono">{pitch.date}</span>
                      </div>
                      <p className="text-gray-700 mb-4 text-base">{pitch.pitch}</p>
                      <div className="flex space-x-4">
                        <button className="text-sm text-purple-600 hover:text-purple-800 font-semibold transition flex items-center gap-1">
                          <FaEdit /> Edit
                        </button>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition flex items-center gap-1">
                          <FaShareAlt /> Share
                        </button>
                        <button className="text-sm text-green-600 hover:text-green-800 font-semibold transition flex items-center gap-1">
                          <FaFilePdf /> Export PDF
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
      <div className="bg-gradient-to-br from-gray-50 via-white to-purple-100 rounded-2xl shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Powered By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow hover:shadow-md transition-all duration-150">
            <FaReact className="text-4xl text-blue-500 mb-2 mx-auto animate-spin-slow" />
            <p className="font-semibold">React</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow hover:shadow-md transition-all duration-150">
            <FaDatabase className="text-4xl text-yellow-500 mb-2 mx-auto" />
            <p className="font-semibold">Firebase</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow hover:shadow-md transition-all duration-150">
            <FaRobot className="text-4xl text-purple-500 mb-2 mx-auto animate-bounce" />
            <p className="font-semibold">Gemini AI</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow hover:shadow-md transition-all duration-150">
            <FaGoogle className="text-4xl text-green-500 mb-2 mx-auto" />
            <p className="font-semibold">Google AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;