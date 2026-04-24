export default function Mission() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Aesthetic lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="font-display text-3xl md:text-5xl font-medium leading-tight text-text-main mb-6">
          "Allow everyone to invest autonomously with AI agents, in a <span className="text-brand-primary">safe</span> and <span className="text-brand-primary">responsible</span> way — no experience or bank account required."
        </p>
        <div className="w-16 h-1 bg-brand-primary mx-auto mt-12 rounded-full" />
      </div>
    </section>
  );
}
