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
    } catch (error: any) {
      console.error("base apiClient error", error);
      let errMsg = "An error occurred";
      if (error.response?.data) {
        if (typeof error.response.data === "object") {
          if (error.response.data.detail) {
            errMsg = error.response.data.detail;
          } else if (error.response.data.message) {
            errMsg = error.response.data.message;
          } else {
            errMsg = Object.entries(error.response.data)
              .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(", ") : val}`)
              .join("; ");
          }
        } else if (typeof error.response.data === "string") {
          errMsg = error.response.data;
        }
      } else if (error.message) {
        errMsg = error.message;
      }
      throw {
        message: errMsg,
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
    } catch (error: any) {
      console.error("base apiClient post error", error);
      let errMsg = "An error occurred";
      if (error.response?.data) {
        if (typeof error.response.data === "object") {
          if (error.response.data.detail) {
            errMsg = error.response.data.detail;
          } else if (error.response.data.message) {
            errMsg = error.response.data.message;
          } else {
            errMsg = Object.entries(error.response.data)
              .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(", ") : val}`)
              .join("; ");
          }
        } else if (typeof error.response.data === "string") {
          errMsg = error.response.data;
        }
      } else if (error.message) {
        errMsg = error.message;
      }
      throw {
        message: errMsg,
        status: error.response?.status,
      };
    }
  };
}

export default ApiClient;
