import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useParams} from "react-router-dom";
import './RecipeDetails.css';

export const RecipeDetails = () => {
    const {id} = useParams();
    const recipe= useAppSelector(({recipeSlice})=> recipeSlice.recipes.find(recipe => recipe.id.toString() === id));
    return (
        <div className={'recipes-details'}>
            {
                recipe ? (
                    <div className={'recipes-item'}>
                        <h2>{recipe.name}</h2>
                        <h4>Rating: {recipe.rating}</h4>
                        <h4>Cuisine :{recipe.cuisine}</h4>
                        <h4>Calories per serving: {recipe.caloriesPerServing}</h4>
                        <h4>Servings: {recipe.servings}</h4>
                        <h4>Cook time: {recipe.cookTimeMinutes}</h4>
                        <h4>Preparation time: {recipe.prepTimeMinutes}</h4>
                        <h4>Difficulty: {recipe.difficulty}</h4>
                        <h4>Meal-type: {recipe.mealType}</h4>

                    </div>
                ) : (<div className={'not-found'}><h3>Recipe not found</h3></div>)
            }

        </div>
    );
};

export default RecipeDetails;