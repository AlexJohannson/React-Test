import {userSlice} from "../slices/UserSlice.ts";
import {recipeSlice} from "../slices/RecipeSlice.ts";
import {configureStore} from "@reduxjs/toolkit";
import {userAuthSlice} from "../slices/UserAuthSlice.ts";
import {modalSlice} from "../slices/ModalSlice.ts";
import {searchSlice} from "../slices/SearchSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        recipeSlice: recipeSlice.reducer,
        userAuthSlice: userAuthSlice.reducer,
        modalSlice:modalSlice.reducer,
        searchSlice:searchSlice.reducer,
    }
});