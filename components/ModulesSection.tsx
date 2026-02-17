
import React from 'react';

const modules = [
  {
    title: "Domain Hunting",
    desc: "Discover how to spot 'sleeping giant' domains before anyone else.",
    badge: "Module 1"
  },
  {
    title: "Valuation Secrets",
    desc: "Learn to price your assets to move quickly while maximizing profit.",
    badge: "Module 2"
  },
  {
    title: "High-Ticket Flipping",
    desc: "The professional's guide to negotiation and closing six-figure deals.",
    badge: "Module 3"
  }
];

export const ModulesSection: React.FC = () => {
  return (
    <section id="modules" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Masterclass Curriculum</h2>
          <p className="text-slate-500">A rigorous 3-step system designed for high ROI.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, idx) => (
            <div key={idx} className="relative group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg hover:border-emerald-500 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 mt-4 mr-4 text-slate-100 text-6xl font-black group-hover:text-emerald-50/50 transition-colors pointer-events-none">
                0{idx + 1}
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-navy-dark text-white text-[10px] font-bold mb-6">
                {module.badge}
              </span>
              <h3 className="text-2xl font-bold text-navy-dark mb-4">{module.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{module.desc}</p>
              <div className="h-1 w-12 bg-emerald-500 rounded-full transition-all group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
