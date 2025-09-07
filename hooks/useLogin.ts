import { useMutation } from "@tanstack/react-query";
import AuthClient from "../http/AuthService";
import { APIError } from "../http";

export interface Login {
  username: string;
  password: string;
}

const useLogin = () => {
  const authClient = new AuthClient("/core/signin/");

  return useMutation<Login, APIError, Login>({
    mutationKey: ["login"],
    mutationFn: (creds: Login) => authClient.login(creds),
  });
};

export default useLogin;
