
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="cta" className="text-center mb-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-3xl p-12 border border-indigo-500/20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to work smarter?</h2>
          <p className="text-indigo-200 mb-10 max-w-xl mx-auto">Join dozens of companies already scaling their operations with Aether AI automation agents.</p>
          <button className="px-10 py-5 bg-white text-slate-950 font-black rounded-full hover:bg-slate-200 transition-all text-xl shadow-xl shadow-white/10">
            Book Your Free Demo Call
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">A</div>
              <span className="text-xl font-bold tracking-tight text-white">AetherAI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The world's premier AI automation agency for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Lead Automation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Customer Support Bots</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Data Analysis AI</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">CRM Integrations</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Get AI strategy tips delivered weekly.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 w-full focus:outline-none" />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-500 transition-all">Go</button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
          © 2025 Aether AI Automation Agency. All rights reserved. Built with intelligence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
