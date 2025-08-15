import { useQuery } from '@tanstack/react-query';
import { EducationClient } from '../http';
import clientLogger from '../lib/clientLogger';

export interface EducationItem {
    title:string,
    institution:string,
    description:string,
    start_date:string,
    end_date:string
  }

const useEducations = () => {
    return useQuery(
        {
            queryKey :['educations'],
            queryFn :() => EducationClient.getAll('/educations'),
            staleTime:24*60*60*1000, // 1 day
            placeholderData:[],
        }
    )
}  

export default useEducations;