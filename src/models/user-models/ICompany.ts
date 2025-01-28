import {IAddressCompany} from "./IAddressCompany.ts";

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddressCompany;
}