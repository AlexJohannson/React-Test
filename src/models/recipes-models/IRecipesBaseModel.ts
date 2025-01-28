import {IRecipe} from "./IRecipe.ts";

export interface  IRecipesBaseModel {
  total: number;
  skip: number;
  limit: number;
  recipes: IRecipe[];
}