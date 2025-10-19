import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Describe Your Idea',
      description: 'Share your startup concept in simple words.',
      icon: 'fas fa-edit'
    },
    {
      number: '2',
      title: 'AI Generates Content',
      description: 'Our AI analyzes your idea and creates a complete pitch.',
      icon: 'fas fa-robot'
    },
    {
      number: '3',
      title: 'Review & Customize',
      description: 'Edit the generated content to match your vision.',
      icon: 'fas fa-sliders-h'
    },
    {
      number: '4',
      title: 'Export & Share',
      description: 'Download as PDF or share directly with investors.',
      icon: 'fas fa-share-alt'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How PitchCraft Works</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            {steps.map((step, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600 ml-14">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="ai-gradient text-white rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-2">Example Output</h3>
              <p className="text-sm mb-4">Input: "I want to build an app that connects students with mentors."</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">Startup Name: MentorMate</p>
                <p className="font-semibold">Tagline: "Guidance Meets Growth"</p>
                <p>Pitch: "A platform connecting learners with industry mentors for personalized guidance."</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">"AI tumhare idea ko samajh kar ek ready pitch likhta hai jo investor ko instantly impress karti hai."</p>
              <p className="text-sm text-gray-500">- PitchCraft Roman Urdu Feature</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;