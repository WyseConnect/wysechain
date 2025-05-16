
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-wyse-light">Privacy Policy</h1>
        <div className="bg-wyse-darkblue/30 rounded-lg p-6 shadow-lg">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-6 pr-4">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">1. Introduction</h2>
                <p className="text-gray-200">
                  WYSE Blockchain Technology LTD ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">Personal Information</h3>
                <p className="text-gray-200">
                  We may collect personal information that you voluntarily provide to us when you register for an account, express interest in our products or services, or otherwise contact us. This information may include:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-200 space-y-1">
                  <li>Name and contact details</li>
                  <li>Email address and password</li>
                  <li>Blockchain wallet addresses</li>
                  <li>Transaction data</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 mt-4 text-wyse-cyan">Automatically Collected Information</h3>
                <p className="text-gray-200">
                  When you access our services, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-200 space-y-1">
                  <li>Device information (browser type, IP address, device type)</li>
                  <li>Log information (access times, pages viewed)</li>
                  <li>Location information</li>
                  <li>Usage information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">3. How We Use Your Information</h2>
                <p className="text-gray-200">
                  We may use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-200 space-y-1">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Sending administrative information and updates</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Monitoring and analyzing trends, usage, and activities</li>
                  <li>Detecting, preventing, and addressing technical issues</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">4. Data Sharing and Disclosure</h2>
                <p className="text-gray-200">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-200 space-y-1">
                  <li>Service providers who perform services on our behalf</li>
                  <li>Business partners with whom we offer joint products or services</li>
                  <li>Law enforcement or other governmental authorities as required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">5. Data Security</h2>
                <p className="text-gray-200">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">6. Your Rights</h2>
                <p className="text-gray-200">
                  Depending on your location, you may have various rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-200 space-y-1">
                  <li>Right to access your personal information</li>
                  <li>Right to rectification of inaccurate information</li>
                  <li>Right to erasure (right to be forgotten)</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">7. International Data Transfers</h2>
                <p className="text-gray-200">
                  Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have different data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-200">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">9. Contact Us</h2>
                <p className="text-gray-200">
                  If you have any questions about this Privacy Policy, please contact us at privacy@wyseblockchain.com.
                </p>
              </section>

              <div className="border-t border-wyse-light/20 mt-6 pt-6">
                <p className="text-gray-300 text-sm">
                  Last updated: May 15, 2025
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
