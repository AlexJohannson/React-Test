import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRecipe} from "../../models/recipes-model/IRecipe.ts";
import {refresh} from "../../services/api.login.user.ts";
import {getData} from "../../services/api.get.data.service.ts";

type RecipeSliceType = {
    recipesByTag: IRecipe[] | [],
    userRecipes:IRecipe[] | [],
    recipeById:IRecipe | null,
    recipesByPage: Record<number,IRecipe[]>
    total:number
};

const loadUserRecipes = createAsyncThunk(
    'recipesSlice/loadUserRecipes',
    async (id:number) => {
        try{
            const {recipes} = await getData.getRecipes();
            return recipes.filter(recipe => recipe.userId === id)

        }catch{
            await refresh()
            const {recipes} = await getData.getRecipes();
            return recipes.filter(recipe => recipe.userId === id)
        }
    }
);

const loadRecipesByTag = createAsyncThunk(
    'userSlice/loadRecipesByTag',
    async ({url: url, tag: tagItem, skip: skip}:{ url: string; tag: string; skip: number }) => {
        try {
            const {recipes,total} = await getData.getRecipesByTag(url,tagItem,skip,5);
            const filteredRecipes = recipes.filter(recipe => recipe.tags.map((tag,index) => tag[index] === tagItem))
            return {filteredRecipes,total}
        } catch {
            await refresh()
            const { recipes,total} = await getData.getRecipesByTag(url,tagItem,skip,5);
            const filteredRecipes = recipes.filter(recipe => recipe.tags.map((tag,index) => tag[index] === tagItem))
            return {filteredRecipes,total}

        }
    }
);

const loadRecipeById = createAsyncThunk(
    'recipeSlice/loadRecipeById',
    async (id: number) => {
        try {
            return await getData.getRecipeById(id);

        } catch {
            await refresh()
            return await getData.getRecipeById(id);
        }
    }
);
const loadRecipes = createAsyncThunk(
    'recipesSlice/loadRecipes',
    async (skip: number) => {
        try{
            const {recipes, total } = await getData.getRecipesWithPagination(skip, 5);
            return {recipes, total,skip}
        }catch{
            await refresh()
            const { recipes, total } = await getData.getRecipesWithPagination(skip, 5);
            return {recipes, total,skip}
        }
    }
);


const recipeInitialState: RecipeSliceType = {recipesByTag:[],userRecipes:[],recipeById:null,recipesByPage:[],total:0}
export const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState: recipeInitialState,
    reducers: {
        clearRecipes: (state) => {
            state.userRecipes = []; // Очищення перед новим запитом
        },
        clearRecipeById: (state) => {
            state.recipeById= null; // Очищення перед новим запитом
        }
    },
    extraReducers:builder =>
        builder.addCase(loadRecipes.fulfilled,(state, action)=>{
            state.recipesByPage[action.payload.skip] = action.payload.recipes;
            if(state.total === 0) {
                state.total = action.payload.total;
            }
        })
            .addCase(loadUserRecipes.fulfilled,(state, action)=>{
                state.userRecipes = action.payload
            })
            .addCase((loadRecipeById.fulfilled),(state, action)=>{
                state.recipeById = action.payload
            })
            .addCase((loadRecipesByTag.fulfilled),(state, action)=>{
                state.recipesByTag = action.payload.filteredRecipes
                state.total = action.payload.total
            })
})

export const recipeSliceActions = {
    ...recipeSlice.actions,loadRecipes,loadUserRecipes,loadRecipeById,loadRecipesByTag
};