import { motion } from 'motion/react';
import { Cpu, Network, Lock, Zap } from 'lucide-react';

const layers = [
  {
    layer: 'Layer 1',
    title: 'Educational Simulation Engine',
    desc: 'Mock markets for Stocks, crypto, gold, oil, ETFs. Spot & perpetual simulation. Educational order book. Designed to replicate real markets.',
    icon: <Network className="w-6 h-6" />
  },
  {
    layer: 'Layer 2',
    title: 'DART Infrastructure',
    desc: 'Multi-agent parallel research, risk/sentiment/macro agents, MCP-ready, Enterprise API, Deep Think Mode.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    layer: 'Layer 3',
    title: 'Simulated Investing',
    desc: 'AI Strategy Cloning, Strategy Backtesting, Simulated rebalancing, SAE risk controls always on.',
    icon: <Lock className="w-6 h-6" />
  },
  {
    layer: 'Layer 4',
    title: 'Natural Language UX',
    desc: 'CX FINANCE AI Chat (talk to simulate), iOS & Android mobile apps, CX Pro, Educational Markets, AI Learning.',
    icon: <Zap className="w-6 h-6" />
  }
];

export default function DartEcosystem() {
  return (
    <section id="features" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-4">Core Technology</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">DART Ecosystem</h2>
          <p className="text-text-muted text-lg">
            Dynamic Agentic Response Technology orchestrates multiple specialised financial agents in parallel — research, risk, sentiment, simulation, macro — all running natively inside CX FINANCE AI's educational exchange.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-brand-border z-0" />
          
          {layers.map((layer, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={layer.layer}
              className="relative z-10"
            >
              <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 h-full hover:border-brand-primary transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-brand-surface-hover flex items-center justify-center text-brand-secondary mb-6 mx-auto group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  {layer.icon}
                </div>
                <div className="text-center">
                  <span className="text-xs font-mono font-bold text-text-muted/70 uppercase tracking-widest mb-2 block">{layer.layer}</span>
                  <h3 className="text-xl font-bold text-text-main mb-4">{layer.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
