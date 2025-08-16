import { useMutation } from "@tanstack/react-query";
import { EmailClient } from "../http";

export interface ClientMessage {
    Name:string,
    Email:string,
    Message:string;
}

const useSendEmail = () => {
    const emailClient = new EmailClient('home/send_mail/');
    return useMutation(
        {
            mutationKey:['email'],
            mutationFn:async (clientMessage:ClientMessage) => emailClient.send(clientMessage)
        }
    )
}

export default useSendEmail;