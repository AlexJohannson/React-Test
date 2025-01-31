import {userSlice} from "../slices/user-slice/UserSlice.ts";
import {recipeSlice} from "../slices/recipe-slice/RecipeSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        recipeSlice: recipeSlice.reducer
    }
})