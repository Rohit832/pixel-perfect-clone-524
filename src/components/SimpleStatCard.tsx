import React from 'react';

interface SimpleStatCardProps {
  icon: string;
  percentage: string;
  description: string;
  backgroundColor: string;
}

const SimpleStatCard: React.FC<SimpleStatCardProps> = ({ 
  icon, 
  percentage, 
  description, 
  backgroundColor 
}) => {
  return (
    <article className="flex w-[241px] h-[339px] flex-col justify-center items-center shrink-0 relative px-[24.037px] py-[33.155px] rounded-[33.155px] max-md:w-[calc(50%_-_10px)] max-md:min-w-[280px] max-sm:w-full max-sm:max-w-xs max-sm:h-auto max-sm:min-h-[280px]">
      <div
        className="absolute w-full h-full z-[1] rounded-[33.155px] left-0 top-0"
        style={{ backgroundColor }}
      />
      <div className="flex flex-col items-center gap-[16.577px] relative z-[2] w-full">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: icon,
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-[18.235px] w-full">
          <div className="flex flex-col items-center gap-[9.118px] w-full">
            <div className="text-black text-center text-[40px] font-bold opacity-80 max-sm:text-4xl">
              {percentage}
            </div>
            <div className="text-black text-center text-base font-normal w-[157px] h-[45px] max-sm:text-[15px] max-sm:w-full max-sm:h-auto">
              {description}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SimpleStatCard;
