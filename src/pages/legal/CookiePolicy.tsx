
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const CookiePolicy = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-wyse-light">Cookie Policy</h1>
        <div className="bg-wyse-darkblue/30 rounded-lg p-6 shadow-lg">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-6 pr-4">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">1. Introduction</h2>
                <p className="text-gray-200">
                  This Cookie Policy explains how WYSE Blockchain Technology LTD ("we", "our", or "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">2. What Are Cookies?</h2>
                <p className="text-gray-200">
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
                <p className="text-gray-200 mt-2">
                  Cookies set by the website owner (in this case, WYSE Blockchain Technology LTD) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">3. Types of Cookies We Use</h2>
                <h3 className="text-xl font-semibold mb-2 text-wyse-cyan">Essential Cookies</h3>
                <p className="text-gray-200">
                  These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-4 text-wyse-cyan">Performance and Analytics Cookies</h3>
                <p className="text-gray-200">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-4 text-wyse-cyan">Functional Cookies</h3>
                <p className="text-gray-200">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-4 text-wyse-cyan">Targeting Cookies</h3>
                <p className="text-gray-200">
                  These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">4. How to Control Cookies</h2>
                <p className="text-gray-200">
                  You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">5. Third-Party Cookies</h2>
                <p className="text-gray-200">
                  In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">6. Updates to This Cookie Policy</h2>
                <p className="text-gray-200">
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-wyse-light">7. Contact Us</h2>
                <p className="text-gray-200">
                  If you have any questions about our use of cookies or other technologies, please contact us at privacy@wyseblockchain.com.
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

export default CookiePolicy;
