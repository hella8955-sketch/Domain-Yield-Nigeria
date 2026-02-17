
import React from 'react';

export const CTASection: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=2348133706257";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-500 rounded-[3rem] p-12 text-center text-navy-dark relative overflow-hidden shadow-2xl shadow-emerald-500/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Ready to Claim Your <br />Financial Freedom?</h2>
          <p className="text-navy-dark/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto relative z-10">
            Secure your spot now. <strong>All you need is your phone and an internet connection.</strong> We only take a limited number of students per batch to ensure success.
          </p>
          
          <div className="flex flex-col items-center space-y-6 relative z-10">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-dark text-white text-xl font-bold px-12 py-5 rounded-2xl hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl inline-flex items-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.782 11.782 0 001.532 5.827L0 24l6.291-1.651A11.747 11.747 0 0012.05 24c6.639 0 12.035-5.391 12.035-12.028a11.81 11.81 0 00-3.617-8.53z" />
              </svg>
              DM Now to Secure Your Spot
            </a>
            
            <div className="flex flex-col items-center">
              <span className="text-navy-dark font-black text-2xl tracking-widest uppercase">08133706257</span>
              <p className="text-sm text-navy-dark/60 mt-1 uppercase tracking-wider font-bold">100% Smartphone Friendly Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
