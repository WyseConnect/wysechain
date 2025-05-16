import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { CertificateButton } from '../FloatingCertificate';

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center wyse-gradient-bg overflow-hidden">
      <div className="hex-pattern-bg absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="text-wyse-light">WYSE</span>{" "}
              <span>BLOCKCHAIN</span>{" "}
              <span>TECHNOLOGY</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-wyse-lightblue">
              "Pioneering the Future of Blockchain and Digital Opportunities."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/ecosystem"
                className="w-full sm:w-auto bg-wyse-light text-wyse-dark px-6 py-3 rounded-md font-medium hover:bg-wyse-cyan transition-colors duration-300 shadow-lg hover:shadow-wyse-light/20 text-center"
              >
                Explore Ecosystem
              </Link>
              <Link
                to="/opportunity"
                className="w-full sm:w-auto bg-wyse-accent text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300 shadow-lg hover:shadow-wyse-accent/20 text-center"
              >
                Join Liquidity Pool
              </Link>
              <div className="w-full sm:w-auto bg-transparent border-2 border-wyse-light text-white px-6 py-3 rounded-md font-medium hover:bg-wyse-light hover:text-wyse-dark transition-colors duration-300 shadow-lg hover:shadow-wyse-light/20 text-center">
                <CertificateButton />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={scrollDown} 
              aria-label="Scroll Down"
              className="animate-float p-2 rounded-full border-2 border-wyse-light/50 hover:border-wyse-light transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 text-wyse-light" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;