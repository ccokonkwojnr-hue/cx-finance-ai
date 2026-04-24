import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benchmark from './components/Benchmark';
import PromptLibrary from './components/PromptLibrary';
import Mission from './components/Mission';
import DartEcosystem from './components/DartEcosystem';
import Features from './components/Features';
import Agents from './components/Agents';
import Roadmap from './components/Roadmap';
import DataFeeds from './components/DataFeeds';
import Pricing from './components/Pricing';
import Affiliates from './components/Affiliates';
import News from './components/News';
import RiskDisclosure from './components/RiskDisclosure';
import Footer from './components/Footer';
import TryForFreeModal from './components/TryForFreeModal';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsTrialModalOpen(true);
    document.addEventListener('open-trial-modal', handleOpenModal);
    return () => document.removeEventListener('open-trial-modal', handleOpenModal);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-text-main selection:bg-brand-primary/30 selection:text-brand-primary-hover">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benchmark />
        <Agents />
        <PromptLibrary />
        <Mission />
        <DartEcosystem />
        <Features />
        <DataFeeds />
        <Roadmap />
        <Pricing />
        <Affiliates />
        <News />
        <RiskDisclosure />
      </main>
      <Footer />
      <TryForFreeModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </div>
  );
}
