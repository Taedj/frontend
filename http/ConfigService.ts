import ApiClient from "./apiClient";
import { Config } from "../app/page";

const ConfigClient = new ApiClient<Config>('/core');
export default ConfigClient;