import { useMutation } from "@tanstack/react-query"
import { UserClient } from "../http"

export interface User {
    first_name:string,
    last_name:string,
    username:string,
    email:string,
    phone1:string,
    password:string,
    re_password:string
}

const useCreateUser = () => {
    const userClient = new UserClient('/auth/users/');
    return useMutation({
        mutationKey:['user'],
        mutationFn:async (user:User) => await userClient.create(user)
    })
}

export default useCreateUser;