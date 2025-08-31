import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { colors, sections } from "../../constants/constants";
import useConfig from "../../hooks/useConfig";
import SocialMedias from "../SideBar/SocialMedias";
import useIsLogged from "../../hooks/useIsLogged";
import useLogout from "../../hooks/useLogout";
import Link from "next/link";

const Navbar = () => {
  const { data: config } = useConfig();
  const [menuClicked, setMenuClicked] = useState(false);
  const [HoveredIndex, setHoveredIndex] = useState(0);
  const { isLogged } = useIsLogged();
  const { mutate } = useLogout();
  return (
    <>
      <div className="fixed w-full top-0 left-0 z-50">
        <div className="flex justify-between align-center items-center text-white px-6 h-26 font-semibold bg-navbar">
          <h1 className="text-4xl">{config?.fullname}</h1>
          <div className="flex items-center">
            <SocialMedias className="!mb-0" />
            {!menuClicked && (
              <MdMenu
                size={30}
                className="ml-6"
                onClick={() => setMenuClicked(!menuClicked)}
              />
            )}
            {menuClicked && (
              <RxCross1
                size={30}
                className="ml-6"
                onClick={() => setMenuClicked(!menuClicked)}
              />
            )}
          </div>
        </div>
        {menuClicked && (
          <div className="absolute w-full z-50">
            <ul className="text-white text-2xl bg-menu">
              {sections.map((section, index) => (
                <li
                  key={index}
                  className="p-3 border-b border-menu-item-border"
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
              {!isLogged && (
                <>
                  <li
                    key={sections.length}
                    className="hover:text-primary p-3 border-b border-menu-item-border"
                  >
                    <Link href="/signin">Sign-in</Link>
                  </li>
                  <li
                    key={sections.length + 1}
                    className="hover:text-primary p-3"
                  >
                    <Link href="/signup">Sign-up</Link>
                  </li>
                </>
              )}
              {isLogged && (
                <li key={sections.length} className="hover:text-primary p-3">
                  <a href="/" onClick={() => mutate()}>
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
