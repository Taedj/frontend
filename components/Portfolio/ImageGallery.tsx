import { useState } from 'react';
import Image from 'next/image';
import FullscreenImage from './FullscreenImage';
import './ImageGallery.css';

interface Props {
  images: string[];
}

const ImageGallery = ({ images }: Props) => {
  const [mainImage, setMainImage] = useState(images[0] || '');
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return <div className="image-gallery-empty">No images to display.</div>;
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const handleMainImageClick = () => {
    setFullscreenImage(mainImage);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <div className="image-gallery-container">
        <div className="main-image-display" onClick={handleMainImageClick}>
          <Image src={mainImage} alt="Main Gallery" layout="fill" objectFit="contain" />
        </div>
        <div className="thumbnail-strip">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${image === mainImage ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(image)}
            >
              <Image src={image} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
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
