"use client";
import { useState } from "react";
import { colors, sections } from "../../constants/constants";
import useConfig from "../../hooks/useConfig";
import SocialMedias from "./SocialMedias";
import Link from "next/link";
import useLogout from "../../hooks/useLogout";
import useIsLogged from "../../hooks/useIsLogged";

const SideBar = () => {
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
            className="w-72 h-72 mb-5 bg-cover rounded-full border-8 mt-10"
            style={{
              backgroundImage: bgImage,
              border: `8px solid ${colors.backgroundLessDarkColor}`,
            }}
          ></div>
          <h1 className="text-4xl font-semibold leading-10">
            {config?.fullname}
          </h1>
        </div>
        {!isLogged && (
          <div className="text-xl font-semibold ">
            <span className="mr-4" style={{ color: colors.primaryColor }}>
              <Link href="/signin">Login</Link>
            </span>
            <span style={{ color: colors.primaryColor }}>
              <Link href="/signup">Register</Link>
            </span>
          </div>
        )}
        <ul className="flex flex-col items-center list-none text-3xl leading-10 p-0 m-0 font-semibold w-full">
          {sections.map((section, index) => (
            <li
              key={section}
              className="p-4"
              style={{
                transition: "color 0.3s",
                color:
                  HoveredIndex === index || index === 0
                    ? colors.primaryColor
                    : "white",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <a href={`#${section}`} className="text-inherit no-underline">
                {section.replaceAll("-", " ")}
              </a>
            </li>
          ))}
        </ul>
        {isLogged && (
          <div className="text-3xl font-semibold ">
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
