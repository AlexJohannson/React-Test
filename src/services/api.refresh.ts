import {IUsersWithTokens} from "../models/user-with-token/IUserWithToken.ts";
import {ITokenPair} from "../models/user-with-token/token-pair.ts";
import {axiosInstant} from "./api.service.ts";
import {retriveLocalStorage} from "./helper.ts";


export const refresh = async () => {
    const iUserRefreshToken = retriveLocalStorage<IUsersWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstant.post<ITokenPair>('/auth/refresh',
        {refreshToken: iUserRefreshToken.refreshToken, expiresInMins: 1});
    iUserRefreshToken.accessToken = accessToken;
    iUserRefreshToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserRefreshToken));
};