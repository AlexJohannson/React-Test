import axios from "axios";
import {baseUrl} from "../../constans/urls.ts";


export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'ContentType':'Application.json'}
})