import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacySection = () => {
  return (
    <section id="privacy" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8 backdrop-blur-sm border border-white/10 shadow-inner">
              <ShieldCheck className="w-10 h-10 text-emerald-400" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Your Privacy is Guaranteed</h2>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Your images are processed locally in your browser. They are <strong className="text-white font-semibold">not uploaded to a server</strong> and we have no access to them. What happens on your device, stays on your device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
