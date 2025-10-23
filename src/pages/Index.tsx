
import React from 'react';
import GiftCardHero from '../components/GiftCardHero';
import ClaimInstructions from '../components/ClaimInstructions';
import QuickStartGuide from '../components/QuickStartGuide';
import CommonQuestions from '../components/CommonQuestions';
import StartButton from '../components/StartButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md mx-auto px-4 py-6">
        <GiftCardHero />
        <ClaimInstructions />
        <QuickStartGuide />
        <CommonQuestions />
        <StartButton />
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            * Terms and conditions apply. Must be 18+ to participate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
