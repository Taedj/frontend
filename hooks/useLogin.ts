import { useMutation } from "@tanstack/react-query"
import AuthClient from "../http/AuthService"

export interface Login {
    username:string,
    password:string
}

const useLogin = () => {
    const authClient = new AuthClient('/core/signin/login/');
    return useMutation({
        mutationKey:['login'],
        mutationFn:(creds:Login) => authClient.login(creds)
    })
}

export default useLogin;