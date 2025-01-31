import {IUserWithTokens} from "../../../models/auth/IUserWithTokens.ts";
import {createSlice} from "@reduxjs/toolkit";

type UserAuthSliceType = {
    userImage:string | null,
    isUserAuth:boolean,
    authenticatedUser: IUserWithTokens | null,
}

const getStoredUser = (): IUserWithTokens | null => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
};

const getUserImage = (): string | null => {
    const user = getStoredUser();
    if(user) return user.image
    else return null
}

const userAuthInitialState: UserAuthSliceType = {userImage:getUserImage(),isUserAuth:!!getStoredUser(),authenticatedUser:getStoredUser()}


export const userAuthSlice = createSlice({
    name: 'userAuthSlice',
    initialState: userAuthInitialState,
    reducers: {
        setUserImage: (state,action) => {
            state.userImage = action.payload
        },
        setUserAuth: (state,action)=>{
            state.isUserAuth = action.payload
        },
        setLoginUser: (state,action) => {
            state.authenticatedUser = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        setLogoutUser:(state) =>{
            state.authenticatedUser = null
            localStorage.removeItem('user')
        }
    }
})

export const userAuthSliceSliceActions = {
    ...userAuthSlice.actions
}