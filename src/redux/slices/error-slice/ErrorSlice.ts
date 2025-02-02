import {createSlice} from "@reduxjs/toolkit";

type ErrorSliceType = {
    error:string|null,
};
const errorInitialState:ErrorSliceType = {error:null}

export const errorSlice = createSlice({
    name:'errorSlice',
    initialState:errorInitialState,
    reducers:{
        setError: (state,action) => {
            state.error = action.payload
        }
    },
});
export const errorSliceActions={
    ...errorSlice.actions
};