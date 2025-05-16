
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, FileText, LineChart } from "lucide-react";

const Whitepaper = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <FileText className="text-wyse-light h-8 w-8" />
            <h1 className="text-4xl font-bold text-wyse-light">WYSE Whitepaper</h1>
          </div>
          <Button className="bg-wyse-light hover:bg-wyse-cyan text-wyse-dark flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="bg-wyse-darkblue/30 rounded-lg p-6 shadow-lg">
          <ScrollArea className="h-[70vh]">
            <div className="space-y-8 pr-4">
              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">Abstract</h2>
                <p className="text-gray-200 leading-relaxed">
                  This whitepaper introduces WYSE Blockchain Technology, a comprehensive blockchain-powered ecosystem designed to address the limitations of current blockchain systems while enhancing accessibility, interoperability, and sustainability. By implementing a novel consensus mechanism, advanced scalability solutions, and intuitive user interfaces, WYSE aims to bridge the gap between traditional finance and the expanding digital economy, creating a more inclusive and efficient global financial infrastructure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">1. Introduction</h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The evolution of blockchain technology has transformed numerous industries, particularly finance, by introducing decentralized, transparent, and secure systems. However, despite significant advancements, widespread adoption remains hindered by several challenges, including scalability limitations, high energy consumption, complex user experiences, and regulatory uncertainties.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  WYSE Blockchain Technology addresses these challenges through a comprehensive ecosystem that combines technological innovation with practical applications. Our platform is designed to serve both individual users seeking alternative financial services and enterprises requiring secure, efficient blockchain solutions for their operations.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">2. Market Analysis</h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The global blockchain market is projected to grow from $7.18 billion in 2022 to $163.83 billion by 2029, at a CAGR of 56.3%. This growth is driven by increasing digitalization across industries, rising demand for secure transaction mechanisms, and growing interest in decentralized finance (DeFi) solutions.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">2.1 Current Challenges</h3>
                <ul className="list-disc pl-6 text-gray-200 space-y-2 mb-4">
                  <li>Scalability constraints limiting transaction throughput</li>
                  <li>High energy consumption of proof-of-work systems</li>
                  <li>Complex user interfaces creating barriers to entry</li>
                  <li>Limited interoperability between blockchain networks</li>
                  <li>Regulatory uncertainties affecting adoption</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">2.2 Market Opportunity</h3>
                <p className="text-gray-200 leading-relaxed">
                  These challenges present significant opportunities for innovative blockchain solutions that prioritize efficiency, accessibility, and compliance. WYSE is positioned to capitalize on these opportunities by offering a comprehensive ecosystem that addresses the limitations of existing platforms while extending blockchain benefits to a broader audience.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">3. The WYSE Ecosystem</h2>
                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">3.1 Technology Architecture</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  WYSE is built on a multi-layered architecture designed for scalability, security, and interoperability:
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-2 mb-4">
                  <li><span className="font-semibold">Core Layer:</span> The foundation of the WYSE ecosystem, handling consensus, validation, and the immutable ledger.</li>
                  <li><span className="font-semibold">Protocol Layer:</span> Defines the rules and mechanisms for transactions, smart contracts, and interoperability.</li>
                  <li><span className="font-semibold">Application Layer:</span> User-facing applications, services, and interfaces built on the WYSE platform.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">3.2 Consensus Mechanism</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  WYSE implements a modified Proof-of-Stake (PoS) consensus mechanism that enhances efficiency while maintaining security. Our Delegated Proof-of-Stake (DPoS) approach allows token holders to select validator nodes through a democratic process, ensuring both decentralization and performance.
                </p>
                <div className="bg-wyse/10 p-4 rounded-lg border border-wyse-light/20 mb-4">
                  <p className="text-sm text-gray-300">
                    The WYSE consensus mechanism achieves a transaction throughput of 10,000+ TPS while reducing energy consumption by 99.9% compared to traditional Proof-of-Work systems.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">3.3 Scalability Solutions</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  To address the scalability challenges facing blockchain networks, WYSE implements:
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-2 mb-4">
                  <li><span className="font-semibold">Sharding:</span> Partitioning the network to process transactions in parallel.</li>
                  <li><span className="font-semibold">Layer-2 Solutions:</span> Off-chain processing for microtransactions and high-frequency operations.</li>
                  <li><span className="font-semibold">Optimized Data Storage:</span> Efficient storage mechanisms that reduce blockchain bloat.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">3.4 WYSE Signal</h3>
                <p className="text-gray-200 leading-relaxed">
                  WYSE Signal is our advanced oracle system that connects on-chain and off-chain data. This system allows smart contracts to interact with external data sources, APIs, and payment systems, expanding the practical applications of our blockchain technology.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">4. Tokenomics</h2>
                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">4.1 WYSE Token</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The WYSE token is the native utility token of our ecosystem, serving multiple functions:
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-2 mb-4">
                  <li>Transaction fees and gas costs within the ecosystem</li>
                  <li>Governance voting rights for protocol upgrades and changes</li>
                  <li>Staking rewards for network validators and liquidity providers</li>
                  <li>Access to premium features and services</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">4.2 Token Distribution</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The total supply of WYSE tokens is capped at 1 billion, with the following distribution:
                </p>
                <div className="bg-wyse/10 p-4 rounded-lg border border-wyse-light/20 mb-4">
                  <ul className="text-gray-300 space-y-1">
                    <li>Ecosystem Development: 30% (300 million)</li>
                    <li>Public Sale: 20% (200 million)</li>
                    <li>Team and Advisors: 15% (150 million)</li>
                    <li>Liquidity Pool: 15% (150 million)</li>
                    <li>Community Rewards: 10% (100 million)</li>
                    <li>Reserve: 10% (100 million)</li>
                  </ul>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Team and advisor tokens are subject to a 3-year vesting period with a 6-month cliff, ensuring long-term alignment of incentives.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">5. Applications and Use Cases</h2>
                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">5.1 Decentralized Finance (DeFi)</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  WYSE provides a comprehensive DeFi suite including liquidity pools, lending protocols, yield farming, and synthetic assets, all built with security and usability in mind.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">5.2 Enterprise Solutions</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  For businesses, WYSE offers supply chain tracking, document verification, secure digital identity, and payment solutions that integrate with existing systems while leveraging blockchain benefits.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">5.3 Cross-Chain Bridge</h3>
                <p className="text-gray-200 leading-relaxed">
                  Our cross-chain bridge technology enables seamless asset transfers between WYSE and other major blockchain networks, fostering an interconnected blockchain ecosystem.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">6. Roadmap</h2>
                <div className="space-y-6">
                  <div className="bg-wyse/10 p-4 rounded-lg border-l-4 border-wyse-light">
                    <h3 className="text-xl font-semibold mb-1 text-wyse-light">Phase 1: Foundation (Q2 2025)</h3>
                    <ul className="list-disc pl-6 text-gray-200 space-y-1">
                      <li>Core blockchain infrastructure development</li>
                      <li>Testnet launch and community testing</li>
                      <li>Initial wallet and explorer release</li>
                      <li>Strategic partnerships formation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-wyse/10 p-4 rounded-lg border-l-4 border-wyse-cyan">
                    <h3 className="text-xl font-semibold mb-1 text-wyse-light">Phase 2: Expansion (Q4 2025)</h3>
                    <ul className="list-disc pl-6 text-gray-200 space-y-1">
                      <li>Mainnet launch</li>
                      <li>DeFi platform deployment</li>
                      <li>WYSE Signal oracle system implementation</li>
                      <li>Developer SDK and API documentation release</li>
                    </ul>
                  </div>
                  
                  <div className="bg-wyse/10 p-4 rounded-lg border-l-4 border-wyse-accent">
                    <h3 className="text-xl font-semibold mb-1 text-wyse-light">Phase 3: Integration (Q2 2026)</h3>
                    <ul className="list-disc pl-6 text-gray-200 space-y-1">
                      <li>Cross-chain bridge deployment</li>
                      <li>Enterprise solutions launch</li>
                      <li>Mobile application release</li>
                      <li>Ecosystem grants program initiation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-wyse/10 p-4 rounded-lg border-l-4 border-gray-400">
                    <h3 className="text-xl font-semibold mb-1 text-wyse-light">Phase 4: Maturation (Q4 2026)</h3>
                    <ul className="list-disc pl-6 text-gray-200 space-y-1">
                      <li>Governance framework implementation</li>
                      <li>Layer-2 scaling solutions</li>
                      <li>Global expansion and regulatory compliance</li>
                      <li>Advanced DeFi instruments</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">7. Team</h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  WYSE is led by a diverse team of blockchain experts, financial specialists, and technology innovators with extensive experience in building scalable, secure systems. Our leadership team combines technical expertise with business acumen to drive the development and adoption of the WYSE ecosystem.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  The company is supported by an advisory board of industry leaders in finance, technology, regulatory compliance, and blockchain innovation, providing strategic guidance and domain expertise.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-wyse-light">8. Conclusion</h2>
                <p className="text-gray-200 leading-relaxed">
                  WYSE Blockchain Technology represents a significant step forward in the evolution of blockchain systems, addressing the key limitations that have hindered widespread adoption while extending the benefits of this transformative technology to a broader audience. By combining technical innovation with practical applications and user-friendly interfaces, WYSE aims to accelerate the transition to a more inclusive, efficient, and interconnected global financial ecosystem.
                </p>
              </section>

              <div className="border-t border-wyse-light/20 mt-8 pt-6 flex justify-between items-center">
                <div>
                  <p className="text-gray-300 text-sm">
                    WYSE Blockchain Technology LTD
                  </p>
                  <p className="text-gray-300 text-sm">
                    Company Number: 16381921
                  </p>
                </div>
                <p className="text-gray-300 text-sm">
                  Version 1.0 (May 15, 2025)
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
