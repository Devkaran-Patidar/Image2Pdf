import React from 'react';
import { UploadCloud, Settings2, FileDown } from 'lucide-react';

const steps = [
  {
    icon: UploadCloud,
    title: '1. Upload Images',
    description: 'Drag and drop your JPG, PNG, or WEBP images directly into the browser.'
  },
  {
    icon: Settings2,
    title: '2. Arrange & Customize',
    description: 'Reorder your images, choose page size, margins, and image fit options.'
  },
  {
    icon: FileDown,
    title: '3. Generate PDF',
    description: 'Instantly generate and download your high-quality PDF file.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">How It Works</h2>
          <p className="text-slate-600 text-lg">Three simple steps to convert your images into a professional PDF document.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center relative overflow-hidden group hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
