
import React from 'react';

interface WyseLogoProps {
  className?: string;
}

const WyseLogo: React.FC<WyseLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <span className="text-white text-2xl font-bold tracking-wide">
          <span className="text-wyse-light">WYSE</span>{" "}
          <span className="font-light hidden sm:inline">BLOCKCHAIN</span>
        </span>
      </div>
    </div>
  );
};

export default WyseLogo;
