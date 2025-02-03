import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../redux/slices/RecipeSlice.ts";
import './RecipeDetailsComponent.css';


export const RecipeDetailsComponent = () => {
    const {id} = useParams()
    const {recipeById} = useAppSelector(({recipeSlice}) => recipeSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(recipeSliceActions.clearRecipeById())
        dispatch(recipeSliceActions.loadRecipeById(Number(id)))
    }, []);
    console.log(recipeById)

    return (
        !recipeById ? (
            <div><b>Loading.....</b></div>
        ) : (
            <div className={'recipes-details'}>
                <h2>{recipeById.name} - rating: {recipeById.rating}</h2>
                <p>Cuisine: {recipeById.cuisine}</p>
                <p>Calories per serving: {recipeById.caloriesPerServing}</p>
                <p>Servings: {recipeById.servings}</p>
                <p>Cook time: {recipeById.cookTimeMinutes}</p>
                <p>Preparation time: {recipeById.prepTimeMinutes}</p>
                <p>Difficulty: {recipeById.difficulty}</p>
                <p>Meal-type: {recipeById.mealType}</p>
                <img src={recipeById.image} alt={recipeById.name} className={'recipe-image'}/>
            </div>
        ))
};

export default RecipeDetailsComponent;