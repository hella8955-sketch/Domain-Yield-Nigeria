
import React from 'react';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/2348133706257";

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
            <div className="px-3 py-1 rounded-full bg-emerald-500 text-navy-dark text-xs font-bold uppercase tracking-widest flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Direct WhatsApp Access
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            The Low-Key Wealth Update: <br />
            <span className="text-emerald-500">From ₦4,500 to ₦800,000+.</span>
          </h1>
          
          <div className="bg-slate-800/40 border-l-4 border-emerald-500 p-4 mb-10 rounded-r-xl">
             <p className="text-lg text-slate-100 font-medium">
               🚀 <span className="text-emerald-400 font-bold">No Laptop? No Problem.</span> This entire masterclass and the investment strategy itself is done 100% on your smartphone with an internet connection.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-navy-dark font-black rounded-xl text-center transition-all shadow-xl shadow-emerald-500/20 transform hover:-translate-y-1 text-lg uppercase tracking-tight flex items-center justify-center"
            >
              DM Now to Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
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
            <span>Joined by 1,200+ Nigerian smartphone investors</span>
          </div>
        </div>
      </div>
    </section>
  );
};
