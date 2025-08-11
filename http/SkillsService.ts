import ApiClient from "./apiClient";
import { Skill } from "../hooks/useSkills";

const SkillsClient = new ApiClient<Skill>('/home');
export default SkillsClient;