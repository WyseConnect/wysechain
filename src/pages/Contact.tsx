import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-wyse-light" />,
      title: "Email Address",
      details: ["info@wysechain.com", "support@wysechain.com"],
      action: {
        text: "Send Email",
        href: "mailto:info@wysechain.com"
      }
    },
    {
      icon: <Phone className="h-6 w-6 text-wyse-light" />,
      title: "Phone Number",
      details: ["+1 555 123 4567", "+44 20 1234 5678"],
      action: {
        text: "Call Now",
        href: "tel:+15551234567"
      }
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-wyse-light" />,
      title: "Live Chat",
      details: ["Available 24/7 for quick assistance"],
      action: {
        text: "Chat Now",
        href: "#chat"
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 wyse-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact <span className="text-wyse-light">WYSE</span></h1>
            <p className="text-xl text-wyse-lightblue">Have questions about WYSE Blockchain Technology or need assistance? Get in touch with our team.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-wyse-darkblue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="feature-card text-center">
                <div className="mx-auto bg-wyse-dark/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{info.title}</h3>
                
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-wyse-lightblue">{detail}</p>
                  ))}
                </div>
                
                <a 
                  href={info.action.href}
                  className="inline-flex items-center justify-center bg-wyse-light/20 hover:bg-wyse-light text-wyse-light hover:text-wyse-dark transition-colors duration-300 px-4 py-2 rounded-md font-medium text-sm"
                >
                  {info.action.text}
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto feature-card bg-wyse/10">
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-wyse-light mr-3" />
              <h3 className="text-xl font-semibold text-white">Our Location</h3>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.4570262947148!2d-0.08964819139376573!3d51.527351443546294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671d5df0b%3A0x368e18d29207f698!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e1!3m2!1sen!2sph!4v1747314989529!5m2!1sen!2sph" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
                title="WYSE Blockchain London Office Location"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">London Office</h4>
                <p className="text-wyse-lightblue">
                  128 City Rd<br />
                  London, EC1V 2NX<br />
                  United Kingdom
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Office Hours</h4>
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-wyse-light mr-2" />
                  <p className="text-wyse-lightblue">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-wyse-light mr-2" />
                  <p className="text-wyse-lightblue">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-wyse">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3">
                <div className="feature-card h-full">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send Us a <span className="text-wyse-light">Message</span></h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className=" text-sm font-medium text-wyse-lightblue mb-1">
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-wyse-dark/50 border border-wyse-light/20 rounded-md px-4 py-2 text-white focus:ring-wyse-light focus:border-wyse-light"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className=" text-sm font-medium text-wyse-lightblue mb-1">
                          Your Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-wyse-dark/50 border border-wyse-light/20 rounded-md px-4 py-2 text-white focus:ring-wyse-light focus:border-wyse-light"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className=" text-sm font-medium text-wyse-lightblue mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-wyse-dark/50 border border-wyse-light/20 rounded-md px-4 py-2 text-white focus:ring-wyse-light focus:border-wyse-light"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Liquidity Pool">Liquidity Pool</option>
                        <option value="Affiliate Program">Affiliate Program</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className=" text-sm font-medium text-wyse-lightblue mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-wyse-dark/50 border border-wyse-light/20 rounded-md px-4 py-2 text-white focus:ring-wyse-light focus:border-wyse-light"
                        placeholder="Let us know how we can help..."
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center items-center bg-wyse-light hover:bg-wyse-cyan transition-colors duration-300 text-wyse-dark py-3 px-4 rounded-md font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                      </button>

                      {submitSuccess && (
                        <div className="mt-4 bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                          <p>Your message has been sent successfully. We'll get back to you soon!</p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;