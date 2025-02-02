import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../../models/user/IUser.ts";
import {IUserResponse} from "../../../models/user/IUserResponse.ts";
import {getData} from "../../../api/data-form-api/getData.ts";

type UserSliceType = {
    users: IUser[],
};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkApi) => {
        try {
            const {users} = await getData<IUserResponse>("/auth/users");
            return users;
        } catch (error:any) {
            return thunkApi.rejectWithValue(error.message || 'failed to load users');
        }
    });
const userInitialState: UserSliceType = {users: []};
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
});

export const userSliceActions = {
    ...userSlice.actions, loadUsers
};
