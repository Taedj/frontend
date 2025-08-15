import { useQuery } from '@tanstack/react-query';
import { ConfigClient } from '../http';
import clientLogger from '../lib/clientLogger';

export interface Config {
    profession_list:string;
    about_description:string;
    fullname:string;
    email:string;
    age:string;
    experience_years:number;
    awards_count:number;
    phone1:string;
    phone2:string;
    address:string;
    home_background_image:string;
    profile_image:string;
  }

const useConfig = () => {
    return useQuery<Config>(
        {
            queryKey :['config'],
            queryFn :async () => {
                const configs = await ConfigClient.getAll('/config');
                return configs[0]
            },
            staleTime:24*60*60*1000, // 1 day,
            placeholderData:{} as Config,
        }
    )
}  

export default useConfig;