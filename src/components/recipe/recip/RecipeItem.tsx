import {IRecipe} from "../../../models/recipe/IRecipe.ts";

interface RecipeItemProps {
    recipe: IRecipe
}

export const RecipeItem = ({recipe}: RecipeItemProps) => {
    return (
        <div>
            {recipe.id} --- {recipe.name} ({recipe.userId})
        </div>
    );
};