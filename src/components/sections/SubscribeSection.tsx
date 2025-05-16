
import React, { useState } from 'react';
import { Mail, Send, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail('');
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-wyse-darkblue hex-pattern-bg" id="subscribe">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Stay <span className="text-wyse-light">Updated</span></h2>
        <p className="section-subtitle text-wyse-lightblue">
          Subscribe to receive the latest updates, ecosystem developments, and investment opportunities.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="feature-card">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-wyse-light/20 p-4 rounded-full">
                <Bell className="h-8 w-8 text-wyse-light" />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
              Join Our Newsletter
            </h3>
            
            <p className="text-wyse-lightblue text-center mb-8">
              Be the first to know about new features, token events, and exclusive opportunities in the WYSE ecosystem.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-wyse-dark/50 border border-wyse-light/20 rounded-md px-4 py-3 text-white focus:ring-wyse-light focus:border-wyse-light"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 bg-wyse-light hover:bg-wyse-cyan transition-colors duration-300 text-wyse-dark py-3 px-6 rounded-md font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </button>
              </div>
              
              {submitSuccess && (
                <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                  <p>Thanks for subscribing! You'll receive updates soon.</p>
                </div>
              )}
            </form>
            
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Have Questions?</h4>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-wyse-light hover:text-wyse-cyan transition-colors duration-300"
                >
                  Contact Us <Mail className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Ready to Invest?</h4>
                <Link 
                  to="https://wysechain.com/register" 
                  className="inline-flex items-center text-wyse-accent hover:text-wyse-cyan transition-colors duration-300"
                >
                  Join Liquidity Pool <Send className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
