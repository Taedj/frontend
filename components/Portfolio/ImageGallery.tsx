import { useState, useEffect } from 'react';
import FullscreenImage from './FullscreenImage';
import './ImageGallery.css';

interface Props {
  images: string[];
}

const ImageGallery = ({ images }: Props) => {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="image-gallery-empty">No images to display.</div>;
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const handleMainImageClick = () => {
    if (mainImage) {
      setFullscreenImage(mainImage);
    }
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <div className="image-gallery-container">
        <div className="main-image-display" onClick={handleMainImageClick}>
                                        {mainImage && <img src={mainImage} alt="Main Gallery" className="w-full h-auto" />}
        </div>
        <div className="thumbnail-strip">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${image === mainImage ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(image)}
            >
                                                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      {fullscreenImage && (
        <FullscreenImage src={fullscreenImage} onClose={handleCloseFullscreen} />
      )}
    </>
  );
};

export default ImageGallery;
