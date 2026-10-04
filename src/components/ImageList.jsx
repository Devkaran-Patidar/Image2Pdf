import React, { useRef } from 'react';
import ImageCard from './ImageCard';
import { Trash } from 'lucide-react';

const ImageList = ({ images, setImages }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    dragItem.current = position;
    setTimeout(() => {
      e.target.style.opacity = '0.5';
    }, 0);
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    if (dragItem.current !== undefined && dragOverItem.current !== undefined) {
      const copyListItems = [...images];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = undefined;
      dragOverItem.current = undefined;
      setImages(copyListItems);
    }
  };

  const handleRemove = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  const handleClearAll = () => {
    setImages([]);
  };

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 mt-6">
      <div className="flex items-center justify-between px-1 mb-2">
        <span className="text-sm font-bold text-slate-600">
          {images.length} {images.length === 1 ? 'Image' : 'Images'} Selected
        </span>
        <button 
          onClick={handleClearAll}
          className="text-sm text-red-500 font-medium hover:text-red-600 flex items-center gap-1 transition-colors"
        >
          <Trash className="w-4 h-4" /> Clear All
        </button>
      </div>
      
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <ImageCard 
            key={img.id}
            image={img}
            index={index}
            onRemove={handleRemove}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
