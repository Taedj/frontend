import ApiClient from "./apiClient";
import { EducationItem } from "../hooks/useEducations";

const EducationClient = new ApiClient<EducationItem>("/home");
export default EducationClient;
