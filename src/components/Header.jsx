import React from 'react';
import { Code2, FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg shadow-sm">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Image2PDF</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How It Works</a>
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
        </nav>

        <div className="flex items-center gap-5">
          <a href="#privacy" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors hidden sm:block">Privacy</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Code2 className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
