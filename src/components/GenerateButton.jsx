import React from 'react';
import { FileDown, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

const GenerateButton = ({ onClick, isGenerating, disabled, progress }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isGenerating}
      className={cn(
        "w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-sm relative overflow-hidden",
        disabled 
          ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
          : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/30 hover:shadow-lg hover:-translate-y-0.5"
      )}
    >
      {isGenerating ? (
        <>
          <div className="absolute left-0 top-0 bottom-0 bg-white/20 transition-all duration-300" style={{ width: `${progress}%` }}></div>
          <Loader2 className="w-6 h-6 animate-spin relative z-10" />
          <span className="relative z-10">Generating PDF ({Math.round(progress)}%)...</span>
        </>
      ) : (
        <>
          <FileDown className="w-6 h-6" />
          Generate PDF
        </>
      )}
    </button>
  );
};

export default GenerateButton;
