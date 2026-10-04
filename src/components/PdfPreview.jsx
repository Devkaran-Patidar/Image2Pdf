import React, { useEffect, useState } from 'react';
import { getPdfPreviewUrl } from '../utils/pdfGenerator';
import { Loader2, FileDown } from 'lucide-react';

const PdfPreview = ({ images, settings }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const generatePreview = async () => {
      if (images.length === 0) {
        setPreviewUrl(null);
        return;
      }
      setIsLoading(true);
      try {
        const url = await getPdfPreviewUrl({ images, ...settings });
        if (isMounted) {
          setPreviewUrl(url);
        }
      } catch (err) {
        console.error("Preview generation failed:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    // Debounce preview generation to prevent freezing when settings change rapidly
    const timeoutId = setTimeout(() => {
      generatePreview();
    }, 500);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [images, settings]);

  if (images.length === 0) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-2xl h-[36rem] flex flex-col items-center justify-center text-slate-400 p-6 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
          <FileDown className="w-8 h-8 text-slate-300" />
        </div>
        <p className="font-medium text-slate-500 text-lg">PDF Preview</p>
        <p className="text-sm text-slate-400 mt-2">Upload images to see how your PDF will look</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-[36rem]">
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0">
        <h3 className="font-semibold text-slate-700 text-sm flex items-center gap-2">
          Preview
          {isLoading && <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />}
        </h3>
        <span className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-sm">
          {images.length} {images.length === 1 ? 'Page' : 'Pages'}
        </span>
      </div>
      
      <div className="flex-1 bg-slate-100 relative">
        {previewUrl ? (
          <iframe 
            src={previewUrl} 
            className="w-full h-full border-none"
            title="PDF Preview"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-white/50 backdrop-blur-sm">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            <p className="text-sm font-medium text-slate-500">Generating preview...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfPreview;
