import {IUsersWithTokens} from "../models/user-with-token/IUserWithToken.ts";
import {axiosInstant} from "./api.service.ts";
import {LoginData} from "../models/login-data-model/LoginData.ts";

export const login =
    async ({username, password, expiresInMins}: LoginData): Promise<IUsersWithTokens> => {
        const {data: userWithTokens} = await axiosInstant.post<IUsersWithTokens>('/auth/login', {username, password, expiresInMins});
        localStorage.setItem('user', JSON.stringify(userWithTokens));
        return userWithTokens;
    };