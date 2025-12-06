import { useQuery } from "@tanstack/react-query";
import { WorksClient } from "../http";

import { ServiceItem } from "../components/Portfolio/Potfolio";
import clientLogger from "../lib/clientLogger";

export interface PortfolioItem {
  id: number;
  title: string;
  images: { image: string }[];
  videos: { video_url: string }[];
  service: ServiceItem;
  description: string;
  category: string;
  technologies: string[];
  project_url: string;
  source_code_url: string;
}

const useWorks = () => {
  return useQuery<PortfolioItem[]>({
    queryKey: ["works"],
    queryFn: async () => await WorksClient.getAll("/works"),
    staleTime: 24 * 60 * 60 * 1000, // 1 day,
    placeholderData: [],
  });
};

export default useWorks;
