
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is WYSE Blockchain Technology?",
          answer: "WYSE Blockchain Technology is a comprehensive blockchain-powered ecosystem designed to empower individuals and businesses through decentralized finance and innovation. Our platform combines advanced blockchain technology with user-friendly interfaces to provide secure, efficient, and accessible financial services and digital solutions."
        },
        {
          question: "When was WYSE founded?",
          answer: "WYSE Blockchain Technology LTD was incorporated in the UK on April 11th, 2025, under company number 16381921, as registered with Companies House in Cardiff."
        },
        {
          question: "What problems does WYSE solve?",
          answer: "WYSE addresses several key challenges in the current financial and digital landscape, including high transaction costs, limited access to financial services, centralized control of data, lack of interoperability between systems, and complex user experiences. Our solutions provide faster, more cost-effective transactions, greater accessibility, decentralized governance, seamless integration with existing systems, and intuitive user interfaces."
        }
      ]
    },
    {
      category: "Technology",
      questions: [
        {
          question: "What blockchain technology does WYSE use?",
          answer: "WYSE uses a proprietary blockchain protocol built on a modified Proof-of-Stake consensus mechanism that prioritizes energy efficiency, transaction speed, and security. Our blockchain incorporates advanced features like sharding and layer-2 solutions for enhanced scalability."
        },
        {
          question: "How does WYSE ensure security?",
          answer: "WYSE implements multiple layers of security, including cryptographic encryption, decentralized validation nodes, regular security audits by third-party firms, and advanced anomaly detection systems. Our platform is designed with security-first principles and undergoes continuous testing and improvement."
        },
        {
          question: "What is WYSE Signal?",
          answer: "WYSE Signal is our oracle system that connects our blockchain with real-world data sources. It enables smart contracts to interact with external data feeds, APIs, and payment systems, expanding the capabilities and applications of our blockchain technology."
        },
        {
          question: "How does WYSE achieve interoperability?",
          answer: "WYSE achieves interoperability through our cross-chain bridge technology, allowing seamless asset transfers between WYSE and other major blockchains. We also utilize standardized APIs and protocols to ensure our ecosystem can integrate with existing financial and technological systems."
        }
      ]
    },
    {
      category: "Tokens & Economics",
      questions: [
        {
          question: "What is the WYSE token?",
          answer: "The WYSE token is the native utility token of our ecosystem, used for transaction fees, governance voting, staking rewards, and accessing premium features. It plays a central role in aligning incentives across the network and enabling decentralized governance."
        },
        {
          question: "How can I acquire WYSE tokens?",
          answer: "WYSE tokens can be acquired through our liquidity pools, participating in our staking program, or purchasing from supported cryptocurrency exchanges. Please visit the Opportunity page for more information on token acquisition options."
        },
        {
          question: "What is the total supply of WYSE tokens?",
          answer: "The total supply of WYSE tokens is capped at 1 billion tokens. The distribution is designed to ensure long-term sustainability, with allocations for development, ecosystem growth, liquidity provision, and community incentives."
        },
        {
          question: "How does the staking mechanism work?",
          answer: "Our staking mechanism allows WYSE token holders to lock their tokens in the network to help secure it and earn rewards. Staking participants receive rewards proportional to their stake and locking period, with options for flexible and fixed-term staking."
        }
      ]
    },
    {
      category: "Using WYSE",
      questions: [
        {
          question: "How do I create a WYSE wallet?",
          answer: "To create a WYSE wallet, download our mobile app or visit our web platform. Follow the guided setup process, which includes creating a secure password and backup recovery phrase. Make sure to store your recovery phrase in a safe, offline location."
        },
        {
          question: "Are there any fees for using WYSE services?",
          answer: "Yes, WYSE charges minimal fees for transactions and certain services to maintain network security and sustainability. Fee structures vary by service, with discounts available for WYSE token holders and long-term users. Detailed fee schedules are available in our documentation."
        },
        {
          question: "What countries is WYSE available in?",
          answer: "WYSE services are available globally, with some exceptions due to regulatory restrictions. We continuously work on expanding our geographical coverage while ensuring compliance with local regulations. Check our website for the most up-to-date list of supported regions."
        },
        {
          question: "How can I get support if I encounter issues?",
          answer: "For support, you can contact our customer service team through our website, email at support@wyseblockchain.com, or through our community channels. We also offer extensive self-help documentation and FAQs to assist with common questions and issues."
        }
      ]
    },
    {
      category: "Development & Integration",
      questions: [
        {
          question: "Can I build applications on the WYSE platform?",
          answer: "Yes, WYSE provides a comprehensive development framework for building decentralized applications. Our platform includes SDKs in multiple programming languages, developer documentation, APIs, and testing environments to support third-party development."
        },
        {
          question: "Does WYSE offer APIs for integration?",
          answer: "Yes, WYSE offers extensive API documentation and integration guides for businesses and developers who want to connect their systems with our blockchain infrastructure. Our APIs support various functions including payments, data verification, and asset management."
        },
        {
          question: "How can I become a node operator?",
          answer: "To become a node operator, you need to meet the minimum hardware requirements, stake the required amount of WYSE tokens, and complete the node registration process. Detailed instructions are available in our documentation section."
        },
        {
          question: "What developer resources are available?",
          answer: "WYSE provides comprehensive developer resources including SDKs, API documentation, code examples, tutorials, a developer forum, and a testnet environment. We also offer grants and technical support for promising projects building on our platform."
        }
      ]
    }
  ];
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Filter questions based on search query
  const filteredFAQs = searchQuery.trim() === "" 
    ? faqCategories 
    : faqCategories.map(category => ({
        category: category.category,
        questions: category.questions.filter(
          q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
               q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8 gap-4">
          <HelpCircle className="text-wyse-light h-8 w-8" />
          <h1 className="text-4xl font-bold text-wyse-light">Frequently Asked Questions</h1>
        </div>
        
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-wyse-light/50" />
            <Input 
              type="text" 
              placeholder="Search questions..." 
              className="pl-10 bg-wyse-dark/50 border-wyse-light/20 text-white"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <div className="space-y-10">
          {filteredFAQs.map((category, index) => (
            category.questions.length > 0 && (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">{category.category}</h2>
                <Accordion type="single" collapsible className="bg-wyse-darkblue/30 rounded-lg overflow-hidden">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${category.category}-${faqIndex}`} className="border-b border-wyse-light/20 last:border-b-0">
                      <AccordionTrigger className="text-wyse-lightblue hover:text-wyse-light px-4">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-200 bg-wyse-dark/20 px-4 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          ))}
          
          {filteredFAQs.every(category => category.questions.length === 0) && (
            <div className="text-center py-10">
              <p className="text-wyse-lightblue text-lg">No results found for "{searchQuery}"</p>
              <p className="text-gray-400 mt-2">Try a different search term or browse the categories.</p>
            </div>
          )}
        </div>
        
        <div className="mt-12 p-6 bg-wyse/10 rounded-lg border border-wyse-light/20">
          <h3 className="text-xl font-bold mb-4 text-wyse-light">Still have questions?</h3>
          <p className="text-gray-200 mb-4">
            Can't find the answer you're looking for? Please contact our support team for assistance.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-4 py-2 bg-wyse-light text-wyse-dark rounded-md hover:bg-wyse-cyan transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
