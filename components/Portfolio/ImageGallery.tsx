import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import FullscreenImage from './FullscreenImage';
import './ImageGallery.css';

interface Props {
  images: string[];
}

const ImageGallery = ({ images = [] }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Reset index when images set changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="image-gallery-empty">No images to display.</div>;
  }

  const mainImage = images[currentIndex];

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMainImageClick = () => {
    if (mainImage) {
      setFullscreenImage(mainImage);
    }
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop from opening fullscreen overlay
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop from opening fullscreen overlay
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const hasMultipleImages = images.length > 1;

  return (
    <>
      <div className="image-gallery-container">
        {/* Main image display */}
        <div className="main-image-display group" onClick={handleMainImageClick}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={mainImage}
              alt={`Gallery image ${currentIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full object-contain cursor-zoom-in"
            />
          </AnimatePresence>

          {/* Hover Zoom Overlay */}
          <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm border border-white/10 z-10">
            <FiMaximize2 size={16} />
          </div>

          {/* Overlay Navigation Buttons */}
          {hasMultipleImages && (
            <>
              <button
                onClick={goToPrev}
                className="
                  absolute left-3 top-1/2 -translate-y-1/2 
                  p-2 rounded-full 
                  bg-black/50 hover:bg-primary text-white 
                  transition-all duration-200 backdrop-blur-sm 
                  border border-white/10 hover:border-primary/20
                  z-10 cursor-pointer shadow-lg
                "
                aria-label="Previous image"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2 
                  p-2 rounded-full 
                  bg-black/50 hover:bg-primary text-white 
                  transition-all duration-200 backdrop-blur-sm 
                  border border-white/10 hover:border-primary/20
                  z-10 cursor-pointer shadow-lg
                "
                aria-label="Next image"
              >
                <FiChevronRight size={20} />
              </button>
            </>
          )}

          {/* Index Counter Badge */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-black/60 text-gray-200 border border-white/5 backdrop-blur-sm z-10 select-none">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        {hasMultipleImages && (
          <div className="thumbnail-strip">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        )}
      </div>
      {fullscreenImage && (
        <FullscreenImage src={fullscreenImage} onClose={handleCloseFullscreen} />
      )}
    </>
  );
};

export default ImageGallery;
