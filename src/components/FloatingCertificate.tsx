import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface FloatingCertificateProps {
  visible: boolean;
  onClose: () => void;
}

const FloatingCertificate: React.FC<FloatingCertificateProps> = ({ visible, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 md:p-6">
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-gray-800">Certificate of Incorporation</h3>
                  <h4 className="text-base md:text-lg uppercase tracking-wide text-gray-700">of a</h4>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-gray-800">Private Limited Company</h3>
                </div>
                
                <div className="mt-4 md:mt-6 text-center">
                  <p className="text-gray-700">Company Number <span className="font-bold">16381921</span></p>
                </div>
                
                <div className="mt-4 md:mt-6 text-gray-800 text-center">
                  <p className="mb-3 text-sm md:text-base">
                    The Registrar of Companies for England and Wales, hereby certifies that
                  </p>
                  <p className="text-lg md:text-xl font-bold mb-3">WYSE BLOCKCHAIN TECHNOLOGY LTD</p>
                  <p className="mb-3 text-sm md:text-base">
                    is this day incorporated under the Companies Act 2006 as a private company, that the company is limited by shares, and the situation of its registered office is in England and Wales
                  </p>
                </div>
                
                <div className="mt-4 md:mt-6 text-gray-700 text-center">
                  <p className="font-semibold text-sm md:text-base">Given at Companies House, Cardiff, on 11th April 2025</p>
                </div>
                
                <div className="mt-6 md:mt-8 border-t border-gray-300 pt-4 text-center">
                  <div className="h-12 md:h-16 flex items-center justify-center">
                    <div className="bg-black w-full max-w-xs h-6 md:h-8"></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">*N16381921*</p>
                </div>
                
                <div className="mt-4 md:mt-6 flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src="/assets/certificate.png" 
                      alt="UK Government Coat of Arms" 
                      className="h-8 md:h-10"
                    />
                    <p className="ml-2 text-xs text-gray-600">Companies House</p>
                  </div>
                  <div className="rounded-full border border-gray-400 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <p className="text-xs text-gray-600">SEAL</p>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 text-center">
                  <a 
                    href="/assets/certificate.png" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View full certificate image <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Close button positioned at bottom-right inside frame */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                aria-label="Close certificate"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const CertificateButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm rounded-md hover:bg-white/20 transition-colors mx-auto"
      >
        <span className="text-white text-sm md:text-base">View Certificate</span>
      </button>
      <FloatingCertificate 
        visible={isVisible} 
        onClose={() => setIsVisible(false)} 
      />
    </>
  );
};

export default FloatingCertificate;