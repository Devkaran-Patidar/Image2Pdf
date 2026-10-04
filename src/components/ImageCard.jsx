import React from 'react';
import { Trash2, GripVertical } from 'lucide-react';
import { formatFileSize } from '../utils/imageUtils';

const ImageCard = ({ 
  image, 
  index, 
  onRemove, 
  onDragStart, 
  onDragEnter, 
  onDragEnd 
}) => {
  return (
    <div 
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnter={(e) => onDragEnter(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      className="flex items-center gap-4 p-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-move group"
    >
      <div className="flex items-center text-slate-400 group-hover:text-indigo-500 transition-colors">
        <GripVertical className="w-5 h-5" />
        <span className="w-6 text-center text-sm font-bold text-slate-400">{index + 1}</span>
      </div>

      <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
        <img 
          src={image.dataUrl} 
          alt={image.file.name} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-800 truncate">
          {image.file.name}
        </p>
        <div className="flex items-center text-xs text-slate-500 mt-1 gap-3">
          <span>{formatFileSize(image.file.size)}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>{image.width} × {image.height}</span>
        </div>
      </div>

      <button
        onClick={() => onRemove(image.id)}
        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        title="Remove image"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ImageCard;
