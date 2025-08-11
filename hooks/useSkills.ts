import {useQuery} from 'react-query';
import { HomeClient } from '../http';

const useSkills = () => {
    return useQuery(
        {
            queryKey :['config'],
            queryFn :() => HomeClient.getAll('skills'),
            staleTime:24*60*60 // 1 day
        }
    )
}  

export default useSkills;