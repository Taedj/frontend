import { PortfolioItem } from "../hooks/useWorks";
import ApiClient from "./apiClient";

const WorksClient = new ApiClient<PortfolioItem>("/home");
export default WorksClient;
