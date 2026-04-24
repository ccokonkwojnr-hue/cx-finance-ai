import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-border' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-primary-hover flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">CX FINANCE AI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors">
                  Features <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                {/* Dropdown - Extended version */}
                <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-brand-surface border border-brand-border rounded-xl p-4 shadow-xl flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2 px-2">Market Intelligence</p>
                      <div className="space-y-0.5">
                        <a href="#market-intelligence" className="block text-sm text-text-muted hover:text-text-main hover:bg-brand-surface-hover px-2 py-1.5 rounded-md transition-colors">Real Time Pricing, Whale Watch...</a>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2 px-2">Trading & Execution</p>
                      <div className="space-y-0.5">
                        <a href="#trading-execution" className="block text-sm text-text-muted hover:text-text-main hover:bg-brand-surface-hover px-2 py-1.5 rounded-md transition-colors">Limit Orders, Cross Chain Swaps...</a>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2 px-2">Research & Analysis</p>
                      <div className="space-y-0.5">
                        <a href="#research-analysis" className="block text-sm text-text-muted hover:text-text-main hover:bg-brand-surface-hover px-2 py-1.5 rounded-md transition-colors">CX Research, Crypto Analysis...</a>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2 px-2">Portfolio</p>
                      <div className="space-y-0.5">
                        <a href="#portfolio" className="block text-sm text-text-muted hover:text-text-main hover:bg-brand-surface-hover px-2 py-1.5 rounded-md transition-colors">Portfolio Analysis</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#pricing" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Pricing</a>
              <a href="#affiliates" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Affiliates</a>
              <a href="#news" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">News</a>
              <a href="#prompts" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Prompts</a>
              <a href="#benchmark" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Compare</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => document.dispatchEvent(new CustomEvent('open-trial-modal'))}
                className="bg-brand-primary text-white hover:bg-brand-primary-hover px-5 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2"
              >
                Try for Free <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-text-muted hover:text-text-main">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Open State */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-surface border-b border-brand-border px-4 pt-2 pb-6 space-y-4">
            <a href="#market-intelligence" className="block text-base font-medium text-text-muted hover:text-text-main" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="block text-base font-medium text-text-muted hover:text-text-main" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#affiliates" className="block text-base font-medium text-text-muted hover:text-text-main" onClick={() => setMobileMenuOpen(false)}>Affiliates</a>
            <a href="#news" className="block text-base font-medium text-text-muted hover:text-text-main" onClick={() => setMobileMenuOpen(false)}>News</a>
            <a href="#prompts" className="block text-base font-medium text-text-muted hover:text-text-main" onClick={() => setMobileMenuOpen(false)}>Prompts</a>
            <a href="#benchmark" className="block text-base font-medium text-text-muted hover:text-text-main" onClick={() => setMobileMenuOpen(false)}>Compare</a>
            <button 
              onClick={() => { document.dispatchEvent(new CustomEvent('open-trial-modal')); setMobileMenuOpen(false); }}
              className="w-full bg-brand-primary text-white hover:bg-brand-primary-hover px-5 py-3 rounded-xl text-sm font-bold transition-colors mt-4"
            >
              Try for Free
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
