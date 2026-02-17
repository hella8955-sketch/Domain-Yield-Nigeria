
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ComparisonSection } from './components/ComparisonSection';
import { ModulesSection } from './components/ModulesSection';
import { OutcomesSection } from './components/OutcomesSection';
import { CTASection } from './components/CTASection';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { AIConsultant } from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ComparisonSection />
        <OutcomesSection />
        <ModulesSection />
        <AIConsultant />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
