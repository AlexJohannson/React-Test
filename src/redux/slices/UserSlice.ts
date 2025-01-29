import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserSliceType} from "../../models/type-user-model/UserSliceType.ts";
import {getAll} from "../../services/api.get.users.service.ts";
import {IUserBaseModel} from "../../models/user-models/IUserBaseModel.ts";




const initUserSliceState: UserSliceType = {users: []};
const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await getAll();
    console.log(users);
    return thunkAPI.fulfillWithValue(users);
});

export const userSlice = createSlice(
    {
        name: 'userSlice',
        initialState: initUserSliceState,
        reducers: {},
        extraReducers: builder => builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUserBaseModel>) => {
              state.users = action.payload.users;
})
    }
);
export const userAction = {...userSlice.actions, loadUsers};