import axios from "axios";
import {IUserWithTokens} from "../models/auth-models/IUserWithTokens.ts";
import {ITokens} from "../models/auth-models/ITokens.ts";
import {baseUrl} from "../constans/urls.ts";
import {retrieveLocalStorage} from "./api.helpers.ts";

export const axiosInstanceAuth = axios.create({
    baseURL:baseUrl+'/auth',
    headers:{},
});

type LoginType = {
    username:string,
    password:string,
    expiresInMins:number,
};

export const loginUser = async ({username,password,expiresInMins}:LoginType) =>{
    return await axiosInstanceAuth.post<IUserWithTokens>('/login',{username,password,expiresInMins});
};

export const refresh = async() => {
    const userWithToken = retrieveLocalStorage<IUserWithTokens>('user')
    const  {data:{accessToken,refreshToken}}= await axiosInstanceAuth.post<ITokens>('/refresh',{
        refreshToken:userWithToken.refreshToken,
        expiresInMins:1,
    })
    userWithToken.accessToken = accessToken
    userWithToken.refreshToken = refreshToken
    localStorage.setItem('user',JSON.stringify(userWithToken))
};