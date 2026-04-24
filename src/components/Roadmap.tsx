import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const items = [
  "New safety features",
  "More investing tools",
  "Personal AI agents",
  "Finance planning",
  "Personalised trading experience",
  "Auto-Copy",
  "More asset types"
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Roadmap 2026</h2>
            <p className="text-text-muted text-lg max-w-2xl">The future of Agentic Finance is bright. Here's what's coming next.</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-surface border border-brand-border text-brand-secondary font-mono text-sm">
            <Calendar className="w-4 h-4" /> Coming Soon
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={index}
              className="px-6 py-3 rounded-full bg-brand-surface border border-brand-border text-text-muted hover:text-text-main hover:border-brand-primary cursor-default transition-colors text-sm font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
