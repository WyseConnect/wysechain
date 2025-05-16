
import React from 'react';
import { Briefcase, Users } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Blockchain Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for experienced blockchain developers to help build our core infrastructure and smart contracts."
    },
    {
      title: "Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to create intuitive and responsive user interfaces for our blockchain platform."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Help us share our vision with the world through strategic marketing initiatives and campaigns."
    },
    {
      title: "Community Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Build and nurture our growing community across various platforms and channels."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 wyse-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join <span className="text-wyse-light">WYSE</span> Blockchain</h1>
            <p className="text-xl text-wyse-lightblue">Build the future of decentralized finance with us and make a meaningful impact in the blockchain space.</p>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our <span className="text-wyse-light">Culture</span></h2>
              <p className="text-wyse-lightblue mb-6">
                At WYSE Blockchain, we believe in fostering an environment of innovation, collaboration, and growth. 
                Our team is composed of passionate individuals who are committed to revolutionizing the blockchain industry.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-wyse-light rounded-full p-2 mr-4">
                    <Users className="h-6 w-6 text-wyse-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Collaborative Environment</h3>
                    <p className="text-wyse-lightblue">We value teamwork and believe that the best solutions come from diverse perspectives and collaborative efforts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-wyse-light rounded-full p-2 mr-4">
                    <Briefcase className="h-6 w-6 text-wyse-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Growth</h3>
                    <p className="text-wyse-lightblue">We invest in our team's development through continuous learning opportunities, mentorship, and career advancement pathways.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hex-pattern-bg rounded-xl p-8 border border-wyse-light/20">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">Benefits & Perks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="feature-card p-5 text-center">
                  <h4 className="text-wyse-light font-semibold mb-2">Remote-First Culture</h4>
                  <p className="text-sm text-wyse-lightblue">Work from anywhere in the world</p>
                </div>
                <div className="feature-card p-5 text-center">
                  <h4 className="text-wyse-light font-semibold mb-2">Competitive Compensation</h4>
                  <p className="text-sm text-wyse-lightblue">Salary + WYSE token allocation</p>
                </div>
                <div className="feature-card p-5 text-center">
                  <h4 className="text-wyse-light font-semibold mb-2">Flexible Hours</h4>
                  <p className="text-sm text-wyse-lightblue">Work when you're most productive</p>
                </div>
                <div className="feature-card p-5 text-center">
                  <h4 className="text-wyse-light font-semibold mb-2">Health & Wellness</h4>
                  <p className="text-sm text-wyse-lightblue">Comprehensive health benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Open <span className="text-wyse-light">Positions</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-wyse-dark/50 rounded-xl p-6 border border-wyse-light/20 hover:border-wyse-light/40 transition-all">
                <h3 className="text-2xl font-semibold mb-2 text-white">{position.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-wyse-darkblue px-3 py-1 rounded-full text-xs text-wyse-lightblue">{position.department}</span>
                  <span className="bg-wyse-darkblue px-3 py-1 rounded-full text-xs text-wyse-lightblue">{position.location}</span>
                  <span className="bg-wyse-darkblue px-3 py-1 rounded-full text-xs text-wyse-lightblue">{position.type}</span>
                </div>
                <p className="text-wyse-lightblue mb-4">{position.description}</p>
                <button className="bg-wyse-light hover:bg-wyse-light/80 text-wyse-dark font-medium py-2 px-6 rounded-md transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-wyse-lightblue mb-6">Don't see a position that matches your skills?</p>
            <a href="/contact" className="bg-gradient-to-r from-wyse-light to-wyse-cyan hover:from-wyse-cyan hover:to-wyse-light text-wyse-dark font-medium py-2 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
