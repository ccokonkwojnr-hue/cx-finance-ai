import { motion } from 'motion/react';
import { Search, MonitorPlay, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Ask or paste your idea",
    description: "Start by asking a question about a market trend, pasting a complex strategy, or querying a specific asset.",
    icon: <Search className="w-5 h-5 text-brand-primary" />
  },
  {
    number: "2",
    title: "Learn & build a plan",
    description: "CX FINANCE AI explains the signals, performs deep research, and structures a paper-trading plan for you to review.",
    icon: <MonitorPlay className="w-5 h-5 text-brand-primary" />
  },
  {
    number: "3",
    title: "Review risks & iterate",
    description: "Evaluate the mock outcomes, review the risks, and refine your approach before risking real money elsewhere.",
    icon: <ClipboardCheck className="w-5 h-5 text-brand-primary" />
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">How it works</h2>
          <p className="text-text-muted text-lg">
            A safe, structured approach to understanding market mechanics and strategy testing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-brand-border border-b border-dashed border-text-muted/20" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="relative bg-brand-bg md:bg-transparent p-6 rounded-2xl md:p-0 md:rounded-none z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-brand-surface border border-brand-border rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(11,114,133,0.1)] relative">
                <div className="absolute top-1 right-1 w-6 h-6 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                  {step.number}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-text-main mb-3">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
