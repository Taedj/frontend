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

  login = async function (creds: Login) {
    try {
      const response = await axiosInstance.post<Login>(
        this.endpoint + "login/",
        creds,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error when Login", error);
      throw {
        message: error.response?.data?.message,
        status: error.response?.status,
      };
    }
  };

  logout = async function () {
    try {
      const response = await axiosInstance.post(
        this.endpoint + "logout/",
        {},
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error("Error when logout", error);
      throw {
        message: error.response?.data?.message,
        status: error.response?.status,
      };
    }
  };

  checkLogin = async function () {
    return await axiosInstance.get(this.endpoint + "check_login/", {
      withCredentials: true,
    });
  };
}

export default AuthClient;
