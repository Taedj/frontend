import axios from "axios";
import { User,ActivationParams } from "../hooks/useCreateUser";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
    baseURL: API_URL
})

class UserClient {
    endpoint:string

    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    create = async function(user:User) {
        return await axiosInstance.post<User>(
            this.endpoint, 
            user,
            {
                headers:{
                    "Content-Type": "application/json",
                }
            }
        );
    }

    activate = async function(activationParams:ActivationParams) {
        return await axiosInstance.post<ActivationParams>(
            this.endpoint + 'activation/',
            activationParams
        )
    }
}

export default UserClient;