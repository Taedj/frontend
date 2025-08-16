import axios from "axios";
import { ClientMessage } from "../hooks/useSendEmail";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000' // notice the slash ✅
})

class EmailClient {
    endpoint:string

    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    send = async function(clientMessage:ClientMessage) {
        return await axiosInstance.post<ClientMessage>(
            this.endpoint, // no leading slash ✅
            clientMessage
        );
    }
}

export default EmailClient;