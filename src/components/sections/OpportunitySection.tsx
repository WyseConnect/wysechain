import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, DollarSign, TrendingUp, Percent, ChevronRight, Award, Shield, Clock, Users, Zap } from 'lucide-react';
import PriceComparisonChart from '../PriceComparisonChart';

const OpportunitySection = () => {
  const benefits = [
    {
      title: "Competitive APY",
      description: "Earn up to 24% APY on your staked assets, outperforming traditional savings by 10x.",
      icon: <TrendingUp className="h-8 w-8 text-wyse-accent" />,
      stat: "24% APY"
    },
    {
      title: "Token Multiplier", 
      description: "10X bonus WYSE tokens on initial deposit with tiered rewards for long-term participants.",
      icon: <Award className="h-8 w-8 text-wyse-accent" />,
      stat: "10X Bonus"
    },
    {
      title: "Monthly Distributions",
      description: "Consistent payouts every 30 days with compounding options to maximize returns.",
      icon: <Clock className="h-8 w-8 text-wyse-accent" />,
      stat: "Monthly"
    },
    {
      title: "Risk Mitigation",
      description: "Smart contract audited by CertiK with insurance coverage on all pooled assets.",
      icon: <Shield className="h-8 w-8 text-wyse-accent" />,
      stat: "Secured"
    },
    {
      title: "Instant Liquidity",
      description: "Flexible withdrawal options with no lock-up periods after initial vesting.",
      icon: <Zap className="h-8 w-8 text-wyse-accent" />,
      stat: "Flexible"
    },
    {
    title: "Community Empowered",
      description: "Your stake gives you direct influence over protocol evolution and reward structures.",
      icon: <Users className="h-8 w-8 text-wyse-accent" />,
      stat: "Your Voice"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-wyse-dark to-wyse-darkblue" id="opportunity">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-wyse-accent/10 text-wyse-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            LIQUIDITY PROGRAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Maximize Your Crypto Holdings
          </h2>
          <p className="text-xl text-wyse-lightblue max-w-3xl mx-auto">
            The WYSE Liquidity Pool offers institutional-grade yields with decentralized flexibility. 
            Participate in our tiered rewards program with benefits scaling with commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-wyse-darkblue/50 rounded-xl p-8 border border-wyse-darkblue/80 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <BarChart2 className="mr-3 text-wyse-accent" />
              Why Choose WYSE LP?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-wyse-dark/30 p-6 rounded-lg border border-wyse-darkblue/50 hover:border-wyse-accent/30 transition-all"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-wyse-dark/50 rounded-lg p-3 mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                      <div className="text-wyse-accent font-bold">{benefit.stat}</div>
                    </div>
                  </div>
                  <p className="text-wyse-lightblue text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-wyse-darkblue/50 rounded-xl p-8 border border-wyse-darkblue/80 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-white flex items-center">
                <DollarSign className="mr-3 text-wyse-accent" />
                Performance Metrics
              </h3>
              <span className="text-xs bg-wyse-accent/10 text-wyse-accent px-3 py-1 rounded-full">
                LIVE DATA
              </span>
            </div>
            
            <PriceComparisonChart />
            
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-wyse-dark/30 p-3 rounded-lg">
                <div className="text-wyse-lightblue text-sm">TVL</div>
                <div className="text-white font-bold">$5.28M</div>
              </div>
              <div className="bg-wyse-dark/30 p-3 rounded-lg">
                <div className="text-wyse-lightblue text-sm">Participants</div>
                <div className="text-white font-bold">500+</div>
              </div>
              <div className="bg-wyse-dark/30 p-3 rounded-lg">
                <div className="text-wyse-lightblue text-sm">Avg. ROI</div>
                <div className="text-white font-bold">16%+</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Grow Your Portfolio?</h3>
            <p className="text-wyse-lightblue mb-6">
              Join institutional investors and savvy individuals benefiting from our liquidity program.
              Start with as little as $100 in equivalent assets.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="https://wysechain.com/register" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-wyse-accent to-wyse-accent-dark hover:opacity-90 text-white transition-all duration-300 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-wyse-accent/20 hover:shadow-wyse-accent/40"
            >
              Join Liquidity Pool
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/ecosystem" 
              className="inline-flex items-center justify-center bg-transparent hover:bg-wyse-dark/50 text-white border border-wyse-lightblue/30 transition-all duration-300 px-8 py-4 rounded-lg font-medium text-lg"
            >
              Ecosystem
            </Link>
          </div>
          
          <div className="mt-6 text-wyse-lightblue/80 text-sm flex items-center justify-center">
            <Shield className="h-4 w-4 mr-2" />
            All pools are audited and insured against smart contract vulnerabilities
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;