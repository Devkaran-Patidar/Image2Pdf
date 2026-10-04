import React from 'react';
import { FileText, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">Image2PDF</span>
          </div>
          
          <p className="text-slate-500 text-sm text-center md:text-left font-medium">
            Simple image-to-PDF conversion, directly in your browser.
          </p>

          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">How It Works</a>
            <a href="#privacy" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Code2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
