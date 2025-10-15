import { useState } from 'react';
import Image from 'next/image';
import './ImageGallery.css';

interface Props {
  images: string[];
}

const ImageGallery = ({ images }: Props) => {
  const [mainImage, setMainImage] = useState(images[0] || '');

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  if (!images || images.length === 0) {
    return <div className="image-gallery-empty">No images to display.</div>;
  }

  return (
    <div className="image-gallery-container">
      <div className="main-image-display">
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
  );
};

export default ImageGallery;
