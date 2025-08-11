import ApiClient from "./apiClient";
import { PortfolioItem } from "../hooks/useWorks";

const WorksClient = new ApiClient<PortfolioItem>('/home');
export default WorksClient;