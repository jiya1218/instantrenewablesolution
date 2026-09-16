import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoreAboutUs from './components/MoreAboutUs';
import StatsBar from './components/StatsBar';
import WhatWeEngineer from './components/WhatWeEngineer';
import ServicesGrid from './components/ServicesGrid';
import PortfolioProof from './components/PortfolioProof';
import IndustriesWeServe from './components/IndustriesWeServe';
import WorkingProcess from './components/WorkingProcess';
import TrustedPartner from './components/TrustedPartner';
import AwardsRecognition from './components/AwardsRecognition';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import FaqSection from './components/FaqSection';
import SocialProof from './components/SocialProof';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  const [prefilledContactService, setPrefilledContactService] = useState('');

  const handleOpenEstimateModal = () => {
    setModalInitialData(null);
    setIsEstimateModalOpen(true);
  };

  const handleOpenEstimateModalWithData = (data) => {
    setModalInitialData(data);
    setIsEstimateModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceTitle) => {
    setModalInitialData({
      projectType: serviceTitle,
      selectedServices: [serviceTitle]
    });
    setIsEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Fixed Solid White Navigation */}
      <Navbar onOpenEstimateModal={handleOpenEstimateModal} />

      {/* Main Page Content - 100% IRS Content & Solar Engineering Services */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 2. More About Us */}
        <MoreAboutUs onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 3. Work / What We Have Done So Far? */}
        <StatsBar />

        {/* 4. What We Engineer */}
        <WhatWeEngineer onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 5. Solar Design & Engineering (6 Core IRS Services) */}
        <ServicesGrid onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 6. Portfolio Proof */}
        <PortfolioProof onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 7. Industries We Serve */}
        <IndustriesWeServe onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 8. How We Work / 6-Step Working Process */}
        <WorkingProcess onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 9. Trusted Partner */}
        <TrustedPartner />

        {/* 10. Awards and Recognition / Engineering Standards */}
        <AwardsRecognition onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 11. Mission & Vision */}
        <MissionVision />

        {/* 12. Core Values */}
        <CoreValues />

        {/* 13. FAQ (Interactive Accordion) */}
        <FaqSection onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 14. Social Proof / Testimonials */}
        <SocialProof onOpenEstimateModal={handleOpenEstimateModal} />

        {/* 15. Contact / Get a Project Quote */}
        <ContactSection prefilledService={prefilledContactService} />
      </main>

      {/* 16. Footer */}
      <Footer onOpenEstimateModal={handleOpenEstimateModal} />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar onOpenEstimateModal={handleOpenEstimateModal} />

      {/* Popup Estimate RFQ Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialData={modalInitialData}
      />
    </div>
  );
}
