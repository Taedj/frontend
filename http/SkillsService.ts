import { Skill } from "../hooks/useSkills";
import ApiClient from "./apiClient";

const SkillsClient = new ApiClient<Skill>("/home");
export default SkillsClient;
