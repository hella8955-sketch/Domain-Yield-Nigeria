
import React from 'react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Power of Smart Asset Allocation</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See the massive disparity between routine consumption and strategic micro-investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
            <div className="bg-slate-200 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Standard Consumption</h3>
            <p className="text-slate-500 mb-6">Daily/Weekly Recharge Cards</p>
            <div className="text-3xl font-bold text-slate-900 mb-8">₦4,500</div>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-600">
                <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                Zero ROI after consumption
              </li>
              <li className="flex items-start text-slate-600">
                <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                Depreciating value
              </li>
            </ul>
          </div>

          <div className="bg-navy-dark p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden group transition-transform hover:scale-[1.02]">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-emerald-500 text-navy-dark text-[10px] font-black px-2 py-1 rounded">HIGH YIELD</span>
            </div>
            <div className="bg-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Micro-Investment Asset</h3>
            <p className="text-slate-400 mb-6">Premium Domain Acquisition</p>
            <div className="text-3xl font-bold text-emerald-500 mb-8">₦800,000+ <span className="text-sm font-normal text-slate-400">(Resale Value)</span></div>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-300">
                <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z" clipRule="evenodd"/></svg>
                17,000%+ Potential ROI
              </li>
              <li className="flex items-start text-slate-300">
                <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z" clipRule="evenodd"/></svg>
                High-Ticket Flipping Strategy
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 italic max-w-xl mx-auto">
            "Currently being utilized by a small group of successful Nigerian investors to achieve financial freedom under the radar."
          </p>
        </div>
      </div>
    </section>
  );
};
