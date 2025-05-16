
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-wyse-light">Terms of Service</h1>
        <div className="bg-wyse-darkblue/30 rounded-lg p-6 shadow-lg">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-6 pr-4">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">1. Introduction</h2>
                <p className="text-gray-200">
                  Welcome to WYSE Blockchain Technology LTD. These Terms of Service govern your use of our website, services, and platform. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">2. Definitions</h2>
                <p className="text-gray-200">
                  "WYSE," "We," "Us," or "Our" refers to WYSE Blockchain Technology LTD, registered in the UK under company number 16381921.
                </p>
                <p className="text-gray-200 mt-2">
                  "Platform" refers to our website, mobile applications, and blockchain services.
                </p>
                <p className="text-gray-200 mt-2">
                  "User," "You," or "Your" refers to the individual or entity accessing or using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">3. Eligibility</h2>
                <p className="text-gray-200">
                  To use our services, you must be at least 18 years old and capable of forming legally binding contracts. By using our services, you represent and warrant that you meet these requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">4. Account Registration</h2>
                <p className="text-gray-200">
                  Some features of our services may require account registration. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">5. User Obligations</h2>
                <p className="text-gray-200">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-200 space-y-1">
                  <li>Use our services in any way that violates any applicable law or regulation</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
                  <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                  <li>Use our services to engage in fraudulent activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">6. Intellectual Property</h2>
                <p className="text-gray-200">
                  All content, features, and functionality available through our platform, including but not limited to text, graphics, logos, icons, images, and software, are owned by WYSE, its licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">7. Limitation of Liability</h2>
                <p className="text-gray-200">
                  In no event shall WYSE, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">8. Governing Law</h2>
                <p className="text-gray-200">
                  These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">9. Changes to Terms</h2>
                <p className="text-gray-200">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">10. Contact Us</h2>
                <p className="text-gray-200">
                  If you have any questions about these Terms, please contact us at legal@wyseblockchain.com.
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

export default TermsOfService;
