import {createSlice} from "@reduxjs/toolkit";

type ModalSliceType = {
    isActive: boolean,
};

const modalInitialState: ModalSliceType = {isActive: false}
export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: modalInitialState,
    reducers: {
        setIsActive: (state, action) => {
            state.isActive = action.payload
        }
    },
});

export const modalSliceActions={
    ...modalSlice.actions
};