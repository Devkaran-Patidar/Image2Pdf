import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

const Hero = () => {
  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white"></div>
      
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Convert Images to PDF in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Seconds</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Combine your images into a high-quality PDF directly in your browser. 
          No uploads, no waiting, just instant conversion.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button 
            onClick={scrollToGenerator}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Start Converting
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="inline-flex items-center justify-center gap-2 text-sm text-slate-500 font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
          <Lock className="w-4 h-4 text-emerald-500" />
          Your files never leave your device.
        </div>
      </div>
    </section>
  );
};

export default Hero;
