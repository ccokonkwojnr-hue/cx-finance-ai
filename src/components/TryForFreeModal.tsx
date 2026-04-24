import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';

interface TryForFreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TryForFreeModal({ isOpen, onClose }: TryForFreeModalProps) {
  const [submitted, setSubmitted] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-brand-surface border border-brand-border rounded-3xl p-6 md:p-8 shadow-xl overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-brand-surface-hover text-text-muted hover:text-text-main hover:bg-brand-border transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 className="text-center py-6"
               >
                 <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                   <CheckCircle2 className="w-8 h-8 text-brand-primary" />
                 </div>
                 <h2 className="text-2xl font-display font-bold text-text-main mb-2">Welcome to the simulation.</h2>
                 <p className="text-sm text-brand-secondary font-medium px-4 mb-8">
                   Thanks for your interest in CX FINANCE AI. This demo does not send your data anywhere yet.
                 </p>
                 <button
                   onClick={handleClose}
                   className="w-full bg-brand-surface border border-brand-border text-text-main hover:bg-brand-surface-hover rounded-xl px-4 py-3.5 text-sm font-bold transition-colors"
                 >
                   Close
                 </button>
               </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-display font-bold tracking-tight mb-2 text-text-main">
                  Start your 14-day free trial
                </h2>
                <p className="text-text-muted text-sm mb-8 leading-relaxed">
                  No credit card required. Cancel anytime before your trial ends.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-brand-bg border border-brand-border text-text-main rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-brand-bg border border-brand-border text-text-main rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Trading Experience</label>
                    <select required className="w-full bg-brand-bg border border-brand-border text-text-main rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all cursor-pointer">
                      <option value="" disabled selected hidden>Select experience level...</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Primary Interest</label>
                    <select required className="w-full bg-brand-bg border border-brand-border text-text-main rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all cursor-pointer">
                      <option value="" disabled selected hidden>Select primary interest...</option>
                      <option value="signals">Signals</option>
                      <option value="research">Research</option>
                      <option value="risk">Risk</option>
                      <option value="portfolio">Portfolio</option>
                    </select>
                  </div>

                  <div className="pt-6">
                    <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl px-4 py-3.5 text-sm font-bold transition-colors flex items-center justify-center gap-3">
                      Start Educational Trial
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-[11px] text-text-muted/70 leading-relaxed">
                    By proceeding, you agree to CX FINANCE AI's <br className="hidden sm:block" />
                    <a href="#" className="underline hover:text-text-muted">Terms of Service</a>,{' '}
                    <a href="#" className="underline hover:text-text-muted">Privacy Policy</a>, and{' '}
                    <a href="#risk-disclosure" onClick={handleClose} className="underline hover:text-text-muted">Risk Disclosure</a>.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
