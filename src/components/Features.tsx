import { motion } from 'motion/react';
import { Target, Zap, Search, PieChart, CheckCircle2 } from 'lucide-react';

const categories = [
  {
    id: "market-intelligence",
    title: "Market Intelligence",
    icon: <Search className="w-6 h-6 text-brand-primary" />,
    description: "Stay ahead of the market with sub-second data and real-time alerts.",
    features: [
      {
        name: "Real Time Pricing",
        description: "Sub-second latency price feeds across all asset classes.",
        benefits: ["Aggregates 15+ live sources", "Zero hallucination data pipelines"]
      },
      {
        name: "Whale Watch",
        description: "Track large institutional wallets and smart money instantly.",
        benefits: ["On-chain movement alerts", "Wallet clustering analysis"]
      },
      {
        name: "NewsDesk",
        description: "AI-curated financial news filtered for noise.",
        benefits: ["Real-time sentiment scoring", "Instant breaking alerts"]
      },
      {
        name: "ForeCast",
        description: "Machine learning price predictions based on deep data.",
        benefits: ["Macro-economic correlations", "Historical pattern recognition"]
      }
    ]
  },
  {
    id: "trading-execution",
    title: "Strategy & Simulation",
    icon: <Zap className="w-6 h-6 text-brand-primary" />,
    description: "Test strategies seamlessly with virtual capital.",
    features: [
      {
        name: "Paper Limit Orders",
        description: "Simulate and backtest advanced trade parameters.",
        benefits: ["Multi-DEX scenario execution", "Price gap modeling"]
      },
      {
        name: "Route Simulation",
        description: "Understand asset bridging via the SNAP agent.",
        benefits: ["Automated best-route mockfinding", "Fee analysis & comparison"]
      },
      {
        name: "Knowledge Base",
        description: "Learn the mechanics of the market.",
        benefits: ["Fundamentals of execution", "Glossary of trading terms"]
      },
      {
        name: "Educational Signals",
        description: "Explainable technical trading alerts.",
        benefits: ["Technical indicator walkthroughs", "Custom tracking webhooks"]
      }
    ]
  },
  {
    id: "research-analysis",
    title: "Research & Analysis",
    icon: <Target className="w-6 h-6 text-brand-primary" />,
    description: "Institutional-grade analysis generated in seconds.",
    features: [
      {
        name: "CX Research",
        description: "Deep-dive institutional reports on demand.",
        benefits: ["Automated PDF & SEC analysis", "Executive summary generation"]
      },
      {
        name: "Crypto Analysis",
        description: "Tokenomics and deep on-chain metrics.",
        benefits: ["Smart contract safety auditing", "Supply distribution mapping"]
      },
      {
        name: "Stock Analysis",
        description: "Earnings breakdowns and fundamental analysis.",
        benefits: ["Peer comparisons", "Historical revenue tracking"]
      },
      {
        name: "Tokenized Analysis",
        description: "RWA and tokenized asset research.",
        benefits: ["Yield projections", "Underlying asset verification"]
      },
      {
        name: "Meme Analysis",
        description: "Social sentiment and virality tracking.",
        benefits: ["Twitter/X volume metrics", "Sniper & holder risk checks"]
      }
    ]
  },
  {
    id: "portfolio",
    title: "Portfolio",
    icon: <PieChart className="w-6 h-6 text-brand-primary" />,
    description: "Analyze, assess, and simulate wealth scenarios seamlessly.",
    features: [
      {
        name: "Portfolio Scenario Analysis",
        description: "Comprehensive tracking and mock rebalancing.",
        benefits: ["Automated SAE risk modeling", "Mock exchange aggregation", "Tax-loss simulation insights"]
      }
    ]
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-4">Complete Toolset</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">14 Educational Tools. One Platform.</h2>
          <p className="text-text-muted text-lg">
            From basic price checking to deep educational backtesting scenarios.
          </p>
        </div>

        <div className="space-y-32">
          {categories.map((category, idx) => (
            <div key={category.id} id={category.id} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8 border-b border-brand-border pb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-text-main tracking-tight">{category.title}</h3>
                  <p className="text-text-muted text-sm md:text-base mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.features.map((feature, featureIdx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: featureIdx * 0.1 }}
                    key={feature.name}
                    className="bg-brand-surface border border-brand-border hover:border-brand-primary/50 transition-colors rounded-2xl p-6 flex flex-col h-full group"
                  >
                    <h4 className="text-lg font-bold text-text-main mb-2 group-hover:text-brand-secondary transition-colors">{feature.name}</h4>
                    <p className="text-sm text-text-muted mb-6 leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
