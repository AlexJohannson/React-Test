import {ICoordinates} from "./ICoordinates.ts";

export interface IAddressHome {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: ICoordinates;
    country: string;
}