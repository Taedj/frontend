import ConfigClient from "./ConfigService";
import ServicesClient from "./ServicesService";
import SkillsClient from "./SkillsService";
import WorksClient from "./WorksService";
import EducationClient from "./EducationsService";
import ExperiencesClient from "./ExperiencesService";
import CategoriesClient from "./CategoriesService";
import EmailClient from "./EmailService";
import UserClient from "./userService";

export interface APIError {
  status?: number;
  data?: {
    detail?: string;
    [key: string]: any;
  };
}

export {
  ConfigClient,
  ServicesClient,
  SkillsClient,
  WorksClient,
  EducationClient,
  ExperiencesClient,
  CategoriesClient,
  EmailClient,
  UserClient,
};
