import { Config } from "../hooks/useConfig";
import ApiClient from "./apiClient";

const ConfigClient = new ApiClient<Config>("/core");
export default ConfigClient;
