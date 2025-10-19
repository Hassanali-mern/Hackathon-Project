import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Startup Names & Taglines',
      description: 'Generate creative and catchy names and taglines for your startup.',
      color: 'purple'
    },
    {
      icon: 'fas fa-comment-alt',
      title: 'Elevator Pitches',
      description: 'Create compelling 2-3 line summaries that explain your startup quickly.',
      color: 'blue'
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Target Audience',
      description: 'Define your ideal customers and create detailed audience personas.',
      color: 'green'
    },
    {
      icon: 'fas fa-palette',
      title: 'Color & Logo Ideas',
      description: 'Get suggestions for color palettes and logo concepts for your brand.',
      color: 'yellow'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Landing Page Content',
      description: 'Generate compelling copy for your website\'s hero section and key pages.',
      color: 'red'
    },
    {
      icon: 'fas fa-language',
      title: 'Bilingual Support',
      description: 'Works in both English and Roman Urdu for wider accessibility.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      purple: 'bg-purple-100 text-purple-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="features" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What PitchCraft Can Do For You</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}>
                <i className={`${feature.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;