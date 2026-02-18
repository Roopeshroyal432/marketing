
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-semibold tracking-wide uppercase text-sm mb-4">Pricing</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white mb-6">Simple, scalable plans.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Startup</h3>
            <p className="text-slate-400 mb-6">Perfect for solo founders.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-white">$999</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-slate-300 text-sm">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1 Custom AI Agent</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic Data Integration</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email Support</li>
            </ul>
            <button className="w-full py-3 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-all">Choose Startup</button>
          </div>

          <div className="p-10 rounded-3xl bg-indigo-600 border border-indigo-400 relative flex flex-col transform scale-105 shadow-2xl shadow-indigo-500/20">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-white text-indigo-600 text-xs font-black px-4 py-1 rounded-full uppercase">Most Popular</div>
            <h3 className="text-xl font-bold text-white mb-2">Business</h3>
            <p className="text-indigo-100 mb-6">For growing teams.</p>
            <div className="mb-8 text-white">
              <span className="text-4xl font-extrabold">$2,499</span>
              <span className="opacity-80">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-indigo-50 text-sm">
              <li className="flex items-center"><span className="text-white mr-2">✓</span> 3 Custom AI Agents</li>
              <li className="flex items-center"><span className="text-white mr-2">✓</span> Full CRM Integration</li>
              <li className="flex items-center"><span className="text-white mr-2">✓</span> Priority Slack Support</li>
              <li className="flex items-center"><span className="text-white mr-2">✓</span> Weekly Strategy Calls</li>
            </ul>
            <button className="w-full py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-all shadow-lg">Choose Business</button>
          </div>

          <div className="p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-slate-400 mb-6">Unlimited scale.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-white">Custom</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-slate-300 text-sm">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited AI Agents</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom Model Training</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> dedicated Solutions Engineer</li>
            </ul>
            <button className="w-full py-3 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-all">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
