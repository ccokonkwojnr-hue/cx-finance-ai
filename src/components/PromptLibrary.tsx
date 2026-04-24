import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowRight, Copy, Check, BookOpen, Search, Zap, Shield } from 'lucide-react';

const promptCategories = [
  {
    id: 'learning',
    name: 'Learning & Education',
    icon: <BookOpen className="w-4 h-4" />,
    prompts: [
      { 
        text: "Explain dividend yield like I'm 15.", 
        result: "Breaks down the concept with simple analogies, avoiding complex jargon." 
      },
      { 
        text: "Educational prompt — no live execution: Walk me through calculating a risk-reward ratio on a mock 5:1 trade setup.", 
        result: "Detailed the math behind risking $100 to make $500 using active mock account balance to show safe position sizing." 
      },
      { 
        text: "Educational prompt — no live execution: Explain how a 'Golden Cross' works using historical BTC data.", 
        result: "Generated technical breakdown of the 50-day crossing the 200-day moving average. Plotted historical BTC examples." 
      }
    ]
  },
  {
    id: 'research',
    name: 'Research & Analysis',
    icon: <Search className="w-4 h-4" />,
    prompts: [
      { 
        text: "Analyse the tokenomics of the top 3 AI crypto coins.", 
        result: "Fetches live supply, emissions, and utility data for a comparative summary." 
      },
      { 
        text: "What is the average P/E ratio for the SaaS sector right now?", 
        result: "Scans current financial reports and calculates the sector's real-time average." 
      },
      { 
        text: "Give me the executive summary of NVIDIA's latest earnings call.", 
        result: "Extracts key metrics, guidance changes, and forward-looking statements." 
      }
    ]
  },
  {
    id: 'trading',
    name: 'Strategy Simulation',
    icon: <Zap className="w-4 h-4" />,
    prompts: [
      { 
        text: "Educational prompt — no live execution: Build a Python script to scan for unusual options volume.", 
        result: "Generates a complete, deployable script for learning the mechanics behind options scanning." 
      },
      { 
        text: "Simulate scenario: Cross-chain swap 100 USDC on Arbitrum to SOL on Solana.", 
        result: "Creates a mock multi-step bridge and swap transaction via Jupiter to analyze theoretical fees." 
      },
      { 
        text: "Educational prompt — no live execution: Set a CX Signal alert if TSLA drops below its 200-day moving average.", 
        result: "Creates a mock automated webhook to notify you upon the technical crossover to test your strategy timing." 
      }
    ]
  },
  {
    id: 'risk',
    name: 'Risk & Portfolio',
    icon: <Shield className="w-4 h-4" />,
    prompts: [
      { 
        text: "Stress-test my portfolio against a 30% market drawdown.", 
        result: "Models potential losses based on asset beta and historical correlations." 
      },
      { 
        text: "Identify any overlapping sector risks in my current holdings.", 
        result: "Analyzes connected mock accounts for hidden concentration and exposure risks." 
      },
      { 
        text: "Calculate my optimal position size for a Bitcoin long with a 2% risk limit.", 
        result: "Uses active account balance and stop-loss targets to define the safe trade size." 
      }
    ]
  }
];

export default function PromptLibrary() {
  const [activeCategory, setActiveCategory] = useState(promptCategories[0].id);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(text);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const activeCategoryData = promptCategories.find(c => c.id === activeCategory);

  return (
    <section id="prompts" className="py-24 bg-brand-surface border-y border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Explore How You Can Talk With CX</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            From learning fundamental concepts to building complex trading algorithms via simple chat. Discover the possibilities.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {promptCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === category.id
                  ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(11,114,133,0.15)]'
                  : 'bg-brand-surface border border-brand-border text-text-muted hover:text-text-main hover:border-brand-primary/50'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Prompt Cards Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {activeCategoryData?.prompts.map((prompt, index) => (
                <div
                  key={index}
                  className="bg-brand-surface-hover p-6 rounded-2xl border border-brand-border flex flex-col group relative"
                >
                  <MessageSquare className="w-5 h-5 text-text-muted/70 mb-4 group-hover:text-brand-secondary transition-colors" />
                  
                  <p className="text-text-main font-medium leading-relaxed mb-6 flex-grow">
                    "{prompt.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-brand-border mt-auto">
                    <p className="text-xs text-brand-secondary font-bold uppercase tracking-wider mb-2">
                      What CX FINANCE AI will do:
                    </p>
                    <p className="text-sm text-text-muted">
                      {prompt.result}
                    </p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(prompt.text)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-brand-surface border border-brand-border text-text-muted hover:text-text-main hover:bg-brand-border transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label="Copy prompt"
                  >
                    {copiedPrompt === prompt.text ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-6 py-3 rounded-full text-brand-secondary font-bold hover:text-text-main hover:border-brand-primary transition-all">
            Open Chat & Try Live <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
