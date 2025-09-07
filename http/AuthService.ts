import axios from "axios";
import { Login } from "../hooks/useLogin";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

class AuthClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  login = async (creds: Login) => {
    try {
      const response = await axiosInstance.post<Login>(
        this.endpoint + "login/",
        creds,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.log("this is inside Login method:", error);
      if (axios.isAxiosError(error)) {
        throw {
          status: error.response?.status,
          data: error.response?.data,
        };
      }
      throw { status: 500, data: { detail: "Unexpected error during login" } };
    }
  };

  logout = async () => {
    try {
      const response = await axiosInstance.post(
        this.endpoint + "logout/",
        {},
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw {
          status: error.response?.status,
          data: error.response?.data,
        };
      }
      throw { status: 500, data: { detail: "Unexpected error during logout" } };
    }
  };

  checkLogin = async () => {
    return await axiosInstance.get(this.endpoint + "check_login/", {
      withCredentials: true,
    });
  };
}

export default AuthClient;
