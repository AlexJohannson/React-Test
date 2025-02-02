import {IRecipe} from "../../../models/recipe/IRecipe.ts";
import {Link} from "react-router-dom";
import './RecipeItem.css';


interface RecipeItemProps {
    recipe: IRecipe
}

export const RecipeItem = ({recipe}: RecipeItemProps) => {
    return (
        <div className={'recipes-link-page'}>
            <p>Click for more details about recipe</p>
            <Link to={'/recipe/'+recipe.id} className={'recipe-link'}>{recipe.name} - UserId is {recipe.userId}</Link>
        </div>
    );
};