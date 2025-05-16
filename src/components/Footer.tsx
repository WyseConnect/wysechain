
import React from 'react';
import { Link } from 'react-router-dom';
import WyseLogo from './WyseLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Careers", path: "/Career" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Whitepaper", path: "/resources/whitepaper" },
        { name: "Documentation", path: "/resources/documentation" },
        { name: "FAQ", path: "/resources/faq" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", path: "/legal/terms-of-service" },
        { name: "Privacy Policy", path: "/legal/privacy-policy" },
        { name: "Cookie Policy", path: "/legal/cookie-policy" },
        { name: "Compliance", path: "/legal/compliance" }
      ]
    }
  ];

  return (
    <footer className="bg-wyse-darkblue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <WyseLogo className="mb-4" />
            <p className="text-wyse-lightblue mb-4 max-w-sm">
              Pioneering the future of blockchain and digital opportunities through our comprehensive ecosystem of decentralized services and innovative technology.
            </p>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold text-wyse-light">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-wyse-lightblue hover:text-wyse-light transition-colors duration-300 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-wyse-light/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-wyse-lightblue/80">
            Copyright &copy; {currentYear}. Powered by WYSE Blockchain Technology Ltd. All rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['twitter', 'facebook', 'linkedin', 'instagram', 'youtube'].map((social) => (
              <a 
                key={social} 
                href={`#${social}`} 
                className="text-wyse-lightblue hover:text-wyse-light transition-colors duration-300"
                aria-label={social}
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
