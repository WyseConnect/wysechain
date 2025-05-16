
import React from 'react';
import { Banknote, BarChart2, ShoppingBag, Gift, Users, Globe, ArrowRightCircle, Zap, Signal, FileText, Book, HelpCircle, Shield, Link } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Ecosystem = () => {
  const ecosystemComponents = [
    {
      title: "WYSE Token",
      description: "The utility token driving the ecosystem",
      icon: <Banknote className="h-10 w-10 text-wyse-accent" />,
      details: "WYSE Token is the native cryptocurrency of the WYSE Blockchain ecosystem, used for transactions, staking, governance, and accessing platform services.",
      color: "from-wyse-accent/20 to-wyse-accent/5",
      borderColor: "border-wyse-accent/30"
    },
    {
      title: "WYSE Trading AI",
      description: "Smart AI-powered crypto trading",
      icon: <BarChart2 className="h-10 w-10 text-wyse-light" />,
      details: "Our advanced AI trading bot uses machine learning algorithms to analyze market trends and execute profitable trading strategies with minimal human intervention.",
      color: "from-wyse-light/20 to-wyse-light/5",
      borderColor: "border-wyse-light/30"
    },
    {
      title: "WyseSignal",
      description: "Premium trading signal provider",
      icon: <Signal className="h-10 w-10 text-wyse-cyan" />,
      details: "Access professional grade trading signals with up to 98% accuracy. Our team of expert analysts monitor the markets 24/7 to identify the most profitable trades and deliver them directly to you.",
      color: "from-wyse-cyan/20 to-wyse-cyan/5",
      borderColor: "border-wyse-cyan/30"
    },
    {
      title: "NFT Marketplace",
      description: "Digital assets and collectibles",
      icon: <ShoppingBag className="h-10 w-10 text-wyse-accent" />,
      details: "A platform for creating, buying, selling, and trading unique digital assets, including art, music, videos, and other forms of creative expression.",
      color: "from-wyse-accent/20 to-wyse-accent/5",
      borderColor: "border-wyse-accent/30"
    },
    {
      title: "Play to Earn",
      description: "Earn while gaming",
      icon: <Gift className="h-10 w-10 text-wyse-light" />,
      details: "A revolutionary gaming platform where players can earn WYSE tokens and other rewards through gameplay, challenges, and competitions.",
      color: "from-wyse-light/20 to-wyse-light/5",
      borderColor: "border-wyse-light/30"
    },
    {
      title: "WYSE SIGNAL Provider",
      description: "Premium trading insight",
      icon: <Zap className="h-10 w-10 text-wyse-cyan" />,
      details: "Access professional trading signals, market analysis, and investment recommendations from experienced crypto analysts and traders.",
      color: "from-wyse-cyan/20 to-wyse-cyan/5",
      borderColor: "border-wyse-cyan/30"
    },
    {
      title: "WYSE Connect",
      description: "Blockchain-based social media",
      icon: <Users className="h-10 w-10 text-wyse-light" />,
      details: "A decentralized social networking platform where users control their own data, content, and digital identity while earning rewards for engagement.",
      color: "from-wyse-light/20 to-wyse-light/5",
      borderColor: "border-wyse-light/30"
    },
    {
      title: "WYSE DEX",
      description: "Decentralized trading platform",
      icon: <Globe className="h-10 w-10 text-wyse-accent" />,
      details: "A decentralized exchange for trading cryptocurrencies without intermediaries, offering lower fees, enhanced security, and true ownership of assets.",
      color: "from-wyse-accent/20 to-wyse-accent/5",
      borderColor: "border-wyse-accent/30"
    },
    {
      title: "Launchpad",
      description: "Incubating and launching blockchain projects",
      icon: <ArrowRightCircle className="h-10 w-10 text-wyse-light" />,
      details: "An incubator and launch platform for promising blockchain startups, providing funding, technical support, marketing, and access to the WYSE community.",
      color: "from-wyse-light/20 to-wyse-light/5",
      borderColor: "border-wyse-light/30"
    }
  ];

  const resourceLinks = [
    {
      title: "Whitepaper",
      description: "Comprehensive technical details about WYSE Blockchain",
      icon: <FileText className="h-6 w-6 text-wyse-light" />,
      path: "#"
    },
    {
      title: "Documentation",
      description: "Developer resources and technical guides",
      icon: <FileText className="h-6 w-6 text-wyse-light" />,
      path: "#"
    },
    {
      title: "Blog",
      description: "News, updates and insights from the WYSE team",
      icon: <Book className="h-6 w-6 text-wyse-light" />,
      path: "#"
    },
    {
      title: "FAQ",
      description: "Answers to frequently asked questions",
      icon: <HelpCircle className="h-6 w-6 text-wyse-light" />,
      path: "#"
    }
  ];

  const legalLinks = [
    {
      title: "Terms of Service",
      description: "Rules governing the use of WYSE services",
      icon: <FileText className="h-6 w-6 text-wyse-accent" />,
      path: "#"
    },
    {
      title: "Privacy Policy",
      description: "How we collect and process your information",
      icon: <FileText className="h-6 w-6 text-wyse-accent" />,
      path: "#"
    },
    {
      title: "Cookie Policy",
      description: "How we use cookies on our platform",
      icon: <FileText className="h-6 w-6 text-wyse-accent" />,
      path: "#"
    },
    {
      title: "Compliance",
      description: "Our regulatory compliance framework",
      icon: <Shield className="h-6 w-6 text-wyse-accent" />,
      path: "#"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 wyse-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">The <span className="text-wyse-light">WYSE</span> Ecosystem</h1>
            <p className="text-xl text-wyse-lightblue">A comprehensive blockchain-powered ecosystem designed to empower individuals and businesses through decentralized technologies.</p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">What is <span className="text-wyse-light">WYSE Blockchain Technology</span>?</h2>
          
          <div className="max-w-3xl mx-auto bg-wyse-dark/50 rounded-xl p-8 border border-wyse-light/20 mb-12">
            <p className="text-wyse-lightblue text-lg">
              It is a comprehensive blockchain-powered ecosystem designed to empower individuals and businesses by providing opportunities through decentralized finance, cryptocurrency, trading, and digital innovation. It aims to pioneer the future of blockchain and digital opportunities by offering a variety of services and platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="feature-card text-center">
              <div className="hexagon bg-wyse-dark/50 w-20 h-20 mx-auto mb-4">
                <div className="text-wyse-light">
                  <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Decentralization and Transparency</h3>
              <p className="text-wyse-lightblue">Building trustless systems with complete visibility and no central points of control</p>
            </div>
            
            <div className="feature-card text-center">
              <div className="hexagon bg-wyse-dark/50 w-20 h-20 mx-auto mb-4">
                <div className="text-wyse-light">
                  <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Multiple Revenue Streams</h3>
              <p className="text-wyse-lightblue">Diversified income opportunities through various ecosystem components</p>
            </div>
            
            <div className="feature-card text-center">
              <div className="hexagon bg-wyse-dark/50 w-20 h-20 mx-auto mb-4">
                <div className="text-wyse-light">
                  <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 16v1.5a2.5 2.5 0 0 1-5 0V16m6.5-6.5c-.5-1.5-2.5-1.5-3.5-.5-.5.5-1.5 2.5 0 3.5 1.5 1 3 1 4.5-.5M8.5 8a2.5 2.5 0 0 1 5 0v1.5"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovative Ecosystem</h3>
              <p className="text-wyse-lightblue">Continuously evolving platforms and services leveraging cutting-edge blockchain technology</p>
            </div>
            <div className="feature-card text-center">
            <div className="hexagon bg-wyse-dark/50 w-20 h-20 mx-auto mb-4">
              <div className="text-wyse-light">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20l9-5-9-5-9 5 9 5z"/><path d="M12 12V4"/></svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Security and Scalability</h3>
            <p className="text-wyse-lightblue">Robust infrastructure ensuring safe transactions and sustainable growth at scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">
            <span className="text-wyse-light">WYSE</span> Ecosystem Components
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemComponents.map((component, index) => (
              <div 
                key={index} 
                className={`feature-card bg-gradient-to-br ${component.color} ${component.borderColor}`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-wyse-dark/50 rounded-full p-3 mr-4">
                    {component.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{component.title}</h3>
                </div>
                <p className="text-wyse-lightblue/80 text-sm mb-3">{component.description}</p>
                <p className="text-wyse-lightblue">{component.details}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-20 max-w-5xl mx-auto">
            <div className="hexagon bg-wyse w-40 h-40 flex items-center justify-center border-4 border-wyse-light/30 mx-auto">
              <div className="text-center">
                <p className="text-white font-bold text-xl">WYSE</p>
                <p className="text-wyse-light text-sm">BLOCKCHAIN</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-wyse-lightblue text-lg">
                All components of the WYSE ecosystem work together synergistically, creating a comprehensive blockchain experience where users can seamlessly access multiple services with the WYSE Token at the center.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
