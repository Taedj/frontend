import { Service } from "../hooks/useServices";
import ApiClient from "./apiClient";

const ServicesClient = new ApiClient<Service>("/home");
export default ServicesClient;
