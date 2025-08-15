import { useQuery } from "@tanstack/react-query";
import { CategoriesClient } from "../http";

export interface CategoryItem {
    category:string;
}

let categories = ['All'];

const useCategories = () => {
    return useQuery({
        queryKey:['categories'],
        queryFn:async () => {
            const additionalCategories = await CategoriesClient.getAll('/services_categories');
            return categories.concat(
                additionalCategories.map(item => item.category)
            )
        }
    })
} 

export default useCategories;