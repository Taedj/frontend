import { useState, useEffect } from 'react';
import { dimensions } from '../constants/constants';

const useSlidesCount = () => {
  const [slideToShow, setSlideToShow] = useState(2);
  
  const calculateSlidesNumber = () => {
    if (window.innerWidth < dimensions.mobileBreakpoint) return 1;
    return 2;
  };

  useEffect(() => {
    setSlideToShow(calculateSlidesNumber());
    
    const handleResize = () => {
      setSlideToShow(calculateSlidesNumber());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {slideToShow};
};

export default useSlidesCount;