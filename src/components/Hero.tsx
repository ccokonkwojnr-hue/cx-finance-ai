import { motion } from 'motion/react';
import { Play, ArrowRight, Search, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Case Study Highlights Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface text-xs font-medium text-text-muted">
            Built in Google AI Studio
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface text-xs font-medium text-text-muted">
            Gemini-powered agentic workflows
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/5 text-xs font-medium text-brand-primary">
            <Search className="w-3 h-3 mr-1.5" />
            Education & paper-trading only
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          The smarter way to learn Finance. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">
            Paper-trade, research, and understand markets — without the risk.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          Agentic Finance is for education. CX FINANCE AI combines autonomous research agents, 
          paper-trading simulations, and risk education in one app.
        </motion.p>

        {/* Global Disclaimer */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.25 }}
           className="bg-brand-secondary/10 border border-brand-secondary/30 rounded-lg p-3 text-xs sm:text-sm text-text-main max-w-2xl mx-auto mb-12 flex flex-col gap-1 items-center font-medium"
        >
          <p>CX FINANCE AI is not a regulated broker or investment adviser.</p>
          <p className="text-text-muted">It does not execute real trades or hold client funds. All examples are for education and paper-trading only using virtual money.</p>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent('open-trial-modal'))}
            className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(11,114,133,0.15)]">
            Try for Free <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-surface border border-brand-border text-text-main rounded-full font-bold text-lg hover:bg-brand-surface-hover transition-colors flex items-center justify-center gap-2">
            <Play className="w-5 h-5 text-brand-primary fill-brand-primary" /> View Demo
          </button>
        </motion.div>

        {/* Demo Chat UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-brand-surface border border-brand-border rounded-2xl md:rounded-[2rem] p-4 md:p-8 shadow-xl relative overflow-hidden backdrop-blur-sm">
            {/* Inner top reflection */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="flex flex-col gap-6 text-left">
              {/* User Message */}
              <div className="flex items-end self-end gap-2 max-w-[80%]">
                <div className="bg-brand-border px-5 py-4 rounded-2xl rounded-tr-sm text-sm md:text-base">
                  Give me best stocks of 2026
                </div>
              </div>

              {/* AI Response thinking state */}
              <div className="flex items-start self-start gap-4 max-w-[90%] w-full">
                <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  {/* Status Bar */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-xs text-brand-secondary font-mono">
                    <Search className="w-3 h-3 animate-pulse" />
                    Searching Live Data Feeds...
                  </div>
                  
                  {/* Streaming Response Simulation */}
                  <div className="bg-brand-bg/50 border border-brand-border rounded-2xl p-5 space-y-4 text-sm md:text-base text-text-muted">
                    <p>Based on current real-time aggregated analyst data and sector growth projections, the following stocks are showing strong institutional volume in 2026. <span className="text-text-muted italic">Please note: past performance is not indicative of future results and this is not financial advice.</span></p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-brand-border pb-2">
                        <span className="font-bold text-text-main">1. TSLA (Tesla)</span>
                        <span className="text-text-muted font-mono text-sm">Autonomy transition</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-brand-border pb-2">
                        <span className="font-bold text-text-main">2. NVDA (NVIDIA)</span>
                        <span className="text-text-muted font-mono text-sm">AI Infrastructure</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-brand-border pb-2">
                        <span className="font-bold text-text-main">3. PLTR (Palantir)</span>
                        <span className="text-text-muted font-mono text-sm">Enterprise SaaS</span>
                      </div>
                    </div>
                    <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-lg p-3 text-xs text-brand-secondary flex items-start gap-2">
                      <span className="font-bold uppercase tracking-wider shrink-0 mt-0.5">Risk Reminder:</span>
                      <p>Equities carry risk. Sector momentum can reverse rapidly due to macro-economic changes. Always verify position sizes against your maximum drawdown limits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] text-brand-secondary uppercase tracking-widest font-mono font-bold">
            Simulated demo response — not investment advice
          </div>
        </motion.div>
      </div>
    </section>
  );
}
