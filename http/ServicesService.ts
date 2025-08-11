import ApiClient from "./apiClient";
import { Service } from "../app/page";

const ServicesClient = new ApiClient<Service>('/home');
export default ServicesClient;