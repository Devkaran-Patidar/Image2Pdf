import React from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';
import { cn } from '../lib/utils';

const UploadZone = ({ onDrop, isCompact = false }) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    }
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "relative flex flex-col items-center justify-center w-full border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 overflow-hidden group",
        isCompact ? "h-32 bg-slate-50 border-slate-300" : "h-72 bg-slate-50 border-slate-300",
        isDragActive && "border-indigo-500 bg-indigo-50",
        isDragReject && "border-red-500 bg-red-50",
        !isDragActive && !isDragReject && "hover:border-indigo-400 hover:bg-slate-100"
      )}
    >
      <input {...getInputProps()} />
      
      {isDragActive && (
         <div className="absolute inset-0 bg-indigo-500/10 z-0"></div>
      )}

      <div className="flex flex-col items-center justify-center p-6 text-center z-10 relative">
        <div className={cn(
          "flex items-center justify-center bg-white rounded-full shadow-sm mb-4 transition-transform group-hover:scale-110",
          isCompact ? "w-10 h-10" : "w-16 h-16"
        )}>
          <UploadCloud className={cn(
            "text-indigo-500",
            isCompact ? "w-5 h-5" : "w-8 h-8"
          )} />
        </div>
        
        {isCompact ? (
          <p className="text-sm font-medium text-slate-600">
            <span className="text-indigo-600 font-semibold">Click</span> or drag more images
          </p>
        ) : (
          <>
            <p className="mb-2 text-lg font-semibold text-slate-700">
              <span className="text-indigo-600">Click to upload</span> or drag and drop
            </p>
            <p className="text-sm text-slate-500">
              Supported formats: JPG, PNG, WEBP
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadZone;
