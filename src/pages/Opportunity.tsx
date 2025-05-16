import React from 'react';
import { Code, Database, Shield, Users, Globe, Cpu, Link2, Key, FileText, Network, TrendingUp, PieChart, Coins, BarChart2, Lock } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Opportunity = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 wyse-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">WYSE Blockchain <span className="text-wyse-accent">Opportunities</span></h1>
            <p className="text-xl text-wyse-lightblue">Discover how you can participate in and profit from the next generation of decentralized technology.</p>
          </div>
        </div>
      </section>

      {/* Investment Potential Section */}
      <section className="py-16 bg-wyse-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Why Invest in <span className="text-wyse-accent">WYSE Ecosystem</span>?</h2>
          
          <div className="max-w-5xl mx-auto bg-wyse-darkblue/50 rounded-xl p-8 border border-wyse-accent/20 mb-12">
            <p className="text-wyse-light text-lg text-center">
              WYSE isn't just a blockchain—it's a <span className="font-semibold text-wyse-accent">self-sustaining economy</span> with multiple revenue streams. By investing early, you gain exposure to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="investment-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-accent/10 rounded-full p-3 mr-4">
                  <TrendingUp className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Token Appreciation</h3>
              </div>
              <p className="text-wyse-lightblue">
                The WYSE token powers <span className="text-wyse-light">all ecosystem services</span> (trading fees, NFT sales, staking). As adoption grows, demand increases—driving long-term value.
              </p>
              <ul className="mt-3 text-wyse-lightblue/80 space-y-1">
                <li className="flex items-start">
                  <span className="text-wyse-accent mr-2">•</span>
                  <span>Fixed supply with deflationary burns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wyse-accent mr-2">•</span>
                  <span>Revenue share from platform fees</span>
                </li>
              </ul>
            </div>

            <div className="investment-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-accent/10 rounded-full p-3 mr-4">
                  <PieChart className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Passive Income</h3>
              </div>
              <p className="text-wyse-lightblue">
                Earn <span className="text-wyse-light">without active trading</span> through staking, node operation, or liquidity provision—with APRs outperforming traditional finance.
              </p>
              <ul className="mt-3 text-wyse-lightblue/80 space-y-1">
                <li className="flex items-start">
                  <span className="text-wyse-accent mr-2">•</span>
                  <span>Up to 18% APY from staking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wyse-accent mr-2">•</span>
                  <span>DEX liquidity mining rewards</span>
                </li>
              </ul>
            </div>

            <div className="investment-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-accent/10 rounded-full p-3 mr-4">
                  <BarChart2 className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Ecosystem Synergy</h3>
              </div>
              <p className="text-wyse-lightblue">
                Each WYSE product <span className="text-wyse-light">reinforces the others</span>: AI traders use the DEX, gamers trade NFTs, and social media rewards fuel token circulation.
              </p>
              <ul className="mt-3 text-wyse-lightblue/80 space-y-1">
                <li className="flex items-start">
                  <span className="text-wyse-accent mr-2">•</span>
                  <span>Cross-platform utility boosts adoption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wyse-accent mr-2">•</span>
                  <span>Virtuous cycle of demand</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="metric-card">
              <div className="text-wyse-accent text-3xl font-bold mb-2">10x</div>
              <p className="text-wyse-lightblue">Projected ROI for early stakers</p>
            </div>
            <div className="metric-card">
              <div className="text-wyse-accent text-3xl font-bold mb-2">$50M+</div>
              <p className="text-wyse-lightblue">Potential annual ecosystem revenue</p>
            </div>
            <div className="metric-card">
              <div className="text-wyse-accent text-3xl font-bold mb-2">24/7</div>
              <p className="text-wyse-lightblue">Revenue-generating AI trading</p>
            </div>
            <div className="metric-card">
              <div className="text-wyse-accent text-3xl font-bold mb-2">5+</div>
              <p className="text-wyse-lightblue">Income streams per user</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">WYSE Blockchain <span className="text-wyse-light">Technology Stack</span></h2>
          
          <div className="max-w-4xl mx-auto bg-wyse-dark/50 rounded-xl p-8 border border-wyse-light/20 mb-12">
            <p className="text-wyse-lightblue text-lg">
              WYSE is building a comprehensive blockchain ecosystem with cutting-edge solutions across multiple layers of the technology stack. Our platform combines the security of decentralized networks with the efficiency needed for mass adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="tech-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Network className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Core Protocol Development</h3>
              </div>
              <p className="text-wyse-lightblue">
                Contribute to our high-performance blockchain protocol featuring sharding, optimized consensus mechanisms, and cross-chain interoperability solutions.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Code className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Smart Contract Platform</h3>
              </div>
              <p className="text-wyse-lightblue">
                Build and deploy decentralized applications using our EVM-compatible smart contract environment with enhanced security features and developer tools.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Database className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Decentralized Storage</h3>
              </div>
              <p className="text-wyse-lightblue">
                Participate in our distributed file storage network that offers secure, encrypted data storage with blockchain-based access control.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Shield className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Security Solutions</h3>
              </div>
              <p className="text-wyse-lightblue">
                Work on our advanced cryptographic protocols, zero-knowledge proofs, and formal verification tools for smart contract security.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Key className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Identity Management</h3>
              </div>
              <p className="text-wyse-lightblue">
                Develop decentralized identity solutions that give users control over their personal data while enabling trusted interactions.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Globe className="h-6 w-6 text-wyse-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">Web3 Infrastructure</h3>
              </div>
              <p className="text-wyse-lightblue">
                Create the foundational components for the decentralized web, including naming systems, oracles, and middleware services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Opportunities */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">How to <span className="text-wyse-accent">Profit</span> from WYSE</h2>
          <p className="text-xl text-wyse-lightblue text-center max-w-3xl mx-auto mb-12">
            The WYSE ecosystem is designed to reward participants at every level—whether you're a developer, investor, or community builder.
          </p>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="participation-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Cpu className="h-6 w-6 text-wyse-light" />
                </div>
                <h3 className="text-xl font-semibold text-white">Node Operation</h3>
              </div>
              <div className="pl-14">
                <p className="text-wyse-lightblue mb-4">
                  Run validator nodes or provide infrastructure services to earn <span className="text-wyse-light">up to 22% annual rewards</span> in WYSE tokens.
                </p>
                <ul className="text-wyse-lightblue/80 space-y-2">
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Validator nodes with staking requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Relay nodes for cross-chain communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Storage nodes for decentralized file storage</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="participation-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Code className="h-6 w-6 text-wyse-light" />
                </div>
                <h3 className="text-xl font-semibold text-white">Developer Ecosystem</h3>
              </div>
              <div className="pl-14">
                <p className="text-wyse-lightblue mb-4">
                  Earn <span className="text-wyse-light">bounties up to $50,000</span> for building core infrastructure or popular dApps on WYSE.
                </p>
                <ul className="text-wyse-lightblue/80 space-y-2">
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Core protocol development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Smart contract and dApp creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Tooling and infrastructure development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Documentation and education resources</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="participation-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Users className="h-6 w-6 text-wyse-light" />
                </div>
                <h3 className="text-xl font-semibold text-white">Community Growth</h3>
              </div>
              <div className="pl-14">
                <p className="text-wyse-lightblue mb-4">
                  Earn <span className="text-wyse-light">token rewards</span> for expanding the ecosystem through education and outreach.
                </p>
                <ul className="text-wyse-lightblue/80 space-y-2">
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Technical documentation and tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Local meetups and hackathons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Translation and localization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Community moderation and support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="participation-card">
              <div className="flex items-center mb-4">
                <div className="bg-wyse-dark rounded-full p-3 mr-4">
                  <Globe className="h-6 w-6 text-wyse-light" />
                </div>
                <h3 className="text-xl font-semibold text-white">Enterprise Adoption</h3>
              </div>
              <div className="pl-14">
                <p className="text-wyse-lightblue mb-4">
                  Receive <span className="text-wyse-light">commission bonuses</span> for bringing businesses onto the WYSE blockchain.
                </p>
                <ul className="text-wyse-lightblue/80 space-y-2">
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Supply chain tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Identity verification solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Asset tokenization platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wyse-accent mr-2">•</span>
                    <span>Decentralized finance applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Roadmap */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">WYSE <span className="text-wyse-light">Technology Roadmap</span></h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 h-full w-0.5 bg-wyse-light/20 top-0"></div>
              
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-wyse-accent flex items-center justify-center">
                    <span className="text-wyse-dark font-bold">1</span>
                  </div>
                  <div className="bg-wyse-dark/50 rounded-xl p-6 border border-wyse-light/20">
                    <h3 className="text-xl font-semibold text-white mb-2">Core Protocol Launch</h3>
                    <p className="text-wyse-lightblue">
                      Release of the WYSE mainnet with basic transaction capabilities, staking mechanics, and governance features.
                    </p>
                    <div className="mt-3 flex items-center text-wyse-accent text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>Early stakers receive 2x token bonuses</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-wyse-accent flex items-center justify-center">
                    <span className="text-wyse-dark font-bold">2</span>
                  </div>
                  <div className="bg-wyse-dark/50 rounded-xl p-6 border border-wyse-light/20">
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Contract Platform</h3>
                    <p className="text-wyse-lightblue">
                      Implementation of EVM compatibility and developer tools to enable decentralized application development.
                    </p>
                    <div className="mt-3 flex items-center text-wyse-accent text-sm">
                      <Coins className="h-4 w-4 mr-1" />
                      <span>$500,000 developer incentive program</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-wyse-accent flex items-center justify-center">
                    <span className="text-wyse-dark font-bold">3</span>
                  </div>
                  <div className="bg-wyse-dark/50 rounded-xl p-6 border border-wyse-light/20">
                    <h3 className="text-xl font-semibold text-white mb-2">Cross-Chain Interoperability</h3>
                    <p className="text-wyse-lightblue">
                      Development of bridges and protocols to enable communication with other blockchain networks.
                    </p>
                    <div className="mt-3 flex items-center text-wyse-accent text-sm">
                      <Link2 className="h-4 w-4 mr-1" />
                      <span>New revenue from cross-chain transactions</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-wyse-accent flex items-center justify-center">
                    <span className="text-wyse-dark font-bold">4</span>
                  </div>
                  <div className="bg-wyse-dark/50 rounded-xl p-6 border border-wyse-light/20">
                    <h3 className="text-xl font-semibold text-white mb-2">Decentralized Storage Network</h3>
                    <p className="text-wyse-lightblue">
                      Launch of distributed file storage system with encryption and access control features.
                    </p>
                    <div className="mt-3 flex items-center text-wyse-accent text-sm">
                      <Database className="h-4 w-4 mr-1" />
                      <span>Node operators earn storage fees</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-wyse-accent flex items-center justify-center">
                    <span className="text-wyse-dark font-bold">5</span>
                  </div>
                  <div className="bg-wyse-dark/50 rounded-xl p-6 border border-wyse-light/20">
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Solutions</h3>
                    <p className="text-wyse-lightblue">
                      Development of specialized modules for business use cases including supply chain, identity, and asset tokenization.
                    </p>
                    <div className="mt-3 flex items-center text-wyse-accent text-sm">
                      <BarChart2 className="h-4 w-4 mr-1" />
                      <span>Enterprise adoption drives token demand</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wyse hex-pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Secure Your <span className="text-wyse-light">Financial Future</span> with WYSE</h2>
            <p className="text-xl text-wyse-lightblue mb-8">
              Early participants in successful blockchain ecosystems have historically seen life-changing returns. Don't miss this opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-wyse-accent to-wyse-light text-wyse-dark font-bold py-4 px-8 rounded-md shadow-lg shadow-wyse-accent/30 hover:shadow-xl hover:shadow-wyse-accent/40 transition-all duration-300">
                Invest Now
              </button>
              <button className="bg-transparent border-2 border-wyse-light text-wyse-light font-bold py-4 px-8 rounded-md hover:bg-wyse-light/10 transition-all duration-300">
                ROI Calculator
              </button>
            </div>
            
            <p className="mt-6 text-wyse-lightblue text-sm">
              Past performance doesn't guarantee future results, but <span className="text-wyse-light">early adoption matters</span> in blockchain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opportunity;