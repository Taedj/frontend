import axios from "axios";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async function (relativePath: string) {
    try {
      const response = await axiosInstance.get<T[]>(
        this.endpoint + relativePath
      );
      return response.data;
    } catch (error) {
      console.error("base apiClient error", error);
      throw {
        message: error.response?.data?.messagen,
        status: error.response?.status,
      };
    }
  };
}

export default ApiClient;
