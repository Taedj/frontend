import axios, { AxiosError } from "axios";
import { User, ActivationParams } from "../hooks/useCreateUser";
import { API_URL } from "../constants/constants";
import { APIError } from ".";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

class UserClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  create = async (user: User) => {
    try {
      const response = await axiosInstance.post<User>(this.endpoint, user, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // ✅ Consistent structured error
        const err: APIError = {
          status: error.response?.status ?? 500,
          data: error.response?.data ?? { detail: "Unknown error" },
        };
        throw err;
      }
      throw {
        status: 500,
        data: { detail: "Unexpected error during user creation" },
      };
    }
  };

  activate = async (activationParams: ActivationParams) => {
    try {
      const response = await axiosInstance.post<ActivationParams>(
        this.endpoint + "activation/",
        activationParams
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err: APIError = {
          status: error.response?.status ?? 500,
          data: error.response?.data ?? { detail: "Unknown error" },
        };
        throw err;
      }
      throw {
        status: 500,
        data: { detail: "Unexpected error during activation" },
      };
    }
  };
}

export default UserClient;
