
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all group">
    <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-semibold tracking-wide uppercase text-sm mb-4">Features</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white mb-6">Built for scale. Powered by AI.</p>
          <p className="text-slate-400 max-w-2xl mx-auto">We don't just give you tools; we build the infrastructure that replaces manual labor with intelligent automation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Instant Lead Outreach"
            description="Our AI agents identify and reach out to high-intent leads across LinkedIn and Email while you sleep."
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
            title="24/7 Smart Support"
            description="Reduce ticket volume by 70% with support bots that actually understand context and solve problems."
          />
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
            title="Deep Data Insights"
            description="AI-driven analytics that reveal hidden opportunities in your business data without a data scientist."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
