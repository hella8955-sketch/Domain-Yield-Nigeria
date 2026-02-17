
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
              Mobile Only Access
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            The Low-Key Wealth Update: <br />
            <span className="text-emerald-500">From ₦4,500 to ₦800,000+.</span>
          </h1>
          
          <div className="bg-slate-800/40 border-l-4 border-emerald-500 p-5 mb-10 rounded-r-xl">
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
              <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.782 11.782 0 001.532 5.827L0 24l6.291-1.651A11.747 11.747 0 0012.05 24c6.639 0 12.035-5.391 12.035-12.028a11.81 11.81 0 00-3.617-8.53z" />
              </svg>
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-4 text-sm text-slate-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-8 h-8 rounded-full border-2 border-navy-dark" 
                  src={`https://picsum.photos/seed/${i + 22}/100/100`} 
                  alt="Investor" 
                />
              ))}
            </div>
            <span>Joined by 1,200+ mobile investors in Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
};
