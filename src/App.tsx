
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Ecosystem from "./pages/Ecosystem";
import Opportunity from "./pages/Opportunity";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Token from "./pages/Token";
import Careers from "./pages/Careers";
import PressKit from "./pages/PressKit";

// Legal Pages
import TermsOfService from "./pages/legal/TermsOfService";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";
import Compliance from "./pages/legal/Compliance";

// Resource Pages
import Documentation from "./pages/resources/Documentation";
import FAQ from "./pages/resources/FAQ";
import Whitepaper from "./pages/resources/Whitepaper";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Add framer motion for animations
import { MotionConfig } from "framer-motion";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set the title and meta description
    document.title = "WYSE Blockchain Technology | Pioneering the Future of Blockchain";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "WYSE Blockchain Technology - A comprehensive blockchain-powered ecosystem designed to empower individuals and businesses through decentralized finance and innovation.");
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ecosystem" element={<Ecosystem />} />
                  <Route path="/opportunity" element={<Opportunity />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/token" element={<Token />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/press-kit" element={<PressKit />} />
                  
                  {/* Legal Pages */}
                  <Route path="/legal/terms-of-service" element={<TermsOfService />} />
                  <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/legal/compliance" element={<Compliance />} />
                  
                  {/* Resource Pages */}
                  <Route path="/resources/documentation" element={<Documentation />} />
                  <Route path="/resources/faq" element={<FAQ />} />
                  <Route path="/resources/whitepaper" element={<Whitepaper />} />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </MotionConfig>
  );
};

export default App;
