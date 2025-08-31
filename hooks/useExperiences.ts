import { useQuery } from "@tanstack/react-query";
import { ExperiencesClient } from "../http";
import clientLogger from "../lib/clientLogger";

export interface Skill {
  title: string;
  percentage: number;
}

const useExperiences = () => {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: () => ExperiencesClient.getAll("/experiences"),
    staleTime: 24 * 60 * 60 * 1000, // 1 day
    placeholderData: [],
  });
};

export default useExperiences;
