
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const CommonQuestions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const questions = [
    {
      question: "How long do the deals take?",
      answer: "Quick 10-20 minute completion time per deal"
    },
    {
      question: "What kind of tasks are required?",
      answer: "Simple tasks like app downloads, surveys, or sign-ups"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
      <div 
        className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-bold text-gray-900">Common Questions</h3>
        <ChevronRight 
          className={`w-6 h-6 text-gray-600 transition-transform ${
            isExpanded ? 'rotate-90' : ''
          }`}
        />
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonQuestions;
