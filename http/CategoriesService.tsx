import ApiClient from "./apiClient";
import { CategoryItem } from "../hooks/useCategories";

const CategoriesClient = new ApiClient<CategoryItem>("/home");

export default CategoriesClient;
