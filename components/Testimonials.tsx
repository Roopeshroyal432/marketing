
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      title: "CEO at GrowthLab",
      text: "Aether AI transformed our customer support. We've seen a 40% reduction in response times and our team is finally working on strategy instead of repetitive tickets.",
      img: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Marcus Thorne",
      title: "Founder of Thorne Media",
      text: "The lead outreach automation they built is like having 5 full-time SDRs working around the clock. Our pipeline has never been healthier.",
      img: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      name: "Elena Rodriguez",
      title: "COO at Fintech Dynamics",
      text: "Reliable, professional, and high-tech. If you aren't using Aether AI, you're literally burning money on manual work.",
      img: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-3xl md:text-5xl font-extrabold text-white mb-6">Loved by founders.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 italic text-slate-300">
              <div className="flex items-center space-x-4 mb-6 not-italic">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full border border-indigo-500/20" />
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-indigo-400 text-xs">{review.title}</p>
                </div>
              </div>
              <p className="leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
