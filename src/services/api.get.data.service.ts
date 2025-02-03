import {retrieveLocalStorage} from "./api.helpers.ts";
import {IUserWithTokens} from "../models/auth-models/IUserWithTokens.ts";
import {IUserResponse} from "../models/users-models/IUserResponse.ts";
import {IRecipeResponse} from "../models/recipes-model/IRecipeResponse.ts";
import {IUser} from "../models/users-models/IUser.ts";
import {IRecipe} from "../models/recipes-model/IRecipe.ts";
import {refresh} from "./api.login.user.ts";
import {urls} from "../constans/urls.ts";
import {axiosInstance} from "./api.service.ts";

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === 'GET') {
        request.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request
})

export const getData = {
    getUserById: async (id: number): Promise<IUser> => {
        const {data} = await axiosInstance.get<IUser>(`${urls.users}/${id}`)
        return data;
    },
    getRecipes: async (): Promise<IRecipeResponse> => {
        try{
            const {data} = await axiosInstance.get<IRecipeResponse>(urls.recipes)
            return data
        }catch{
            await refresh()
            const {data} = await axiosInstance.get<IRecipeResponse>(urls.recipes)
            return data
        }
    },
    getRecipesByTag: async (url:string,tag:string,skip:number,limit:number): Promise<IRecipeResponse> => {
        const {data} = await axiosInstance.get<IRecipeResponse>(`${url}/tag/${tag}?skip=${skip}&limit=${limit}`)
        return data
    },
    getRecipeById: async (id:number): Promise<IRecipe> => {
        const {data} = await axiosInstance.get<IRecipe>(`${urls.recipes}/${id}`)
        return data
    },
    getUsers: async (): Promise<IUserResponse> => {
        const {data} = await axiosInstance.get<IUserResponse>('/users')
        return data
    },
    getUsersWithPagination: async (skip: number, limit: number): Promise<IUserResponse> => {
        const {data} = await axiosInstance.get<IUserResponse>(`${urls.users}?skip=${skip}&limit=${limit}`)
        return data;
    },
    getRecipesWithPagination: async (skip: number, limit: number): Promise<IRecipeResponse> => {
        const {data} = await axiosInstance.get<IRecipeResponse>(`${urls.recipes}?skip=${skip}&limit=${limit}`)
        return data;
    },
};