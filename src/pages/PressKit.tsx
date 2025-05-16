
import React from 'react';
import { FileText, Link, Newspaper } from 'lucide-react';

const PressKit = () => {
  const mediaContacts = [
    { name: "Media Inquiries", email: "press@wyseblockchain.com" },
    { name: "Partnership Opportunities", email: "partnerships@wyseblockchain.com" },
    { name: "Investor Relations", email: "investors@wyseblockchain.com" }
  ];

  const pressReleases = [
    { 
      title: "WYSE Blockchain Announces Major Platform Update", 
      date: "May 10, 2025",
      summary: "New features and improvements coming to the WYSE ecosystem" 
    },
    { 
      title: "WYSE Token Listed on Major Exchange", 
      date: "April 15, 2025",
      summary: "Expanding accessibility and liquidity for WYSE token holders" 
    },
    { 
      title: "WYSE Blockchain Partners with Global Financial Institution", 
      date: "March 22, 2025",
      summary: "Strategic partnership aimed at accelerating blockchain adoption" 
    },
    { 
      title: "WYSE Blockchain Foundation Established", 
      date: "February 8, 2025",
      summary: "Dedicated to education and development in blockchain technology" 
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 wyse-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white"><span className="text-wyse-light">WYSE</span> Press Kit</h1>
            <p className="text-xl text-wyse-lightblue">Media resources and information about WYSE Blockchain Technology.</p>
          </div>
        </div>
      </section>

      {/* Brand Assets Section */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Brand <span className="text-wyse-light">Assets</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-wyse-dark/50 rounded-xl p-8 border border-wyse-light/20">
              <h3 className="text-2xl font-semibold mb-4 text-white">Logos & Visual Identity</h3>
              <p className="text-wyse-lightblue mb-6">Download official WYSE Blockchain logos, icons, and brand guidelines for media use.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 rounded-lg flex items-center justify-center">
                  <div className="text-wyse-dark text-2xl font-bold">
                    <span className="text-wyse">WYSE</span>
                  </div>
                </div>
                <div className="bg-wyse-dark p-6 rounded-lg flex items-center justify-center">
                  <div className="text-white text-2xl font-bold">
                    <span className="text-wyse-light">WYSE</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center bg-wyse-light hover:bg-wyse-light/80 text-wyse-dark font-medium py-2 px-4 rounded-md transition-colors">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Logo Pack
                </button>
                <button className="flex items-center bg-wyse-dark hover:bg-wyse-dark/80 text-wyse-light font-medium py-2 px-4 rounded-md border border-wyse-light transition-colors">
                  <FileText className="h-4 w-4 mr-2" />
                  Brand Guidelines
                </button>
              </div>
            </div>
            
            <div className="bg-wyse-dark/50 rounded-xl p-8 border border-wyse-light/20">
              <h3 className="text-2xl font-semibold mb-4 text-white">Company Information</h3>
              <p className="text-wyse-lightblue mb-6">WYSE Blockchain Technology is a pioneering blockchain ecosystem designed to empower individuals and businesses through decentralized finance.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-wyse-light rounded-full p-2 mr-4">
                    <FileText className="h-4 w-4 text-wyse-dark" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Founded</h4>
                    <p className="text-wyse-lightblue">2024</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-wyse-light rounded-full p-2 mr-4">
                    <Link className="h-4 w-4 text-wyse-dark" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Website</h4>
                    <p className="text-wyse-lightblue">www.wyseblockchain.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-wyse-light rounded-full p-2 mr-4">
                    <Newspaper className="h-4 w-4 text-wyse-dark" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Media Contact</h4>
                    <p className="text-wyse-lightblue">press@wyseblockchain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Press <span className="text-wyse-light">Releases</span></h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-wyse-dark/50 rounded-xl p-6 border border-wyse-light/20 hover:border-wyse-light/40 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{release.title}</h3>
                      <p className="text-wyse-lightblue mt-1">{release.summary}</p>
                    </div>
                    <span className="text-sm text-wyse-light">{release.date}</span>
                  </div>
                  <div className="mt-4">
                    <button className="text-wyse-light hover:text-wyse-light/80 font-medium flex items-center transition-colors">
                      Read Full Release
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <a href="#" className="bg-wyse-dark hover:bg-wyse-dark/80 text-wyse-light font-medium py-2 px-8 rounded-md border border-wyse-light transition-all">
              View All Press Releases
            </a>
          </div>
        </div>
      </section>

      {/* Media Contacts Section */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Media <span className="text-wyse-light">Contacts</span></h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaContacts.map((contact, index) => (
              <div key={index} className="bg-wyse-dark/50 rounded-xl p-6 border border-wyse-light/20 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{contact.name}</h3>
                <a href={`mailto:${contact.email}`} className="text-wyse-light hover:text-wyse-light/80 transition-colors">
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressKit;
