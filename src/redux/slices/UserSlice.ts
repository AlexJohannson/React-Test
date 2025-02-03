import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/users-models/IUser.ts";
import {refresh} from "../../services/api.login.user.ts";
import {getData} from "../../services/api.get.data.service.ts";



type UserSliceType = {
    usersByPage: Record<number, IUser[]>;
    userById: IUser | null,
    total: number;

};

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: number) => {
        try {
            return await getData.getUserById(id);

        } catch {
            await refresh()
            return await getData.getUserById(id);
        }
    }
);

const loadUsersWithPagination = createAsyncThunk(
    'userSlice/loadUsersWithPagination',
    async (skip: number) => {
        try {
            const {users, total} = await getData.getUsersWithPagination(skip, 5);
            return {users, total, skip}
        } catch {
            await refresh()
            const { users, total } = await getData.getUsersWithPagination(skip, 5);
            return { users, total, skip };

        }
    }
);


const userInitialState: UserSliceType = {usersByPage: {}, userById: null, total: 0};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitialState,
    reducers: {
        clearUserById: (state) => {
            state.userById = null; // Очищення перед новим запитом
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsersWithPagination.fulfilled, (state, action) => {
                state.usersByPage[action.payload.skip] = action.payload.users;
                if (state.total === 0) {
                    state.total = action.payload.total;
                }
            })
            .addCase(loadUserById.fulfilled, (state, action) => {
                state.userById = action.payload;
            })
});

export const userSliceActions = {
    ...userSlice.actions,
    loadUsersWithPagination, loadUserById
};