"use client";
import Link from "next/link";

import useIsLogged from "../../hooks/useIsLogged";

const Header = () => {
  const { isLogged } = useIsLogged();

  return (
    <div className="hidden lg:flex justify-end items-center p-4 bg-transparent absolute top-0 right-0 w-full z-50">
      {!isLogged && (
        <div className="text-xl font-semibold">
          <span className="mr-4" style={{ color: "white" }}>
            <Link href="/signin">Login</Link>
          </span>
          <span style={{ color: "white" }}>
            <Link href="/signup">Register</Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
