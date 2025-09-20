import { useEffect, useState, useCallback } from "react";
import { sections } from "../constants/constants";

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection: string | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        }
        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 👇 manual override when clicking
  const handleSetActiveSection = useCallback((id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return { activeSection, setActiveSection: handleSetActiveSection };
};

export default useActiveSection;
