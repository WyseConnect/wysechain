
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Code, FileCode, Terminal } from "lucide-react";

const Documentation = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8 gap-4">
          <BookOpen className="text-wyse-light h-8 w-8" />
          <h1 className="text-4xl font-bold text-wyse-light">WYSE Documentation</h1>
        </div>
        
        <p className="text-xl text-wyse-lightblue mb-8">
          Comprehensive guides and technical documentation for the WYSE Blockchain ecosystem.
        </p>

        <Tabs defaultValue="platform" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="platform">Platform Overview</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="sdk">SDK & Libraries</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          </TabsList>
          
          <div className="bg-wyse-darkblue/30 rounded-lg shadow-lg">
            <TabsContent value="platform" className="p-0">
              <ScrollArea className="h-[60vh]">
                <div className="p-6">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">Platform Architecture</h2>
                    <p className="text-gray-200">
                      The WYSE Blockchain platform is built on a multi-layer architecture designed for scalability, security, and interoperability.
                    </p>
                    
                    <div className="mt-6 grid md:grid-cols-3 gap-4">
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan flex items-center">
                            <FileCode className="mr-2 h-5 w-5" />
                            Core Layer
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-200">
                            The foundation of the WYSE ecosystem, handling consensus, validation, and the immutable ledger.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan flex items-center">
                            <Terminal className="mr-2 h-5 w-5" />
                            Protocol Layer
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-200">
                            Defines the rules and mechanisms for transactions, smart contracts, and interoperability.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan flex items-center">
                            <Code className="mr-2 h-5 w-5" />
                            Application Layer
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-200">
                            User-facing applications, services, and interfaces built on the WYSE platform.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </section>
                  
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">Key Components</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-wyse-dark/50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-wyse-light">WYSE Node</h3>
                        <p className="text-gray-200">
                          The core software that participates in the WYSE network, validating transactions and maintaining the blockchain.
                        </p>
                        <div className="mt-2 text-gray-200">
                          <h4 className="font-semibold text-wyse-cyan">System Requirements:</h4>
                          <ul className="list-disc list-inside mt-1 pl-4 text-sm">
                            <li>Modern CPU with 4+ cores</li>
                            <li>8GB+ RAM</li>
                            <li>100GB+ SSD storage</li>
                            <li>Reliable internet connection</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-wyse-dark/50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-wyse-light">WYSE Signal</h3>
                        <p className="text-gray-200">
                          Our advanced oracle system that connects on-chain and off-chain data for enhanced smart contract capabilities.
                        </p>
                      </div>
                      
                      <div className="bg-wyse-dark/50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-wyse-light">WYSE Bridge</h3>
                        <p className="text-gray-200">
                          Cross-chain infrastructure enabling asset transfers and communication between WYSE and other blockchain networks.
                        </p>
                      </div>
                      
                      <div className="bg-wyse-dark/50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-wyse-light">WYSE Wallet</h3>
                        <p className="text-gray-200">
                          Secure storage and management of WYSE tokens and other digital assets within the ecosystem.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">Getting Started</h2>
                    <p className="text-gray-200 mb-4">
                      Follow these steps to begin using the WYSE Blockchain platform:
                    </p>
                    
                    <div className="bg-wyse/10 p-6 rounded-lg border border-wyse-light/20">
                      <ol className="list-decimal list-inside space-y-4 text-gray-200">
                        <li>
                          <span className="font-semibold text-wyse-light">Create a WYSE Wallet</span>
                          <p className="mt-1 text-sm pl-6">Download the WYSE Wallet application or use our web interface to create a new wallet.</p>
                        </li>
                        <li>
                          <span className="font-semibold text-wyse-light">Obtain WYSE Tokens</span>
                          <p className="mt-1 text-sm pl-6">Purchase WYSE tokens through our liquidity pools or supported exchanges.</p>
                        </li>
                        <li>
                          <span className="font-semibold text-wyse-light">Connect to the Network</span>
                          <p className="mt-1 text-sm pl-6">Use your wallet to connect to the WYSE network and access platform services.</p>
                        </li>
                        <li>
                          <span className="font-semibold text-wyse-light">Explore the Ecosystem</span>
                          <p className="mt-1 text-sm pl-6">Discover applications and services built on the WYSE platform.</p>
                        </li>
                      </ol>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="api">
              <ScrollArea className="h-[60vh]">
                <div className="p-6">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">API Overview</h2>
                    <p className="text-gray-200 mb-4">
                      The WYSE Blockchain API allows developers to interact with the WYSE network programmatically. Our RESTful API provides access to blockchain data, transaction processing, and more.
                    </p>
                    
                    <div className="bg-wyse-dark/50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-wyse-light">Base URL</h3>
                      <code className="bg-black/30 p-2 rounded text-wyse-lightblue block">
                        https://api.wyseblockchain.com/v1
                      </code>
                    </div>
                    
                    <div className="bg-wyse-dark/50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 text-wyse-light">Authentication</h3>
                      <p className="text-gray-200 mb-2">
                        All API requests require an API key passed in the <code className="bg-black/30 p-1 rounded text-wyse-lightblue">X-API-Key</code> header.
                      </p>
                      <p className="text-gray-200">
                        Register for an API key in the WYSE Developer Portal.
                      </p>
                    </div>
                  </section>
                  
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">Endpoints</h2>
                    
                    <div className="space-y-6">
                      <div className="border border-wyse-light/20 rounded-lg overflow-hidden">
                        <div className="bg-wyse-dark p-4">
                          <div className="flex items-center">
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mr-3">GET</span>
                            <code className="text-wyse-lightblue">/accounts/{'{address}'}</code>
                          </div>
                        </div>
                        <div className="p-4 bg-wyse/10">
                          <h4 className="font-semibold mb-2 text-wyse-light">Get Account Details</h4>
                          <p className="text-sm text-gray-200">
                            Returns details about a specific account, including balance and transaction history.
                          </p>
                        </div>
                      </div>
                      
                      <div className="border border-wyse-light/20 rounded-lg overflow-hidden">
                        <div className="bg-wyse-dark p-4">
                          <div className="flex items-center">
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">POST</span>
                            <code className="text-wyse-lightblue">/transactions</code>
                          </div>
                        </div>
                        <div className="p-4 bg-wyse/10">
                          <h4 className="font-semibold mb-2 text-wyse-light">Submit Transaction</h4>
                          <p className="text-sm text-gray-200">
                            Submits a signed transaction to the WYSE network.
                          </p>
                        </div>
                      </div>
                      
                      <div className="border border-wyse-light/20 rounded-lg overflow-hidden">
                        <div className="bg-wyse-dark p-4">
                          <div className="flex items-center">
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mr-3">GET</span>
                            <code className="text-wyse-lightblue">/blocks/{'{height}'}</code>
                          </div>
                        </div>
                        <div className="p-4 bg-wyse/10">
                          <h4 className="font-semibold mb-2 text-wyse-light">Get Block by Height</h4>
                          <p className="text-sm text-gray-200">
                            Returns details about a specific block in the WYSE blockchain.
                          </p>
                        </div>
                      </div>
                      
                      <div className="border border-wyse-light/20 rounded-lg overflow-hidden">
                        <div className="bg-wyse-dark p-4">
                          <div className="flex items-center">
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mr-3">GET</span>
                            <code className="text-wyse-lightblue">/market/prices</code>
                          </div>
                        </div>
                        <div className="p-4 bg-wyse/10">
                          <h4 className="font-semibold mb-2 text-wyse-light">Get Market Prices</h4>
                          <p className="text-sm text-gray-200">
                            Returns current market prices for WYSE tokens and related assets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">Rate Limits</h2>
                    <p className="text-gray-200 mb-4">
                      API rate limits are based on your subscription tier:
                    </p>
                    
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-wyse-dark">
                          <th className="p-3 text-left text-wyse-light">Tier</th>
                          <th className="p-3 text-left text-wyse-light">Requests per Minute</th>
                          <th className="p-3 text-left text-wyse-light">Requests per Day</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-wyse/10 border-b border-wyse-dark/30">
                          <td className="p-3 text-gray-200">Basic</td>
                          <td className="p-3 text-gray-200">60</td>
                          <td className="p-3 text-gray-200">10,000</td>
                        </tr>
                        <tr className="bg-wyse/10 border-b border-wyse-dark/30">
                          <td className="p-3 text-gray-200">Professional</td>
                          <td className="p-3 text-gray-200">300</td>
                          <td className="p-3 text-gray-200">100,000</td>
                        </tr>
                        <tr className="bg-wyse/10">
                          <td className="p-3 text-gray-200">Enterprise</td>
                          <td className="p-3 text-gray-200">1,000</td>
                          <td className="p-3 text-gray-200">Unlimited</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </div>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="sdk">
              <ScrollArea className="h-[60vh]">
                <div className="p-6">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">SDK Overview</h2>
                    <p className="text-gray-200">
                      The WYSE SDK provides developers with tools to build applications on the WYSE Blockchain platform. SDKs are available for multiple programming languages.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan">JavaScript SDK</CardTitle>
                          <CardDescription className="text-gray-300">For web and Node.js applications</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-gray-200">
                            <code className="bg-black/30 p-2 rounded text-wyse-lightblue block mb-2">
                              npm install @wyse/blockchain-sdk
                            </code>
                            <a href="#" className="text-wyse-light hover:underline">View on GitHub</a>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan">Python SDK</CardTitle>
                          <CardDescription className="text-gray-300">For data analysis and backend services</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-gray-200">
                            <code className="bg-black/30 p-2 rounded text-wyse-lightblue block mb-2">
                              pip install wyse-blockchain
                            </code>
                            <a href="#" className="text-wyse-light hover:underline">View on GitHub</a>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan">Java SDK</CardTitle>
                          <CardDescription className="text-gray-300">For enterprise applications</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-gray-200">
                            <code className="bg-black/30 p-2 rounded text-wyse-lightblue block mb-2">
                              Maven: com.wyse.blockchain:sdk:1.0.0
                            </code>
                            <a href="#" className="text-wyse-light hover:underline">View on GitHub</a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </section>
                  
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">Code Examples</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-wyse-light">JavaScript: Create a Wallet</h3>
                      <pre className="bg-wyse-dark p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="text-wyse-lightblue">
{`import { WyseSDK } from '@wyse/blockchain-sdk';

// Initialize the SDK
const wyse = new WyseSDK({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet' // or 'testnet'
});

// Create a new wallet
const wallet = wyse.createWallet();

console.log('Address:', wallet.address);
console.log('Private Key:', wallet.privateKey);

// Save the wallet securely
wyse.saveWalletToKeystore(wallet, 'password123', './my-wallet.json');`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-wyse-light">Python: Query Account Balance</h3>
                      <pre className="bg-wyse-dark p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="text-wyse-lightblue">
{`from wyse_blockchain import WyseClient

# Initialize the client
client = WyseClient(api_key='YOUR_API_KEY', network='mainnet')

# Query account balance
address = '0x1234567890abcdef1234567890abcdef12345678'
balance = client.get_account_balance(address)

print(f"Balance: {balance.amount} {balance.currency}")

# Get transaction history
transactions = client.get_transactions(address, limit=10)
for tx in transactions:
    print(f"Tx: {tx.hash} | Amount: {tx.amount} | Status: {tx.status}")`}
                        </code>
                      </pre>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-wyse-light">Java: Submit Transaction</h3>
                      <pre className="bg-wyse-dark p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="text-wyse-lightblue">
{`import com.wyse.blockchain.WyseClient;
import com.wyse.blockchain.model.Transaction;
import com.wyse.blockchain.wallet.Wallet;

public class TransactionExample {
    public static void main(String[] args) {
        // Initialize client
        WyseClient client = WyseClient.builder()
            .apiKey("YOUR_API_KEY")
            .network("mainnet")
            .build();
            
        // Load wallet from keystore
        Wallet wallet = client.loadWalletFromKeystore("./my-wallet.json", "password123");
        
        // Create and sign transaction
        Transaction tx = Transaction.builder()
            .sender(wallet.getAddress())
            .recipient("0xabcdef1234567890abcdef1234567890abcdef12")
            .amount("10.5")
            .currency("WYSE")
            .build();
            
        // Sign and submit
        Transaction signedTx = client.signTransaction(tx, wallet);
        String txHash = client.submitTransaction(signedTx);
        
        System.out.println("Transaction submitted: " + txHash);
    }
}`}
                        </code>
                      </pre>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="tutorials">
              <ScrollArea className="h-[60vh]">
                <div className="p-6">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">Tutorials</h2>
                    <p className="text-gray-200 mb-6">
                      Step-by-step guides to help you build on the WYSE Blockchain platform.
                    </p>
                    
                    <div className="space-y-6">
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan">Setting Up a WYSE Node</CardTitle>
                          <CardDescription className="text-gray-300">
                            Learn how to run your own WYSE validator node
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-200 mb-4">
                            This tutorial guides you through the process of setting up and running a WYSE validator node, participating in network consensus, and earning rewards.
                          </p>
                          <div className="text-sm">
                            <span className="inline-flex items-center rounded-md bg-wyse-dark px-2 py-1 text-xs text-wyse-cyan mr-2">
                              Intermediate
                            </span>
                            <span className="text-gray-300">Estimated time: 45 minutes</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan">Building a DApp with WYSE</CardTitle>
                          <CardDescription className="text-gray-300">
                            Create your first decentralized application
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-200 mb-4">
                            Build a simple decentralized application using the WYSE SDK and smart contracts, with a focus on creating a user-friendly frontend.
                          </p>
                          <div className="text-sm">
                            <span className="inline-flex items-center rounded-md bg-wyse-dark px-2 py-1 text-xs text-wyse-cyan mr-2">
                              Beginner
                            </span>
                            <span className="text-gray-300">Estimated time: 2 hours</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan">Integrating WYSE Signal</CardTitle>
                          <CardDescription className="text-gray-300">
                            Connecting on-chain and off-chain data
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-200 mb-4">
                            Learn how to use WYSE Signal to incorporate real-world data into your smart contracts and blockchain applications.
                          </p>
                          <div className="text-sm">
                            <span className="inline-flex items-center rounded-md bg-wyse-dark px-2 py-1 text-xs text-wyse-cyan mr-2">
                              Advanced
                            </span>
                            <span className="text-gray-300">Estimated time: 1.5 hours</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-wyse/10 border-wyse-light/20">
                        <CardHeader>
                          <CardTitle className="text-wyse-cyan">Creating a Token on WYSE</CardTitle>
                          <CardDescription className="text-gray-300">
                            Deploy your own custom token
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-200 mb-4">
                            Step-by-step guide to creating, deploying, and managing your own token on the WYSE blockchain platform.
                          </p>
                          <div className="text-sm">
                            <span className="inline-flex items-center rounded-md bg-wyse-dark px-2 py-1 text-xs text-wyse-cyan mr-2">
                              Intermediate
                            </span>
                            <span className="text-gray-300">Estimated time: 1 hour</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-wyse-light">Video Guides</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-wyse-dark/50 p-4 rounded-lg">
                        <div className="aspect-video bg-black/50 mb-3 rounded flex items-center justify-center">
                          <div className="text-wyse-light">Video Thumbnail</div>
                        </div>
                        <h3 className="text-lg font-semibold mb-1 text-wyse-light">Getting Started with WYSE</h3>
                        <p className="text-sm text-gray-200">
                          An introduction to the WYSE Blockchain ecosystem and how to start using it.
                        </p>
                      </div>
                      
                      <div className="bg-wyse-dark/50 p-4 rounded-lg">
                        <div className="aspect-video bg-black/50 mb-3 rounded flex items-center justify-center">
                          <div className="text-wyse-light">Video Thumbnail</div>
                        </div>
                        <h3 className="text-lg font-semibold mb-1 text-wyse-light">Advanced Smart Contracts</h3>
                        <p className="text-sm text-gray-200">
                          Deep dive into creating complex smart contracts on the WYSE platform.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;
