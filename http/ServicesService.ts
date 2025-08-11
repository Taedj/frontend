import ApiClient from "./apiClient";
import { Service } from "../hooks/useServices";

const ServicesClient = new ApiClient<Service>('/home');
export default ServicesClient;