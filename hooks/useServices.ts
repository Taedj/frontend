import {useQuery} from 'react-query';
import { HomeClient } from '../http';

const useServices = () => {
    return useQuery(
        {
            queryKey :['config'],
            queryFn :() => HomeClient.getAll('services'),
            staleTime:24*60*60 // 1 day
        }
    )
}  

export default useServices;