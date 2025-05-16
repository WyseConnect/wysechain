
import React from 'react';
import { Bitcoin, TrendingUp } from 'lucide-react';
import PriceComparisonChart from '@/components/PriceComparisonChart';

const About = () => {
  const blockchainDefinition = "It is a decentralized digital ledger that records and stores data securely across a network of computers. It is the foundation of technologies like cryptocurrency, smart contracts, and NFTs.";

  const blockchainFeatures = [
    "Distributed Ledger Technology (DLT)",
    "Immutable Records",
    "Smart Contracts",
    "Consensus Mechanisms",
    "Public & Private Key Cryptography"
  ];

  const bitcoinDefinition = "Bitcoin (BTC) is the world's first cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto. It is a peer-to-peer digital currency designed to operate without the need for a central authority like a bank or government.";

  const cryptoDefinition = "It is a type of digital currency that uses blockchain technology and cryptography to secure transactions, control the creation of new units, and verify the transfer of assets.";
  
  const cryptoDifferences = "Unlike traditional currencies (fiat), cryptocurrencies are decentralized and not controlled by governments or financial institutions.";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 wyse-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About <span className="text-wyse-light">Blockchain</span> Technology</h1>
            <p className="text-xl text-wyse-lightblue">Understanding the revolutionary technology behind WYSE Blockchain and the future of digital finance.</p>
          </div>
        </div>
      </section>

      {/* What is Blockchain Section */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">What is <span className="text-wyse-light">Blockchain</span>?</h2>
              <p className="text-wyse-lightblue mb-6">{blockchainDefinition}</p>
              
              <h3 className="text-xl font-semibold mb-4 text-white">Key Features:</h3>
              <ul className="space-y-3">
                {blockchainFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-wyse-light h-2 w-2 rounded-full"></div>
                    </div>
                    <span className="ml-3 text-wyse-lightblue">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hex-pattern-bg rounded-xl p-8 border border-wyse-light/20">
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                  <div className="feature-card p-5 text-center">
                    <h4 className="text-white font-semibold mb-2">Security</h4>
                    <p className="text-sm text-wyse-lightblue">Cryptographic encryption ensures data security</p>
                  </div>
                  <div className="feature-card p-5 text-center">
                    <h4 className="text-white font-semibold mb-2">Transparency</h4>
                    <p className="text-sm text-wyse-lightblue">All transactions are visible on the public ledger</p>
                  </div>
                  <div className="feature-card p-5 text-center">
                    <h4 className="text-white font-semibold mb-2">Decentralization</h4>
                    <p className="text-sm text-wyse-lightblue">No central point of control or failure</p>
                  </div>
                  <div className="feature-card p-5 text-center">
                    <h4 className="text-white font-semibold mb-2">Immutability</h4>
                    <p className="text-sm text-wyse-lightblue">Records cannot be altered once confirmed</p>
                  </div>
                </div>
                
                <div className="hexagon bg-wyse w-28 h-28 flex items-center justify-center border-4 border-wyse-light/30 shadow-lg shadow-wyse-light/10">
                  <div className="text-center">
                    <p className="text-white font-bold text-xl">BLOCK<br />CHAIN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution of Commerce & Money */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">The Evolution of <span className="text-wyse-light">Commerce & Money</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-wyse-light">Early Trade Systems</h3>
              <div className="space-y-4">
                <div className="bg-wyse-dark/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Barter System</h4>
                  <p className="text-sm text-wyse-lightblue">Direct exchange of goods and services without using money</p>
                </div>
                <div className="bg-wyse-dark/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Commodity & Metal Money</h4>
                  <p className="text-sm text-wyse-lightblue">Using valuable goods like gold and silver as currency</p>
                </div>
              </div>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-wyse-light">Modern Financial Systems</h3>
              <div className="space-y-4">
                <div className="bg-wyse-dark/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Paper Money & Banking</h4>
                  <p className="text-sm text-wyse-lightblue">Centralized financial systems with paper currency</p>
                </div>
                <div className="bg-wyse-dark/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">E-Commerce & Digital Payments</h4>
                  <p className="text-sm text-wyse-lightblue">Online transactions and electronic payment methods</p>
                </div>
              </div>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-wyse-light">Future of Finance</h3>
              <div className="bg-wyse-dark/50 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Blockchain & Crypto</h4>
                <p className="text-sm text-wyse-lightblue">Decentralized finance, digital assets, and trustless systems</p>
                <div className="mt-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-wyse-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bitcoin & Cryptocurrency Section */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="feature-card">
              <div className="flex items-center mb-6">
                <Bitcoin className="h-8 w-8 text-wyse-accent mr-3" />
                <h2 className="text-3xl font-bold text-white">What is <span className="text-wyse-accent">Bitcoin</span>?</h2>
              </div>
              
              <p className="text-wyse-lightblue mb-6">{bitcoinDefinition}</p>
              
              <h3 className="text-xl font-semibold mb-4 text-white">Main Goals of Bitcoin:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-wyse-dark/50 rounded-lg text-center">
                  <h4 className="text-wyse-accent font-medium mb-2">Decentralization of Money</h4>
                </div>
                <div className="p-4 bg-wyse-dark/50 rounded-lg text-center">
                  <h4 className="text-wyse-accent font-medium mb-2">Limited Supply</h4>
                </div>
                <div className="p-4 bg-wyse-dark/50 rounded-lg text-center">
                  <h4 className="text-wyse-accent font-medium mb-2">Financial Security</h4>
                </div>
              </div>
            </div>
            
            <div className="feature-card">
              <h2 className="text-3xl font-bold mb-6 text-white">What is <span className="text-wyse-light">Cryptocurrency</span>?</h2>
              
              <p className="text-wyse-lightblue mb-4">{cryptoDefinition}</p>
              <p className="text-wyse-lightblue mb-6">{cryptoDifferences}</p>
              
              <h3 className="text-xl font-semibold mb-4 text-white">Main Goals of Cryptocurrency:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-wyse-dark/50 rounded-lg text-center">
                  <h4 className="text-wyse-light font-medium mb-2">Decentralization of Finance</h4>
                </div>
                <div className="p-4 bg-wyse-dark/50 rounded-lg text-center">
                  <h4 className="text-wyse-light font-medium mb-2">Security and Privacy</h4>
                </div>
                <div className="p-4 bg-wyse-dark/50 rounded-lg text-center">
                  <h4 className="text-wyse-light font-medium mb-2">Global Accessibility</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bitcoin Price Growth Chart */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Bitcoin vs WYSE Token Growth<span className="text-wyse-light">(2025-2030)</span></h2>
          
           <div className="mt-10">
            <PriceComparisonChart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
