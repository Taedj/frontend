import axios from "axios";
import { ClientMessage } from "../hooks/useSendEmail";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL, // notice the slash ✅
});

class EmailClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  send = async function (clientMessage: ClientMessage) {
    return await axiosInstance.post<ClientMessage>(
      this.endpoint, // no leading slash ✅
      clientMessage,
    );
  };
}

export default EmailClient;
