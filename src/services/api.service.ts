import axios from "axios";
import {IUsersWithTokens} from "../models/user-with-token/IUserWithToken.ts";
import {retriveLocalStorage} from "./helper.ts";

export const axiosInstant = axios.create(
    {
        baseURL: 'https://dummyjson.com',
        headers: {}
    }
);

axiosInstant.interceptors.request.use((request) => {
    if (request.method?.toLocaleUpperCase() === 'GET') {
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUsersWithTokens>('user').accessToken;
    }
    return request;
});