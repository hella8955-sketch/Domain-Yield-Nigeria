
import React from 'react';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=2348133706257";

  return (
    <section className="pt-32 pb-20 bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex flex-wrap items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Micro-Investment 2024
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-700/30 border border-slate-600/50 text-slate-300 text-xs font-bold uppercase tracking-widest flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile Only Access
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            The Low-Key Wealth Update: <br />
            <span className="text-emerald-500">From ₦4,500 to ₦800,000+.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            Most people spend this on a single recharge card. Turn that cost into a high-yield digital asset.
          </p>
          
          <p className="text-emerald-400 font-bold text-lg mb-8 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Requires ONLY your smartphone and an internet connection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-navy-dark font-black rounded-xl text-center transition-all shadow-xl shadow-emerald-500/20 transform hover:-translate-y-1 text-lg uppercase tracking-tight"
            >
              DM Now to Get Started
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-4 text-sm text-slate-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-8 h-8 rounded-full border-2 border-navy-dark" 
                  src={`https://picsum.photos/seed/${i + 15}/100/100`} 
                  alt="Investor" 
                />
              ))}
            </div>
            <span>Joined by 1,200+ Nigerian mobile investors</span>
          </div>
        </div>
      </div>
    </section>
  );
};
