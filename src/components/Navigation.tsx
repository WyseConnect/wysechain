
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// Import the WYSE logo (we'll save it as a component)
import WyseLogo from './WyseLogo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Token', path: '/token' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Opportunity', path: '/opportunity' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-wyse-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <WyseLogo className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-wyse-light px-3 py-2 rounded-md ${
                  isActive(link.path) ? 'text-wyse-light border-b-2 border-wyse-light' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="https://wysechain.com/login"
              className="ml-4 bg-gradient-to-r from-wyse-light to-wyse-cyan hover:from-wyse-cyan hover:to-wyse-light text-wyse-dark font-medium py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Login
            </Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-wyse-light hover:bg-wyse-darkblue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-wyse-darkblue`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'bg-wyse-light/20 text-wyse-light'
                  : 'text-white hover:bg-wyse-dark/50 hover:text-wyse-light'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="https://wysechain.com/login"
            onClick={closeMenu}
            className="block px-3 py-2 mt-4 bg-gradient-to-r from-wyse-light to-wyse-cyan text-wyse-dark text-center font-medium rounded-md shadow-md"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
