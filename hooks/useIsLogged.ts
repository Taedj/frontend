import { useState, useEffect } from "react";
import AuthClient from "../http/AuthService";

const useIsLogged = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const check = async () => {
      const authClient = new AuthClient("/core/signin/");
      const response = await authClient.checkLogin();
      const data = await response.data;
      if (data["detail"] === "Authenticated") return setIsLogged(true);
      return setIsLogged(false);
    };
    check();
  }, []);
  return { isLogged };
};
export default useIsLogged;
