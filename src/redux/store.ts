import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice.ts";

export const store = configureStore(
    {
        reducer: {
            // authStoreSlice: authSlise.reducer,
            userStoreSlice: userSlice.reducer,
            // recipeStore: recipeSlice.reducer
        }
    }
)