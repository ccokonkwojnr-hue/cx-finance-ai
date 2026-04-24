import { motion } from 'motion/react';
import { UserPlus, Megaphone, DollarSign, ArrowRight } from 'lucide-react';

export default function Affiliates() {
  return (
    <section id="affiliates" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-4">Partner Program</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Become a CX FINANCE AI Affiliate</h2>
          <p className="text-text-muted text-lg mb-8">
            Join the financial AI revolution. Promote the world's most advanced autonomous trading platform and earn a generous recurring commission on every subscriber you refer.
          </p>
          
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-full font-bold transition-colors inline-flex items-center gap-2">
            Apply as Affiliate <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 relative z-10"
          >
            <div className="w-14 h-14 bg-brand-surface-hover rounded-2xl flex items-center justify-center border border-brand-border mb-6">
              <UserPlus className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-3">1. Apply</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Submit your application. We review applications within 24 hours to ensure you have a relevant audience and meet our quality standards.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 relative z-10"
          >
            <div className="w-14 h-14 bg-brand-surface-hover rounded-2xl flex items-center justify-center border border-brand-border mb-6">
              <Megaphone className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-3">2. Promote</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Share your unique referral link on Twitter, YouTube, your newsletter, or trading group. We provide high-converting marketing assets.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 relative z-10"
          >
            <div className="w-14 h-14 bg-brand-surface-hover rounded-2xl flex items-center justify-center border border-brand-border mb-6">
              <DollarSign className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-3">3. Earn</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Earn up to 30% recurring monthly commission for every active subscriber. Enjoy fast, reliable payouts in crypto or fiat.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
