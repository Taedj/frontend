import { useState, useEffect } from 'react';
import { dimensions } from '../constants/constants';

const useJobModelSliderWidth = () => {
  const [sliderWidth, setSliderWidth] = useState('');
  
  const calculateJobModelSliderWidth = () => {
    if (window.innerWidth < dimensions.jobModelSliderWidthSmall) return '38rem';
    else if (window.innerWidth < dimensions.jobModelSliderWidthMedium) return '40rem';
    else return '60rem';
  }

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