import {useQuery} from 'react-query';
import { HomeClient } from '../http';

const useWorks = () => {
    return useQuery(
        {
            queryKey :['config'],
            queryFn :() => HomeClient.getAll('works'),
            staleTime:24*60*60 // 1 day
        }
    )
}  

export default useWorks;