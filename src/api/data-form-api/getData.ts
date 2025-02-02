import {axiosInstance} from "./axios.ts";
import {retrieveLocalStorage} from "./helpers/helpersApi.ts";
import {IUserWithTokens} from "../../models/auth/IUserWithTokens.ts";

axiosInstance.interceptors.request.use((request)=>{
    if(request.method?.toUpperCase()==='GET'){
        request.headers.Authorization= 'Bearer '+retrieveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request
})

export const getData = async <T> (url:string):Promise<T> => { try {
    const {data} = await axiosInstance.get<T>(url);
    return data;
} catch (error: any) {
    if (error.response?.status === 401) {
        throw new Error("Unauthorized");
    }
    throw error;
}
};