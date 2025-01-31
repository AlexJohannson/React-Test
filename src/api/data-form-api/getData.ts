import {axiosInstance} from "./axios.ts";

export const getData = async <T> (url:string):Promise<T> => {
    return await axiosInstance(url).then(value => value.data)
}