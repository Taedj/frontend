import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://localhost:8000'
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