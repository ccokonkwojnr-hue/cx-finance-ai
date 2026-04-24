import { motion } from 'motion/react';
import { Trophy, CheckCircle2, Award, Info } from 'lucide-react';

const rankings = [
  { rank: 1, name: 'CX FINANCE AI', score: 83.7, isHero: true },
  { rank: 2, name: 'Manus (Meta AI)', score: 80.0, isHero: false },
  { rank: 3, name: 'ChatGPT', score: 78.2, isHero: false },
  { rank: 4, name: 'Claude', score: 77.9, isHero: false },
  { rank: 5, name: 'Kimi 2.5', score: 77.6, isHero: false },
  { rank: 6, name: 'Grok', score: 74.7, isHero: false },
];

const comparisons = [
  {
    model: 'CX FINANCE AI',
    strengths: 'Specialized financial execution, zero-hallucination tools, real-time market data instantly.',
    weaknesses: 'Hyper-focused on finance; not suitable for general non-financial workflows.',
    bestFor: 'Finance learners, paper-trading practice, signal education, and risk understanding.',
    isHero: true
  },
  {
    model: 'Manus (Meta AI)',
    strengths: 'Broad reasoning capabilities, autonomous general task execution.',
    weaknesses: 'No native connection to live financial exchange infrastructure.',
    bestFor: 'General autonomous task automation & web scraping.'
  },
  {
    model: 'ChatGPT',
    strengths: 'Unmatched versatility, conversational coding generation.',
    weaknesses: 'High latency for live pricing, prone to confident hallucinations.',
    bestFor: 'Brainstorming strategies, drafting basic Python scripts.'
  },
  {
    model: 'Claude',
    strengths: 'Massive context window, excellent at parsing 100-page SEC documents.',
    weaknesses: 'Lacks direct integration with web3/crypto or live order books.',
    bestFor: 'Deep fundamental research on lengthy text documentation.'
  },
  {
    model: 'Kimi 2.5',
    strengths: 'Extremely fast processing, solid internet search grounding.',
    weaknesses: 'Inconsistent accuracy when evaluating multi-variable financial models.',
    bestFor: 'Quickly scanning the web for general knowledge answers.'
  },
  {
    model: 'Grok',
    strengths: 'Direct access to the real-time social firehose (X/Twitter).',
    weaknesses: 'Struggles with strict, objective financial data accuracy.',
    bestFor: 'Gathering raw social sentiment and trending meme narratives.'
  }
];

export default function Benchmark() {
  return (
    <section id="benchmark" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-xs font-bold uppercase tracking-wider mb-6">
              <Trophy className="w-4 h-4" /> Independent Evaluation
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              CX FINANCE AI ranked #1 of 6 leading AI models for Financial AI.
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              CX FINANCE AI was evaluated alongside leading generalist models to test its specialised financial reasoning and execution engines.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-text-muted"><strong>4 out of 5</strong> judges ranked CX FINANCE AI in their top 2.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-text-muted"><strong>2×</strong> awarded outright #1 position.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-text-muted"><strong>+3.7pt</strong> consensus lead over the nearest competitor.</p>
              </div>
            </div>
          </div>

          {/* Right Rankings Board */}
          <div className="relative">
            {/* Glow behind the board */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative bg-brand-surface border border-brand-border rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-brand-border">
                <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Model</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Score (/100)</span>
              </div>
              
              <div className="space-y-3">
                {rankings.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={item.name}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      item.isHero 
                        ? 'bg-gradient-to-r from-brand-primary/20 to-transparent border border-brand-primary/30' 
                        : 'bg-brand-surface-hover border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${item.isHero ? 'text-brand-secondary' : 'text-text-muted/70'}`}>
                        {String(item.rank).padStart(2, '0')}
                      </span>
                      <span className={`font-bold ${item.isHero ? 'text-text-main' : 'text-text-muted'}`}>
                        {item.name}
                      </span>
                      {item.isHero && <Award className="w-4 h-4 text-brand-primary" />}
                    </div>
                    <span className={`font-mono font-bold ${item.isHero ? 'text-brand-secondary text-lg' : 'text-text-muted'}`}>
                      {item.score.toFixed(1)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 bg-brand-surface border border-brand-border rounded-3xl overflow-hidden shadow-xl relative">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-brand-surface-hover border-b border-brand-border">
                  <th className="p-5 text-xs font-bold text-text-muted uppercase tracking-wider whitespace-nowrap">Model</th>
                  <th className="p-5 text-xs font-bold text-text-muted uppercase tracking-wider w-1/3">Strengths</th>
                  <th className="p-5 text-xs font-bold text-text-muted uppercase tracking-wider w-1/3">Weaknesses</th>
                  <th className="p-5 text-xs font-bold text-text-muted uppercase tracking-wider">Best For...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/50">
                {comparisons.map((row, i) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={row.model}
                    className={`transition-colors ${
                      row.isHero 
                        ? 'bg-brand-primary/10 hover:bg-brand-primary/20 box-shadow-inner' 
                        : 'hover:bg-brand-surface-hover'
                    }`}
                  >
                    <td className="p-5 align-top">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${row.isHero ? 'text-brand-secondary' : 'text-text-main'}`}>
                          {row.model}
                        </span>
                        {row.isHero && <Award className="w-4 h-4 text-brand-primary" />}
                      </div>
                    </td>
                    <td className="p-5 align-top text-sm text-text-muted leading-relaxed">{row.strengths}</td>
                    <td className="p-5 align-top text-sm text-text-muted leading-relaxed">{row.weaknesses}</td>
                    <td className="p-5 align-top text-sm font-medium text-text-muted">{row.bestFor}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Methodology Note */}
        <div className="mt-6 flex items-start gap-3 bg-brand-primary/5 border border-brand-primary/20 p-4 rounded-xl max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
          <p className="text-xs text-text-muted leading-relaxed">
            Rankings are based on a simulated expert evaluation across reasoning, accuracy, and financial education quality. This is a concept product.
          </p>
        </div>

      </div>
    </section>
  );
}
