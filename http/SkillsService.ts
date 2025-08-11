import ApiClient from "./apiClient";
import { Skill } from "../app/page";

const SkillsClient = new ApiClient<Skill>('/home');
export default SkillsClient;