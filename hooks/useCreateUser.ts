import { useMutation } from "@tanstack/react-query"
import { UserClient } from "../http"

export interface User {
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    password:string,
    confirmPassword:string
}

const useCreateUser = () => {
    const userClient = new UserClient('/core/signup/');
    return useMutation({
        mutationKey:['user'],
        mutationFn:async (user:User) => await userClient.create(user)
    })
}

export default useCreateUser;