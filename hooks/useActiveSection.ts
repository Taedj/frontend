import React, { useEffect, useState } from "react";
import { sections } from "../constants/constants";

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -30% 0px", // triggers earlier for top sections
        threshold: 0, // fire as soon as it enters
      }
    );

    const elements: HTMLElement[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    const handleScroll = () => {
      const scrollPos = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;

      if (scrollPos >= pageHeight - 2) {
        setActiveSection(sections[sections.length - 1]);
      }
    };

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeSection };
};

export default useActiveSection;
