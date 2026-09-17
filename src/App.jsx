import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import EstimateModal from "./components/EstimateModal";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [preselectedSubject, setPreselectedSubject] = useState("predesign");

  const handleOpenEstimate = (subject = "predesign") => {
    setPreselectedSubject(subject);
    setIsEstimateOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-navy selection:text-white">
        {/* Scroll Restoration */}
        <ScrollToTop />

        {/* Global Navigation */}
        <Navbar onOpenEstimate={() => handleOpenEstimate("predesign")} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow pb-16 sm:pb-0">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenEstimate={() => handleOpenEstimate("predesign")} />}
            />
            <Route
              path="/about-us"
              element={<AboutPage onOpenEstimate={() => handleOpenEstimate("predesign")} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenEstimate={() => handleOpenEstimate("predesign")} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenEstimate={() => handleOpenEstimate("predesign")} />}
            />
            <Route
              path="/our-services"
              element={<ServicesPage onOpenEstimate={() => handleOpenEstimate("predesign")} />}
            />
            <Route
              path="/contact-us"
              element={<ContactPage onOpenEstimate={() => handleOpenEstimate("predesign")} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenEstimate={() => handleOpenEstimate("predesign")} />}
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={<HomePage onOpenEstimate={() => handleOpenEstimate("predesign")} />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEstimate={() => handleOpenEstimate("predesign")} />

        {/* Sticky Mobile Quick Navigation Bar */}
        <MobileBottomBar onOpenEstimate={() => handleOpenEstimate("predesign")} />

        {/* Global Free Estimate Proposal Modal */}
        <EstimateModal
          isOpen={isEstimateOpen}
          onClose={() => setIsEstimateOpen(false)}
          preselectedSubject={preselectedSubject}
        />
      </div>
    </BrowserRouter>
  );
}
