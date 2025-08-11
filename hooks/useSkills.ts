import {useQuery} from '@tanstack/react-query';
import { SkillsClient } from '../http';

const useSkills = () => {
    return useQuery(
        {
            queryKey :['skills'],
            queryFn :() => SkillsClient.getAll('/skills'),
            staleTime:24*60*60*1000, // 1 day
            placeholderData:[]
        }
    )
}  

export default useSkills;