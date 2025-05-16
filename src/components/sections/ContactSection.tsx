import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
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

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-wyse-light" />,
      title: "Email Us",
      content: "info@wysechain.com",
      href: "mailto:info@wysechain.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-wyse-light" />,
      title: "Call Us",
      content: "+1 555 123 4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-wyse-light" />,
      title: "Visit Us",
      content: "128 City Rd, London EC1V 2NX, UK",
      href: "#location-map"
    }
  ];

  return (
    <section className="section-padding bg-wyse-darkblue hex-pattern-bg" id="contact">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Contact <span className="text-wyse-light">Us</span></h2>
        <p className="section-subtitle text-wyse-lightblue">
          Have questions about WYSE Blockchain Technology or need assistance? Get in touch with our team.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="feature-card flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                    <a 
                      href={method.href} 
                      className="text-wyse-lightblue hover:text-wyse-light transition-colors duration-300"
                    >
                      {method.content}
                    </a>
                  </div>
                </div>
              ))}

              <div className="feature-card mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'linkedin', 'instagram', 'youtube'].map((social) => (
                    <a 
                      key={social} 
                      href={`#${social}`} 
                      className="bg-wyse-dark/50 hover:bg-wyse-light/20 rounded-full p-3 transition-colors duration-300"
                      aria-label={social}
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 text-wyse-light"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="feature-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-wyse-lightblue mb-1">
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
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-wyse-lightblue mb-1">
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
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="block text-sm font-medium text-wyse-lightblue mb-1">
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
                  <option value="Partnership">Partnership</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-wyse-lightblue mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-wyse-dark/50 border border-wyse-light/20 rounded-md px-4 py-2 text-white focus:ring-wyse-light focus:border-wyse-light"
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center bg-wyse-light hover:bg-wyse-cyan transition-colors duration-300 text-wyse-dark py-3 px-4 rounded-md font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </button>

                {submitSuccess && (
                  <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                    <p>Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                )}
              </div>
            </form>

            {/* Map Section */}
            <div className="feature-card mt-8" id="location-map">
              <h3 className="text-lg font-semibold text-white mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
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
              <p className="text-wyse-lightblue mt-2">
                128 City Rd, London EC1V 2NX, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;