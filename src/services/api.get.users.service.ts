import {axiosInstant} from "./api.service.ts";
import {IUserBaseModel} from "../models/user-models/IUserBaseModel.ts";





export const getAll = async (): Promise<IUserBaseModel> => {
    const axiosRespons = await axiosInstant.get<IUserBaseModel>('/auth/users');
        const users = axiosRespons.data;
    console.log(users);
    return users;

}