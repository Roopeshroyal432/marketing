
import React, { useState } from 'react';
import { generateAutomationStrategy } from '../services/gemini';

const AIBusinessTool: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
    if (!businessType) return;
    setLoading(true);
    try {
      const data = await generateAutomationStrategy(businessType);
      setResult(data);
    } catch (err) {
      alert("Failed to generate strategy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">See the future of your business.</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Enter your industry and let our AI suggest a custom automation roadmap for you in seconds.</p>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="e.g. Real Estate, SaaS, Fitness..." 
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="flex-grow bg-slate-950 border border-slate-800 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Analyze My Business'}
            </button>
          </div>
        </div>

        {result && (
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 text-left animate-in fade-in duration-700">
            <h3 className="text-2xl font-bold text-indigo-400 mb-6 flex items-center">
              <span className="mr-2">✨</span> {result.strategyTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">Lead Generation</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{result.leadGenIdea}</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Customer Support</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{result.supportIdea}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">Operations</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{result.opsIdea}</p>
                </div>
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                  <h4 className="text-indigo-400 font-bold mb-1 uppercase text-xs tracking-widest">Potential ROI</h4>
                  <p className="text-white font-bold text-xl">{result.estimatedRoi}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 flex justify-center">
              <a href="#pricing" className="text-indigo-500 font-bold hover:underline flex items-center">
                Implement this strategy now <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIBusinessTool;
