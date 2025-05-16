
import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Lock, Eye } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      title: "Decentralization",
      description: "A distributed network without central authority or control.",
      icon: <Database className="h-10 w-10 text-wyse-light" />
    },
    {
      title: "Security & Immutability",
      description: "Once data is recorded, it cannot be altered or deleted.",
      icon: <Lock className="h-10 w-10 text-wyse-light" />
    },
    {
      title: "Transparency",
      description: "All transactions are visible and verifiable by anyone.",
      icon: <Eye className="h-10 w-10 text-wyse-light" />
    }
  ];

  return (
    <section className="section-padding bg-wyse-darkblue hex-pattern-bg" id="about">
      <div className="container mx-auto">
        <h2 className="section-title text-white">What is <span className="text-wyse-light">Blockchain</span>?</h2>
        <p className="section-subtitle text-wyse-lightblue">
          It is a decentralized digital ledger that records and stores data securely across a network of computers. 
          It is the foundation of technologies like cryptocurrency, smart contracts, and NFTs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card transform hover:-translate-y-2 duration-300 flex flex-col items-center"
            >
              <div className="hexagon bg-wyse-dark w-20 h-20 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-center text-wyse-lightblue">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/about" 
            className="inline-flex items-center border-2 border-wyse-light text-wyse-light hover:bg-wyse-light hover:text-wyse-dark transition-all duration-300 px-6 py-2 rounded-md font-medium"
          >
            Learn More About Blockchain
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
