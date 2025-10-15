import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import './FullscreenImage.css';

interface Props {
  src: string;
  onClose: () => void;
}

const FullscreenImage = ({ src, onClose }: Props) => {
  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <div className="close-button">
        <RxCross1 />
      </div>
      <div className="fullscreen-image-container">
        <Image src={src} alt="Fullscreen Image" layout="fill" className="fullscreen-image" />
      </div>
    </div>
  );
};

export default FullscreenImage;
