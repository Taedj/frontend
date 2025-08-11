import { useState, useEffect } from 'react';
import { dimensions } from '../constants/constants';

const useIsMobile = () => {
  const [isMobile,setIsMobile] = useState(false);
  
  const checkMobile = () => {
    return window.innerWidth < dimensions.mobileBreakpoint;
  }

  useEffect(() => {
    setIsMobile(checkMobile());
    
    const handleResize = () => {
        setIsMobile(checkMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {isMobile};
};

export default useIsMobile;