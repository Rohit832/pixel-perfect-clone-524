import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <header className="flex flex-col items-center mb-[102px] max-sm:mb-[60px]">
      <h1 className="text-[#357369] text-center text-[40px] font-bold mb-[21px] max-sm:text-[32px] max-sm:mb-4">
        Why HRs Trust Us
      </h1>
      <p className="text-[#2E7265] text-center text-[15px] font-normal leading-[27px] max-sm:text-sm max-sm:leading-[22px]">
        Because your people deserve more than just policies
      </p>
    </header>
  );
};

export default HeroSection;
