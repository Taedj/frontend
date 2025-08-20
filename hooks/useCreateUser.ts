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

export type ActivationParams = {
    uid:string,
    token:string
}

export const activateUser = async (activationParams:ActivationParams) => {
    const userClient = new UserClient('/auth/users/');
    await userClient.activate(activationParams);
}

const useCreateUser = () => {
    const userClient = new UserClient('/auth/users/');
    return useMutation({
        mutationKey:['user'],
        mutationFn:async (user:User) => await userClient.create(user)
    })
}

export default useCreateUser;