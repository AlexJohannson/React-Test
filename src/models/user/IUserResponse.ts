import {IUser} from "./IUser.ts";

export interface IUserResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}