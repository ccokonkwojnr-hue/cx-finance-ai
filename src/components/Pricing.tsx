import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 20,
    features: [
      '50 Simulation credits/month',
      '1 basic backtest/day',
      'Basic sentiment AI',
      'Simulated portfolio access',
      'Community support'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: 99,
    badge: 'Most Popular',
    features: [
      '500 Simulation credits/month',
      '20 complex backtests/day',
      'Deep tokenomics research',
      'Route mock swaps + SNAP',
      'Priority email support'
    ],
    popular: true
  },
  {
    name: 'Elite',
    price: 249,
    badge: 'Flagship',
    features: [
      '2,000 Simulation credits/month',
      'Unlimited backtests + webhooks',
      'Institutional mock testing',
      'Full sandbox research Agent',
      'Dedicated educator support'
    ],
    popular: false
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Simple pricing. Start free.</h2>
          <p className="text-text-muted text-lg mb-8">All plans include a 14-day free trial. No credit card required. Plans launching Q3 2026.</p>
          
          <div className="inline-flex items-center p-1 bg-brand-surface border border-brand-border rounded-full">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-brand-border text-text-main shadow-md' : 'text-text-muted hover:text-text-main'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isAnnual ? 'bg-brand-border text-text-main shadow-md' : 'text-text-muted hover:text-text-main'}`}
            >
              Annual <span className="text-[10px] bg-brand-primary text-white px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={plan.name}
              className={`relative bg-brand-surface rounded-3xl p-8 border ${plan.popular ? 'border-brand-primary ring-1 ring-brand-primary' : 'border-brand-border'} flex flex-col`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-main mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold">${isAnnual ? Math.floor(plan.price * 0.8) : plan.price}</span>
                  <span className="text-text-muted/70 text-sm">/mo</span>
                </div>
                {isAnnual && <p className="text-sm text-brand-secondary mt-2">Billed annually</p>}
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-3 text-sm text-text-muted">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.dispatchEvent(new CustomEvent('open-trial-modal'))}
                className={`w-full py-3 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-brand-primary text-white hover:bg-brand-primary-hover' : 'bg-brand-bg text-text-main border border-brand-border hover:bg-brand-surface-hover'}`}
              >
                Try for Free
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
