
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { number: "01", title: "Strategy Call", text: "We analyze your existing workflows to find the highest-ROI automation opportunities." },
    { number: "02", title: "Custom Buildout", text: "Our engineers build and test your custom AI agents and integrations in a sandbox." },
    { number: "03", title: "Launch & Scale", text: "We go live and continuously optimize your agents for better performance over time." }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-semibold tracking-wide uppercase text-sm mb-4">How it works</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white mb-6">From manual to automated in 14 days.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-slate-800 -z-10"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 p-10 rounded-3xl relative">
              <span className="text-6xl font-black text-indigo-500/10 absolute top-4 right-6">{step.number}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
