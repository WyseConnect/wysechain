
import React from 'react';
import { Separator } from "@/components/ui/separator";

const TokenPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 wyse-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">WYSE <span className="text-wyse-light">Connect Token</span></h1>
            <p className="text-xl text-wyse-lightblue">The native utility token powering the WYSE Blockchain ecosystem.</p>
          </div>
        </div>
      </section>

      {/* Token Information */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Token <span className="text-wyse-light">Details</span></h2>
              
              <div className="space-y-5">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-wyse-lightblue">Token Name</span>
                    <span className="text-white font-medium">Wyse Connect</span>
                  </div>
                  <Separator className="bg-wyse-light/20" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-wyse-lightblue">Token Symbol</span>
                    <span className="text-white font-medium">WYSE</span>
                  </div>
                  <Separator className="bg-wyse-light/20" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-wyse-lightblue">Token Decimal</span>
                    <span className="text-white font-medium">6</span>
                  </div>
                  <Separator className="bg-wyse-light/20" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-wyse-lightblue">Token Type</span>
                    <span className="text-white font-medium">SPL</span>
                  </div>
                  <Separator className="bg-wyse-light/20" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-wyse-lightblue">Market Supply</span>
                    <span className="text-white font-medium">10,000,000,000</span>
                  </div>
                  <Separator className="bg-wyse-light/20" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-wyse-lightblue">Contract Address</span>
                    <span className="text-white font-medium truncate"><a href="https://solscan.io/token/6HkMcaCTkdchYdcheq815o13j3zQQoN2otxiTSJGGUFr">6HkMcaCTkdchYdcheq815o13j3zQQoN2otxiTSJGGUFr</a></span>
                  </div>
                  <Separator className="bg-wyse-light/20" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 p-4 bg-wyse-dark/50 rounded-full flex items-center justify-center border-4 border-wyse-light/20">
                <img 
                  src="https://raw.githubusercontent.com/WyseConnect/Official-Logo/main/wyse-logo.png" 
                  alt="WYSE Token Logo" 
                  className="w-48 h-48 object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Token <span className="text-wyse-light">Utility</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-wyse-dark/50 p-6 rounded-xl border border-wyse-light/20">
              <div className="h-12 w-12 bg-wyse-light rounded-lg flex items-center justify-center mb-4">
                <span className="text-wyse-dark text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Governance</h3>
              <p className="text-wyse-lightblue">WYSE token holders can vote on important protocol decisions and ecosystem development.</p>
            </div>
            
            <div className="bg-wyse-dark/50 p-6 rounded-xl border border-wyse-light/20">
              <div className="h-12 w-12 bg-wyse-light rounded-lg flex items-center justify-center mb-4">
                <span className="text-wyse-dark text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Transactions</h3>
              <p className="text-wyse-lightblue">Used for payments, transfers, and transaction fees within the WYSE ecosystem.</p>
            </div>
            
            <div className="bg-wyse-dark/50 p-6 rounded-xl border border-wyse-light/20">
              <div className="h-12 w-12 bg-wyse-light rounded-lg flex items-center justify-center mb-4">
                <span className="text-wyse-dark text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Staking</h3>
              <p className="text-wyse-lightblue">Stake WYSE tokens to earn rewards and participate in network security.</p>
            </div>
            
            <div className="bg-wyse-dark/50 p-6 rounded-xl border border-wyse-light/20">
              <div className="h-12 w-12 bg-wyse-light rounded-lg flex items-center justify-center mb-4">
                <span className="text-wyse-dark text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Platform Access</h3>
              <p className="text-wyse-lightblue">Access premium features and services across the WYSE platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Token <span className="text-wyse-light">Distribution</span></h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-wyse-dark/50 p-6 rounded-xl border border-wyse-light/20">
                <h3 className="text-xl font-semibold mb-4 text-white">Allocation</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-wyse-lightblue">Public Sale</span>
                      <span className="text-white">30%</span>
                    </div>
                    <div className="w-full bg-wyse-dark rounded-full h-2.5">
                      <div className="bg-wyse-light h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-wyse-lightblue">Team & Advisors</span>
                      <span className="text-white">20%</span>
                    </div>
                    <div className="w-full bg-wyse-dark rounded-full h-2.5">
                      <div className="bg-wyse-light h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-wyse-lightblue">Ecosystem Growth</span>
                      <span className="text-white">25%</span>
                    </div>
                    <div className="w-full bg-wyse-dark rounded-full h-2.5">
                      <div className="bg-wyse-light h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-wyse-lightblue">Reserves</span>
                      <span className="text-white">15%</span>
                    </div>
                    <div className="w-full bg-wyse-dark rounded-full h-2.5">
                      <div className="bg-wyse-light h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-wyse-lightblue">Community Incentives</span>
                      <span className="text-white">10%</span>
                    </div>
                    <div className="w-full bg-wyse-dark rounded-full h-2.5">
                      <div className="bg-wyse-light h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-wyse-dark/50 p-6 rounded-xl border border-wyse-light/20">
                <h3 className="text-xl font-semibold mb-4 text-white">Vesting Schedule</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-wyse-light font-medium mb-2">Public Sale Tokens</h4>
                    <p className="text-wyse-lightblue text-sm">20% unlocked at TGE, remaining vested over 6 months</p>
                  </div>
                  
                  <div>
                    <h4 className="text-wyse-light font-medium mb-2">Team & Advisors</h4>
                    <p className="text-wyse-lightblue text-sm">12-month cliff, then vested over 24 months</p>
                  </div>
                  
                  <div>
                    <h4 className="text-wyse-light font-medium mb-2">Ecosystem Growth</h4>
                    <p className="text-wyse-lightblue text-sm">10% unlocked at TGE, remaining vested over 36 months</p>
                  </div>
                  
                  <div>
                    <h4 className="text-wyse-light font-medium mb-2">Reserves</h4>
                    <p className="text-wyse-lightblue text-sm">Locked for 24 months, then vested over 24 months</p>
                  </div>
                  
                  <div>
                    <h4 className="text-wyse-light font-medium mb-2">Community Incentives</h4>
                    <p className="text-wyse-lightblue text-sm">Released according to community programs and initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">How to <span className="text-wyse-light">Buy WYSE</span></h2>
            <p className="text-xl text-wyse-lightblue mb-10">Get started with WYSE Connect token in a few simple steps.</p>
            
            <div className="bg-wyse-dark/50 p-8 rounded-xl border border-wyse-light/20 inline-block">
              <button className="bg-gradient-to-r from-wyse-light to-wyse-cyan hover:from-wyse-cyan hover:to-wyse-light text-wyse-dark font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                Buy WYSE Token
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenPage;
