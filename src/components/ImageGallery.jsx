import { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export const ImageGallery = ({ photos, name, className, cover = true }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = Array.isArray(photos) ? photos : [photos];
  const hasMultiple = images.length > 1;
  const next = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className={`relative group overflow-hidden rounded-2xl ${className} bg-gray-100 flex items-center justify-center`}>
      <img
        key={currentIdx}
        src={images[currentIdx]}
        className={`w-full h-full transition-opacity duration-300 
          ${cover 
            ? "object-cover" 
            : "object-cover md:object-contain" 
          }`}
        alt={`${name} ${currentIdx}`}
      />
      {hasMultiple && (
        <>
          <button 
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md group-hover:opacity-100 transition-opacity text-gray-800 cursor-pointer"
          >
            <LuChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md group-hover:opacity-100 transition-opacity text-gray-800 cursor-pointer"
          >
            <LuChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 w-1.5 rounded-full transition-all ${i === currentIdx ? 'bg-white w-3' : 'bg-white/50'}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};