import {createSlice} from "@reduxjs/toolkit";

type SearchSliceType = {
    searchValue: string;
    searchResults: { id: number; firstName?: string; lastName?: string; name?: string }[];
};

const initialState: SearchSliceType = {searchValue: "", searchResults: []};

export const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    },
});

export const searchSliceActions = {
    ...searchSlice.actions,
};