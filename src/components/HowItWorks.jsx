import React from 'react';
import { FaEdit, FaRobot, FaSlidersH, FaShareAlt } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Describe Your Idea',
      description: 'Share your startup concept in simple words.',
      icon: <FaEdit className="text-purple-600 text-xl" />
    },
    {
      number: '2',
      title: 'AI Generates Content',
      description: 'Our AI analyzes your idea and creates a complete pitch.',
      icon: <FaRobot className="text-purple-600 text-xl animate-bounce" />
    },
    {
      number: '3',
      title: 'Review & Customize',
      description: 'Edit the generated content to match your vision.',
      icon: <FaSlidersH className="text-purple-600 text-xl" />
    },
    {
      number: '4',
      title: 'Export & Share',
      description: 'Download as PDF or share directly with investors.',
      icon: <FaShareAlt className="text-purple-600 text-xl" />
    }
  ];

  return (
  <section id="how-it-works" className="py-20 px-8 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 tracking-tight">How PitchCraft Works</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            {steps.map((step, index) => (
              <div key={index} className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mr-4 shadow-lg text-xl">
                    {step.number}
                  </div>
                  <div className="mr-3">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-700 ml-20 text-base">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Example Output</h3>
              <p className="text-base mb-6">Input: <span className="font-semibold">"I want to build an app that connects students with mentors."</span></p>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <p className="font-semibold">Startup Name: MentorMate</p>
                <p className="font-semibold">Tagline: "Guidance Meets Growth"</p>
                <p>Pitch: "A platform connecting learners with industry mentors for personalized guidance."</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mb-4 text-lg">"AI tumhare idea ko samajh kar ek ready pitch likhta hai jo investor ko instantly impress karti hai."</p>
              <p className="text-base text-gray-500">- PitchCraft Roman Urdu Feature</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;