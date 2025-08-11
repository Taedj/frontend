import {useQuery} from 'react-query';
import { CoreClient } from '../http';

const useConfig = () => {
    return useQuery(
        {
            queryKey :['config'],
            queryFn :async () => {
                const configs = await CoreClient.getAll('config');
                return configs[0];
            },
            staleTime:24*60*60 // 1 day
        }
    )
}  

export default useConfig;