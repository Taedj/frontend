import axios from "axios";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async function (relativePath: string) {
    let url = this.endpoint + relativePath;
    const [path, query] = url.split('?');
    if (!path.endsWith('/')) {
      url = path + '/' + (query ? `?${query}` : '');
    }
    try {
      const response = await axiosInstance.get<T[]>(
        url
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

  post = async function (relativePath: string, data: any, config?: any) {
    let url = this.endpoint + relativePath;
    const [path, query] = url.split('?');
    if (!path.endsWith('/')) {
      url = path + '/' + (query ? `?${query}` : '');
    }
    try {
      const response = await axiosInstance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      console.error("base apiClient post error", error);
      throw {
        message: error.response?.data?.message || "An error occurred",
        status: error.response?.status,
      };
    }
  };
}

export default ApiClient;
