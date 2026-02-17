
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <span className="text-2xl font-extrabold tracking-tight text-white mb-6 block">
              DOMAIN<span className="text-emerald-500">YIELD</span> NIGERIA
            </span>
            <p className="text-slate-400 max-w-sm">
              The premium masterclass for Nigerian investors looking to build high-yield digital asset portfolios starting with micro-capital.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#benefits" className="hover:text-emerald-500 transition-colors">Benefits</a></li>
              <li><a href="#outcomes" className="hover:text-emerald-500 transition-colors">What You Learn</a></li>
              <li><a href="#modules" className="hover:text-emerald-500 transition-colors">Curriculum</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>WhatsApp: 08133706257</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Domain Yield Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
