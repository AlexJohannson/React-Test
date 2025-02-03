import {IRecipe} from "../../../models/recipes-model/IRecipe.ts";
import {Link} from "react-router-dom";
import './RecipeItemComponent.css';


interface RecipeItemProps {
    recipe: IRecipe
}

export const RecipeItemComponent = ({recipe}: RecipeItemProps) => {

    return (
        <div className={'recipes-link-page'}>
            <Link to={'/recipe/' + recipe.id} className={'recipe-link'}><h2>{recipe.name} ({recipe.userId})</h2></Link>
            <div>
                <p> Tags: </p>
                {
                    recipe.tags.map((tag, index) =>
                        <div key={index} className={'recipes-tags'}>
                            <Link to={'/recipe/tag/'+tag} className={'recipes-tag-link'}><h4>{tag}</h4></Link>
                        </div>)
                }
            </div>
        </div>
    );
};