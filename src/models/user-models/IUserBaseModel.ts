import {IUser} from "./IUser.ts";

export interface IUserBaseModel {
    total: number;
    skip: number;
    limit: number;
    users: IUser[];
}