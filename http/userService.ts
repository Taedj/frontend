import axios from "axios";
import { User, ActivationParams } from "../hooks/useCreateUser";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

class UserClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  create = async function (user: User) {
    try {
      const response = await axiosInstance.post<User>(this.endpoint, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error when creating new user", error);
      throw {
        message: error.response?.data?.message,
        status: error.response?.status,
      };
    }
  };

  activate = async function (activationParams: ActivationParams) {
    try {
      const response = await axiosInstance.post<ActivationParams>(
        this.endpoint + "activation/",
        activationParams
      );
      return response.data;
    } catch (error) {
      console.error("Error when activating new user", error);
      throw {
        message: error.response?.data?.message,
        status: error.response?.status,
      };
    }
  };
}

export default UserClient;
