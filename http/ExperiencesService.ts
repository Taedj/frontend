import ApiClient from "./apiClient";
import { EducationItem as ExperienceItem } from "../hooks/useEducations";

const ExperiencesClient = new ApiClient<ExperienceItem>("/home");
export default ExperiencesClient;
