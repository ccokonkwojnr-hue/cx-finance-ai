import { Activity } from 'lucide-react';

const feeds = [
  "CoinGecko", "Binance", "TwelveData", "Pyth Network", "RedStone", "Chainlink", 
  "TradingView", "DexScreener", "Birdeye", "Coinglass", "Nansen", "Solscan", 
  "Helius RPC", "Fear & Greed Index", "Tavily", "X/Twitter", "CryptoPanic", 
  "NewsAPI", "FRED", "Alpha Vantage", "Jupiter", "Raydium", "Orca", "Drift Protocol"
];

export default function DataFeeds() {
  return (
    <section className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Every data source. One intelligence.</h2>
         <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-text-main mb-1">15+</span>
            <span className="text-xs text-text-muted/70 uppercase tracking-widest font-bold">Live Feeds</span>
          </div>
          <div className="w-px h-12 bg-brand-border hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-text-main mb-1">5ms</span>
            <span className="text-xs text-brand-primary uppercase tracking-widest font-bold">Avg Latency</span>
          </div>
          <div className="w-px h-12 bg-brand-border hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-text-main mb-1 flex items-center gap-2">
              24/7 <Activity className="w-6 h-6 text-green-600 animate-pulse" />
            </span>
            <span className="text-xs text-text-muted/70 uppercase tracking-widest font-bold">Always Running</span>
          </div>
        </div>
      </div>

      {/* Marquee effect */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...feeds, ...feeds].map((feed, i) => (
            <div key={i} className="inline-flex mx-4 px-6 py-3 rounded-xl bg-brand-surface border border-brand-border text-text-muted font-mono text-sm opacity-80 hover:opacity-100 transition-opacity">
              {feed}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
