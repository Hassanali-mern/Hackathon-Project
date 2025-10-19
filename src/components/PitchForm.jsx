import React, { useState } from 'react';
import { FaSpinner, FaMagic } from 'react-icons/fa';

const PitchForm = ({ onPitchGenerated }) => {
  const [formData, setFormData] = useState({
    idea: '',
    industry: '',
    tone: 'professional'
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const samplePitch = {
        name: generateName(formData.idea),
        tagline: generateTagline(formData.idea),
        pitch: generatePitch(formData.idea, formData.tone),
        audience: generateAudience(formData.industry),
        landingCopy: generateLandingCopy(formData.idea)
      };
      
      onPitchGenerated(samplePitch);
      setIsGenerating(false);
    }, 2000);
  };

  // Mock generation functions (in real app, these would call the AI API)
  const generateName = (idea) => {
    const words = idea.split(' ');
    const firstWord = words[0] || 'Startup';
    const lastWord = words[words.length - 1] || 'App';
    return `${firstWord}${lastWord}`;
  };

  const generateTagline = (idea) => {
    const taglines = [
      'Innovation for a Better Tomorrow',
      'Simplifying Your Digital Journey',
      'Empowering Your Vision',
      'Transforming Ideas into Reality'
    ];
    return taglines[Math.floor(Math.random() * taglines.length)];
  };

  const generatePitch = (idea, tone) => {
    const pitches = {
      professional: `A cutting-edge solution that addresses ${idea.toLowerCase()} through innovative technology and user-centric design.`,
      casual: `A fun and easy way to ${idea.toLowerCase()} that everyone will love using!`,
      persuasive: `Revolutionizing the way we ${idea.toLowerCase()} with a unique approach that delivers exceptional value.`
    };
    return pitches[tone] || pitches.professional;
  };

  const generateAudience = (industry) => {
    const audiences = {
      Technology: 'Tech-savvy professionals and early adopters aged 25-40',
      Education: 'Students, educators, and lifelong learners of all ages',
      Healthcare: 'Patients, healthcare providers, and medical institutions',
      Finance: 'Young professionals and small business owners seeking financial solutions',
      'E-commerce': 'Online shoppers and digital marketplace enthusiasts'
    };
    return audiences[industry] || 'General consumers and businesses';
  };

  const generateLandingCopy = (idea) => {
    return `Discover the future of ${idea.toLowerCase()} with our innovative platform. Join thousands of satisfied users who are already transforming their experience.`;
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-2xl shadow-xl p-8 mb-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">Create a New Pitch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label className="block text-lg font-bold text-gray-700 mb-3">Your Startup Idea</label>
          <textarea
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-5 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            rows="4"
            placeholder="Describe your startup idea in detail..."
            required
          ></textarea>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-3">Industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              required
            >
              <option value="">Select an industry</option>
              <option value="Technology">Technology</option>
              <option value="Education">Education</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="E-commerce">E-commerce</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-3">Tone</label>
            <div className="flex space-x-6">
              {['professional', 'casual', 'persuasive'].map(tone => (
                <label key={tone} className="flex items-center text-lg">
                  <input
                    type="radio"
                    name="tone"
                    value={tone}
                    checked={formData.tone === tone}
                    onChange={handleChange}
                    className="mr-2 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="capitalize font-semibold">{tone}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isGenerating}
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-10 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-purple-800 transition-all duration-150 shadow-lg flex items-center gap-3 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <FaSpinner className="animate-spin text-xl mr-2" />
                Generating...
              </>
            ) : (
              <>
                <FaMagic className="text-xl mr-2" />
                Generate Pitch
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PitchForm;