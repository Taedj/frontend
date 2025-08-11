import {useQuery} from '@tanstack/react-query';
import { ServicesClient } from '../http';

export interface Service {
    title: string;
    description: string;
    category:string;
  }

const useServices = () => {
    return useQuery(
        {
            queryKey :['services'],
            queryFn :() => ServicesClient.getAll('/services'),
            staleTime:24*60*60*1000, // 1 day
            placeholderData:[]
        }
    )
}  

export default useServices;