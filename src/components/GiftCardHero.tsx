
import React from 'react';

const GiftCardHero = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white relative overflow-hidden mb-6">
      <div className="absolute top-4 right-4 text-white text-lg font-bold">
        $750
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <div className="bg-white/10 p-6 rounded-xl mb-6">
          <div className="w-16 h-16 mx-auto">
            <img 
              src="/walmart-logo.png" 
              alt="Walmart Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg opacity-90">Walmart Gift Card</p>
        </div>
      </div>
    </div>
  );
};

export default GiftCardHero;
