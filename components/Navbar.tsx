
import React from 'react';

export const Navbar: React.FC = () => {
  const whatsappUrl = "https://wa.me/2348133706257";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              DOMAIN<span className="text-emerald-500">YIELD</span> NIGERIA
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-emerald-500 transition-colors">Benefits</a>
            <a href="#outcomes" className="text-sm font-medium text-slate-600 hover:text-emerald-500 transition-colors">Outcomes</a>
            <a href="#modules" className="text-sm font-medium text-slate-600 hover:text-emerald-500 transition-colors">Modules</a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-dark text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
