import { motion } from 'motion/react';
import { Bot, Zap, Shield, Search } from 'lucide-react';

export default function Agents() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-4">Financial LLM</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Three specialised agents. One intelligence.</h2>
          <p className="text-text-muted text-lg">
            Powered by DART (Dynamic Agentic Response Technology)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SNAP Agent Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2 bg-gradient-to-br from-brand-surface to-brand-surface-hover border border-brand-primary/30 rounded-3xl p-8 lg:p-12 shadow-[0_0_30px_rgba(11,114,133,0.05)] relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px]" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Bot className="w-4 h-4" /> Live Agent
                </div>
                <h3 className="font-display text-5xl font-bold text-text-main mb-4">SNAP</h3>
                <p className="text-xl text-brand-secondary mb-6 font-mono">&lt; 1s Response Time</p>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Prices, balances, and simulated swaps. Snap delivers live prices from multiple sources, virtual wallet balances & transaction history, mock swap routing via Jupiter, and top gainers/losers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-text-main">
                    <Zap className="w-5 h-5 text-brand-primary" /> Forced tool calls for Zero Hallucination
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-text-main">
                    <Search className="w-5 h-5 text-brand-primary" /> Live Multi-Source Aggregation
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-text-main">
                    <Shield className="w-5 h-5 text-brand-primary" /> Instant Sandbox Simulation
                  </li>
                </ul>
              </div>
              
              {/* Illustration / Graphic */}
              <div className="bg-brand-bg border border-brand-border rounded-2xl p-6 shadow-xl">
                 <div className="flex items-center justify-between mb-4 border-b border-brand-border pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-mono text-sm text-text-muted">SNAP AGENT ACTIVE</span>
                    </div>
                    <span className="font-mono text-xs text-brand-primary">latency: 42ms</span>
                 </div>
                 <div className="space-y-4 font-mono text-sm">
                   <div className="text-text-muted/70">{`> query: "Simulate swap 100 USDC to SOL"`}</div>
                   <div className="text-brand-secondary">{`[TOOL CALL: fetch_mock_route { tokenIn: "USDC", tokenOut: "SOL", amount: 100 }]`}</div>
                   <div className="text-text-muted">{`... aggregating simulated data`}</div>
                   <div className="bg-brand-primary/10 border border-brand-primary/30 p-3 rounded-lg text-brand-primary-hover">
                      Mock Route Found: 100 USDC → 0.642 SOL <br />
                      Theoretical Slippage: 0.1% | Fee: $0.01
                   </div>
                   <div className="text-green-600">{`Simulation complete.`}</div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Research Agent */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 hover:border-brand-primary/40 transition-colors"
          >
            <h3 className="font-display text-2xl font-bold text-text-main mb-2">RESEARCH</h3>
            <p className="text-sm text-brand-secondary mb-4 font-mono">Deep Analysis</p>
            <p className="text-text-muted text-sm leading-relaxed">Comprehensive tokenomics, SEC filings analysis, and macro-economic correlations. Deep think mode enabled.</p>
          </motion.div>

          {/* Risk Agent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 hover:border-brand-primary/40 transition-colors"
          >
            <h3 className="font-display text-2xl font-bold text-text-main mb-2">RISK</h3>
            <p className="text-sm text-brand-secondary mb-4 font-mono">SAE Controls</p>
            <p className="text-text-muted text-sm leading-relaxed">Educational risk modeling, mock portfolio rebalancing triggers, and smart contract vulnerability analysis.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
