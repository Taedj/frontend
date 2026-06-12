import { useEffect, useState, useCallback } from "react";
import { sections } from "../constants/constants";

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (typeof window === "undefined") return;

      // Use a trigger line at 35% of the viewport height from the top
      const triggerLine = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sections[0];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          
          if (triggerLine >= top) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial section
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 👇 manual override when clicking
  const handleSetActiveSection = useCallback((id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return { activeSection, setActiveSection: handleSetActiveSection };
};

export default useActiveSection;
