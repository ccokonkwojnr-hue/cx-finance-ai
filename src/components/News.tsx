import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "CX FINANCE AI 2.0 Launches with Enhanced DART Engine",
    date: "April 18, 2026",
    summary: "Our biggest update yet introduces massive parallel processing capabilities, allowing up to 14 specialised agents to collaborate on a single complex strategy mock-up.",
    category: "Product Update",
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Integration Live: Solana & Jupiter via SNAP Agent",
    date: "April 10, 2026",
    summary: "Deep integration with Solana means sub-second simulated execution and zero-hallucination route mock-aggregation via Jupiter Exchange, live seamlessly inside Chat.",
    category: "Integrations",
    icon: <Zap className="w-4 h-4" />
  },
  {
    id: 3,
    title: "New SAE Risk Controls Implemented",
    date: "March 28, 2026",
    summary: "Introducing strict Autonomous Safety Execution (SAE) limits. Users can now establish hard drawdown ceilings that prevent agents from executing mock logic when markets gap.",
    category: "Security",
    icon: <ShieldCheck className="w-4 h-4" />
  }
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Latest Updates & News</h2>
            <p className="text-text-muted text-lg max-w-2xl">Product releases, research breakthroughs, and ecosystem integrations.</p>
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-surface border border-brand-border text-text-main font-medium hover:border-brand-primary transition-colors">
            View all updates <ArrowRight className="w-4 h-4 text-brand-primary" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={item.id}
              className="bg-brand-surface border border-brand-border rounded-3xl p-6 sm:p-8 hover:border-brand-primary/50 transition-colors flex flex-col cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-surface-hover text-brand-secondary text-xs font-bold uppercase tracking-wider">
                  {item.icon} {item.category}
                </span>
                <span className="text-xs text-text-muted/70 font-mono">{item.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-text-main mb-4 group-hover:text-brand-secondary transition-colors leading-tight">
                {item.title}
              </h3>
              
              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">
                {item.summary}
              </p>
              
              <div className="pt-6 border-t border-brand-border mt-auto">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-brand-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all w-fit">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] text-text-muted/60 italic leading-none">
                    (Demo article — full content coming soon)
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
