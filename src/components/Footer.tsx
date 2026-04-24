export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-primary-hover flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-text-main">CX FINANCE AI</span>
            </div>
            <p className="text-text-muted text-sm max-w-xs mb-8">
              Allow everyone to invest autonomously with AI agents, in a safe and responsible way.
            </p>
            <div className="mb-2">
               <span className="text-xs font-bold text-text-muted/70 uppercase tracking-widest">As seen on:</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-text-muted text-sm font-bold opacity-80">
              <span className="hover:text-text-main transition-colors cursor-default">Forbes</span>
              <span className="hover:text-text-main transition-colors cursor-default">Cointelegraph</span>
              <span className="hover:text-text-main transition-colors cursor-default">CoinDesk</span>
              <span className="hover:text-text-main transition-colors cursor-default">Yahoo Finance</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-text-main font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><a href="#market-intelligence" className="hover:text-brand-primary transition-colors">Market Intelligence</a></li>
              <li><a href="#trading-execution" className="hover:text-brand-primary transition-colors">Trading & Execution</a></li>
              <li><a href="#research-analysis" className="hover:text-brand-primary transition-colors">Research & Analysis</a></li>
              <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><a href="#pricing" className="hover:text-brand-primary transition-colors">Pricing</a></li>
              <li><a href="#affiliates" className="hover:text-brand-primary transition-colors">Affiliates</a></li>
              <li><a href="#news" className="hover:text-brand-primary transition-colors">News</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#risk-disclosure" className="hover:text-brand-primary transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-text-muted/70 text-sm">© 2026 CX Finance AI. All rights reserved.</p>
            <p className="text-xs text-text-muted/50 max-w-lg">
              CX FINANCE AI is a concept product designed and developed by Chukiextra as a proof-of-concept for AI-driven finance workflows.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-text-muted/70">
            <span>Status: All Systems Operational <span className="inline-block w-2 h-2 rounded-full bg-green-500 ml-1"></span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
