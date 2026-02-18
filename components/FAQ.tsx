
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <span className={`transform transition-transform duration-300 text-indigo-500 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { question: "How long does setup take?", answer: "Most deployments take between 10 to 14 days, depending on the complexity of your current integrations." },
    { question: "Can I cancel my subscription anytime?", answer: "Yes, we offer month-to-month contracts. You can cancel with 30 days' notice." },
    { question: "Do you offer custom training?", answer: "Absolutely. For Enterprise clients, we fine-tune models on your proprietary company data for maximum accuracy." },
    { question: "Will AI replace my entire staff?", answer: "Our goal is to augment your staff. By automating low-level tasks, your human team can focus on creative and high-impact work." }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
