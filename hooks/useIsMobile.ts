import { useEffect, useState } from "react";
import { dimensions } from "../constants/constants";
import clientLogger from "../lib/clientLogger";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    return window.innerWidth < dimensions.mobileBreakpoint;
  };

  useEffect(() => {
    setIsMobile(checkMobile());
    clientLogger.info(isMobile ? "Mobile view" : "Desktop View");
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};

export default useIsMobile;
