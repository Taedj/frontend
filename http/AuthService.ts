import axios from "axios";
import { Login } from "../hooks/useLogin";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

class AuthClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  login = async function (creds: Login) {
    return await axiosInstance.post<Login>(this.endpoint + "login/", creds, {
      withCredentials: true,
    });
  };

  logout = async function () {
    return await axiosInstance.post(
      this.endpoint + "logout/",
      {},
      { withCredentials: true },
    );
  };

  checkLogin = async function () {
    return await axiosInstance.get(this.endpoint + "check_login/", {
      withCredentials: true,
    });
  };
}

export default AuthClient;
