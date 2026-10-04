import React from 'react';
import { Layers, Move, Maximize, GripHorizontal, Sliders, Zap, Smartphone, Shield } from 'lucide-react';

const features = [
  { icon: Layers, title: 'Multiple Images', description: 'Convert dozens of images into a single PDF document instantly.' },
  { icon: Move, title: 'Drag & Drop', description: 'Easily upload images by dragging them directly into your browser.' },
  { icon: Maximize, title: 'Custom Page Sizes', description: 'Choose from A4, A3, A5, Letter, and Legal page dimensions.' },
  { icon: GripHorizontal, title: 'Image Reordering', description: 'Arrange your images in the exact order you want them to appear.' },
  { icon: Sliders, title: 'Quality Control', description: 'Select between standard, high, and maximum PDF quality.' },
  { icon: Zap, title: 'Fast Generation', description: 'Lightning-fast PDF generation without waiting for server uploads.' },
  { icon: Smartphone, title: 'Mobile Responsive', description: 'Works perfectly on your desktop, tablet, or mobile phone.' },
  { icon: Shield, title: 'Privacy First', description: 'All processing happens locally. Your files never leave your device.' }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Powerful Features</h2>
          <p className="text-slate-600 text-lg">Everything you need to create perfect PDF documents from your images.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
