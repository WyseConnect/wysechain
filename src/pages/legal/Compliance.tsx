
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, ShieldCheck } from "lucide-react";

const Compliance = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8 gap-4">
          <ShieldCheck className="text-wyse-light h-10 w-10" />
          <h1 className="text-4xl font-bold text-wyse-light">Compliance Framework</h1>
        </div>
        
        <div className="bg-wyse-darkblue/30 rounded-lg p-6 shadow-lg">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-6 pr-4">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">Regulatory Compliance Overview</h2>
                <p className="text-gray-200">
                  At WYSE Blockchain Technology LTD, we are committed to operating within the regulatory frameworks governing blockchain and cryptocurrency technologies. Our compliance program is designed to address the unique challenges of the blockchain industry and ensure adherence to applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">Regulatory Frameworks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-wyse-dark/50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Shield className="text-wyse-cyan h-6 w-6 mr-2" />
                      <h3 className="text-xl font-semibold text-wyse-cyan">AML/CFT Compliance</h3>
                    </div>
                    <p className="text-gray-200">
                      We implement robust Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) measures as required by international standards and local regulations.
                    </p>
                  </div>
                  
                  <div className="bg-wyse-dark/50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Shield className="text-wyse-cyan h-6 w-6 mr-2" />
                      <h3 className="text-xl font-semibold text-wyse-cyan">KYC Procedures</h3>
                    </div>
                    <p className="text-gray-200">
                      Our Know Your Customer (KYC) procedures verify the identity of users in accordance with regulatory requirements to prevent fraud and illicit activities.
                    </p>
                  </div>
                  
                  <div className="bg-wyse-dark/50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Shield className="text-wyse-cyan h-6 w-6 mr-2" />
                      <h3 className="text-xl font-semibold text-wyse-cyan">Data Protection</h3>
                    </div>
                    <p className="text-gray-200">
                      We comply with data protection regulations, including GDPR, to ensure the proper handling and protection of personal data.
                    </p>
                  </div>
                  
                  <div className="bg-wyse-dark/50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Shield className="text-wyse-cyan h-6 w-6 mr-2" />
                      <h3 className="text-xl font-semibold text-wyse-cyan">Securities Regulations</h3>
                    </div>
                    <p className="text-gray-200">
                      We ensure that our token offerings and investment products comply with relevant securities laws and regulations.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">Compliance Program Elements</h2>
                <ul className="space-y-4">
                  <li className="bg-wyse/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-wyse-light">Risk Assessment</h3>
                    <p className="text-gray-200">
                      Regular assessment of compliance risks associated with our products, services, and customer base.
                    </p>
                  </li>
                  
                  <li className="bg-wyse/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-wyse-light">Internal Policies and Procedures</h3>
                    <p className="text-gray-200">
                      Comprehensive policies that guide our compliance efforts, including AML/CFT Policy, KYC procedures, and Data Protection Policy.
                    </p>
                  </li>
                  
                  <li className="bg-wyse/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-wyse-light">Training and Awareness</h3>
                    <p className="text-gray-200">
                      Regular training for staff to ensure awareness of compliance requirements and procedures.
                    </p>
                  </li>
                  
                  <li className="bg-wyse/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-wyse-light">Monitoring and Reporting</h3>
                    <p className="text-gray-200">
                      Continuous monitoring of transactions and activities for suspicious behavior, with appropriate reporting mechanisms.
                    </p>
                  </li>
                  
                  <li className="bg-wyse/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-wyse-light">Independent Review</h3>
                    <p className="text-gray-200">
                      Regular review of our compliance program by independent third parties to ensure effectiveness and identify areas for improvement.
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">Regulatory Registrations</h2>
                <p className="text-gray-200">
                  WYSE Blockchain Technology LTD is registered with the appropriate regulatory bodies in the United Kingdom and other jurisdictions where we operate. Our company registration number in the UK is 16381921.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">Reporting Concerns</h2>
                <p className="text-gray-200">
                  If you have concerns about compliance issues or suspect violations of our policies or applicable regulations, please contact our Compliance Officer at compliance@wyseblockchain.com.
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

export default Compliance;
