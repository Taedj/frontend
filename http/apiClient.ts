import axios from "axios";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
    baseURL:API_URL
})

class ApiClient<T> {
    endpoint:string

    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    getAll = async function(relativePath:string) {
        return await axiosInstance
            .get<T[]>(this.endpoint + relativePath)
            .then(res => res.data)
    }
}

export default ApiClient;