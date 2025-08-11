import {useQuery} from '@tanstack/react-query';
import { ConfigClient } from '../http';
import { Config } from '../app/page';

const useConfig = () => {
    return useQuery<Config>(
        {
            queryKey :['config'],
            queryFn :async () => {
                const configs = await ConfigClient.getAll('/config');
                return configs[0]
            },
            staleTime:24*60*60*1000, // 1 day,
            placeholderData:{} as Config
        }
    )
}  

export default useConfig;