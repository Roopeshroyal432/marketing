
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1 rounded-full mb-8">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Trusted by 50+ Modern Startups</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Automate your workflow <br />
          <span className="gradient-text">with Aether AI.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop wasting hours on manual tasks. We build custom AI agents that handle your outreach, customer support, and data operations—so you can focus on growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cta" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all text-lg">
            Get Started Free
          </a>
          <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-full border border-slate-800 hover:border-slate-700 transition-all text-lg">
            How it works
          </a>
        </div>

        <div className="mt-20 relative rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-2xl">
          <img 
            src="https://picsum.photos/seed/aether/1200/600" 
            alt="Platform Preview" 
            className="rounded-xl opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
