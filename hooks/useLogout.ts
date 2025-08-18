import { useMutation } from "@tanstack/react-query"
import AuthClient from "../http/AuthService"

export interface Login {
    username:string,
    password:string
}

const useLogout = () => {
    const authClient = new AuthClient('/core/signin/');
    return useMutation({
        mutationKey:['logout'],
        mutationFn:() => authClient.logout()
    })
}

export default useLogout;