
import React from 'react';
import { Link } from 'react-router-dom';
import { Banknote, BarChart2, ShoppingBag, Gift, Users, Globe, ArrowRightCircle, Signal } from 'lucide-react';

const EcosystemSection = () => {
  const ecosystemItems = [
    {
      title: "WYSE Token",
      description: "The utility token driving the ecosystem",
      icon: <Banknote className="h-6 w-6 text-wyse-accent" />,
      color: "bg-wyse-accent/10 border-wyse-accent/30"
    },
    {
      title: "Trading AI Bot",
      description: "Smart AI-powered crypto trading",
      icon: <BarChart2 className="h-6 w-6 text-wyse-light" />,
      color: "bg-wyse-light/10 border-wyse-light/30"
    },
    {
      title: "WyseSignal",
      description: "Premium trading signal provider",
      icon: <Signal className="h-6 w-6 text-wyse-cyan" />,
      color: "bg-wyse-cyan/10 border-wyse-cyan/30"
    },
    {
      title: "NFT Marketplace",
      description: "Digital assets and collectibles",
      icon: <ShoppingBag className="h-6 w-6 text-wyse-accent" />,
      color: "bg-wyse-accent/10 border-wyse-accent/30"
    },
    {
      title: "Play to Earn",
      description: "Earn while gaming",
      icon: <Gift className="h-6 w-6 text-wyse-light" />,
      color: "bg-wyse-light/10 border-wyse-light/30"
    },
    {
      title: "WYSE Connect",
      description: "Blockchain-based social media",
      icon: <Users className="h-6 w-6 text-wyse-cyan" />,
      color: "bg-wyse-cyan/10 border-wyse-cyan/30"
    },
    {
      title: "WYSE DEX",
      description: "Decentralized exchange",
      icon: <Globe className="h-6 w-6 text-wyse-accent" />,
      color: "bg-wyse-accent/10 border-wyse-accent/30"
    },
    {
      title: "Launchpad",
      description: "Incubating blockchain projects",
      icon: <ArrowRightCircle className="h-6 w-6 text-wyse-light" />,
      color: "bg-wyse-light/10 border-wyse-light/30"
    }
  ];

  return (
    <section className="section-padding bg-wyse-dark" id="ecosystem">
      <div className="container mx-auto">
        <h2 className="section-title text-white">The <span className="text-wyse-light">WYSE</span> Ecosystem</h2>
        <p className="section-subtitle text-wyse-lightblue">
          A comprehensive blockchain-powered ecosystem designed to empower individuals and businesses through decentralized finance, cryptocurrency, trading, and digital innovation.
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="relative mt-12 mb-20">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="hexagon bg-wyse w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center border-4 border-wyse-light/30 shadow-lg shadow-wyse-light/20">
                <div className="text-center">
                  <p className="text-white font-bold text-lg md:text-xl">WYSE</p>
                  <p className="text-wyse-light text-xs md:text-sm">BLOCKCHAIN</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {ecosystemItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`feature-card ${item.color} flex flex-col p-4 md:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-wyse-lightblue mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/ecosystem" 
              className="inline-flex items-center bg-wyse-light text-wyse-dark hover:bg-wyse-cyan transition-colors duration-300 px-6 py-3 rounded-md font-medium transform hover:scale-105"
            >
              Explore Full Ecosystem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
