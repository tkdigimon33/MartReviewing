
import React from 'react';
import { ArrowRight } from 'lucide-react';

const StartButton = () => {
  const handleClick = () => {
    console.log("Start earning button clicked!");
    window.open('https://usetrk.com/aff_c?offer_id=1157&aff_id=5383', '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="w-full bg-gradient-to-r from-primary to-primary/90 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
    >
      <span className="text-lg">Start Earning Now</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};

export default StartButton;
