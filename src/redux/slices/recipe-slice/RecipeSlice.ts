import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRecipe} from "../../../models/recipe/IRecipe.ts";
import {IRecipeResponse} from "../../../models/recipe/IRecipeResponse.ts";
import {getData} from "../../../api/data-form-api/getData.ts";
import {urls} from "../../../constans/urls.ts";

type RecipeSliceType = {
    recipes: IRecipe[],
}

const loadRecipes = createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (_,thunkApi)=>{
        return(thunkApi.fulfillWithValue(await getData<IRecipeResponse>(urls.recipes).then(({recipes}:IRecipeResponse):IRecipe[]=>recipes)))
    }
)

const recipeInitialState: RecipeSliceType = {recipes:[]}
export const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState: recipeInitialState,
    reducers: {},
    extraReducers:builder =>
        builder.addCase(loadRecipes.fulfilled,(state, action)=>{
            state.recipes = action.payload;
        })
})

export const recipeSliceActions = {
    ...recipeSlice.actions,loadRecipes
}