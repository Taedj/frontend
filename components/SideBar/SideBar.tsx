"use client";
import { useState } from "react";
import { colors, sections } from "../../constants/constants";
import useConfig from "../../hooks/useConfig";
import SocialMedias from "./SocialMedias";

import useLogout from "../../hooks/useLogout";
import useIsLogged from "../../hooks/useIsLogged";
import useActiveSection from "../../hooks/useActiveSection";

const SideBar = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  const [HoveredIndex, setHoveredIndex] = useState(0);
  const { data: config } = useConfig();
  const { isLogged } = useIsLogged();
  const { mutate } = useLogout();
  const bgImage = config?.profile_image
    ? `url(${config?.profile_image})`
    : undefined;
  return (
    <>
      <div className="flex flex-col justify-between items-center h-screen fixed z-2 bg-bg-very-dark text-opacity-white w-sidebar">
        <div className="flex flex-col items-center">
          <div
            className="w-48 h-48 mb-3 bg-cover rounded-full border-[6px] mt-6"
            style={{
              backgroundImage: bgImage,
              border: `6px solid ${colors.backgroundLessDarkColor}`,
            }}
          ></div>
          <h1 className="text-2xl sm:text-3xl font-semibold leading-8">
            {config?.fullname}
          </h1>
        </div>

        <ul className="flex flex-col items-center list-none text-xl sm:text-2xl leading-[2.2rem] p-0 m-0 font-semibold w-full">
          {sections.map((section, index) => {
            const isActive = activeSection === section;
            const isHovered = HoveredIndex === index;
            return (
              <li
                key={section}
                className="py-1.5 sm:py-2 px-4"
                style={{
                  transition: "color 0.3s",
                  color: isHovered || isActive ? colors.primaryColor : "white",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <a
                  href={`#${section}`}
                  className="text-inherit no-underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault(); // stop default jump
                    setActiveSection(section); // update state + smooth scroll
                  }}
                >
                  {section.replaceAll("-", " ")}
                </a>
              </li>
            );
          })}
        </ul>
        {isLogged && (
          <div className="text-xl sm:text-2xl font-semibold ">
            <span className="hover:text-primary">
              <a href="/" onClick={() => mutate()}>
                Logout
              </a>
            </span>
          </div>
        )}
        <SocialMedias />
      </div>
    </>
  );
};

export default SideBar;
