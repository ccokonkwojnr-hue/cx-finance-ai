import { AlertTriangle } from 'lucide-react';

export default function RiskDisclosure() {
  return (
    <section id="risk-disclosure" className="py-16 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-text-main flex items-center gap-2 mb-3 tracking-tight">
              Important Risk Disclosure
            </h3>
            <div className="text-text-muted text-sm space-y-4 leading-relaxed">
              <p>
                <strong>Educational Platform Only:</strong> CX FINANCE AI is an educational platform and research tool, not a regulated broker or investment adviser. We do not execute real trades, connect to live brokerage accounts, or hold client funds.
              </p>
              <p>
                <strong>Simulated Trading:</strong> All examples, workflows, and strategy tests on this platform use virtual money. Paper-trading simulations are hypothetical and do not reflect actual market liquidity, true slippage, or psychological factors of real trading.
              </p>
              <p>
                <strong>Not Financial Advice:</strong> Autonomous research agents find data, summarize markets, and suggest hypothetical strategies. They do not send orders. All insights and data are for informational and educational purposes only. You are solely responsible for your own learning and real-world financial decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
