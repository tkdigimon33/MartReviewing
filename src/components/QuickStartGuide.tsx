
import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const QuickStartGuide = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const steps = [
    {
      title: "Complete 2-3 required deals",
      subtitle: "Earn up to $750",
      completed: true
    },
    {
      title: "Provide a valid email address",
      subtitle: "For instant notification",
      completed: true
    },
    {
      title: "Ensure you are 18 years or older",
      subtitle: "Required",
      completed: true,
      isRequired: true
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
      <div 
        className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-bold text-gray-900">Quick Start Guide</h3>
        <ChevronDown 
          className={`w-6 h-6 text-gray-600 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    step.completed 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Check className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  <p className={`text-sm ${
                    step.isRequired 
                      ? 'text-red-600 font-medium' 
                      : 'text-gray-600'
                  }`}>
                    {step.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickStartGuide;
