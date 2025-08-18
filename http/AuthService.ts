import axios from "axios";
import { Login } from "../hooks/useLogin";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

class AuthClient {
    endpoint:string

    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    login = async function(creds:Login) {
        return await axiosInstance.post<Login>(
            this.endpoint + 'login/', 
            creds,
            { withCredentials: true }
        );
    }

    logout = async function() {
        return await axiosInstance.post(
            this.endpoint + 'logout/',
            {},
            { withCredentials: true }
        );
    }

    checkLogin = async function() {
        return await axiosInstance.get(
            this.endpoint + 'check_login/',
            { withCredentials: true }
        )
    }
}

export default AuthClient;