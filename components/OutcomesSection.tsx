
import React from 'react';

const outcomes = [
  {
    title: "Start Domain Investing",
    desc: "Step-by-step guidance on setting up your infrastructure and choosing your first target niche.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "₦800k+ in Under 1 Week",
    desc: "Master the velocity of flipping. We reveal the secrets to closing deals in record time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Payment Systems",
    desc: "How to receive your international payments securely from anywhere in Nigeria.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "High Value Selection",
    desc: "Advanced techniques for identifying domains that the big corporations are desperate for.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export const OutcomesSection: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-navy-dark">What You'll Achieve</h2>
            <p className="text-slate-600 mt-2">The exact roadmap to digital asset mastery.</p>
          </div>
          <div className="text-emerald-500 font-bold flex items-center">
            Accelerated Program <span className="ml-2 w-8 h-[2px] bg-emerald-500"></span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/20">
              <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {outcome.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-dark mb-3">{outcome.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
