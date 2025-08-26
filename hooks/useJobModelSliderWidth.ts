import { useEffect, useState } from 'react';
import { dimensions } from '../constants/constants';

const useJobModelSliderWidth = () => {
  const [sliderWidth, setSliderWidth] = useState('');
  
  const calculateJobModelSliderWidth = () => {
    if (window.innerWidth < dimensions.jobModelSliderWidthSmall) {
      return '95vw'; // almost full width on small devices
    } else if (window.innerWidth < dimensions.jobModelSliderWidthMedium) {
      return '80vw'; // medium screens
    } else {
      return '60vw'; // large screens
    }
  };

  useEffect(() => {
    setSliderWidth(calculateJobModelSliderWidth());
    
    const handleResize = () => {
        setSliderWidth(calculateJobModelSliderWidth());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {sliderWidth};
};

export default useJobModelSliderWidth;