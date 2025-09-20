"use client";
import Link from "next/link";
import { colors } from "../../constants/constants";
import useIsLogged from "../../hooks/useIsLogged";

const Header = () => {
  const { isLogged } = useIsLogged();

  return (
<<<<<<< HEAD
    <div className="hidden lg:flex justify-end items-center p-4 bg-transparent absolute top-0 right-0 w-full">
=======
    <div className="hidden lg:flex justify-end items-center p-4 bg-transparent">
>>>>>>> eb91717e2673b7813e7fc08240be1bbcee50d470
      {!isLogged && (
        <div className="text-xl font-semibold">
          <span className="mr-4" style={{ color: colors.primaryColor }}>
            <Link href="/signin">Login</Link>
          </span>
          <span style={{ color: colors.primaryColor }}>
            <Link href="/signup">Register</Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
