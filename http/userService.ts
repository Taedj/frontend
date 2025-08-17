import axios from "axios";
import { User } from "../hooks/useCreateUser";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

class UserClient {
    endpoint:string

    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    create = async function(user:User) {
        return await axiosInstance.post<User>(
            this.endpoint, 
            user
        );
    }
}

export default UserClient;