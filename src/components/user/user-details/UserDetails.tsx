import {useParams} from "react-router-dom";
import {memo, useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../../../redux/slices/user-slice/UserSlice.ts";
import {recipeSliceActions} from "../../../redux/slices/recipe-slice/RecipeSlice.ts";
import {useRefreshAndLoadItems} from "../../../hooks/useRefreshAndLoadItem.tsx";
import {RecipeItem} from "../../recipe/recip/RecipeItem.tsx";
import './UserDetails.css';

export const UserDetails = memo(() => {
    const {id} = useParams()
    const user = useAppSelector(({userSlice}) => userSlice.users.find(user => user.id.toString() === id));

    const {recipes} = useAppSelector(({recipeSlice}) => recipeSlice);

    const filteredRecipes = recipes.filter(recipe => recipe.userId.toString() === id);
    const getUsers = useRefreshAndLoadItems(userSliceActions.loadUsers);
    const getRecipes = useRefreshAndLoadItems(recipeSliceActions.loadRecipes);

    useEffect(() => {
        if (!user && !getUsers.error) {
            getUsers.fetchItems()
        }
        if (!recipes.length && !getRecipes.error) {
            getRecipes.fetchItems()
        }
    }, [id, getUsers.error]);

    return (
        <div className={'user-details-container'}>
            {
                !user && recipes.length ? (
                    <div className={'user-not-found'}><h3>USER NOT FOUND</h3></div>
                ) : user ? (
                    <div className={'user-details'}>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <h3>Maidenname: {user.maidenName}</h3>
                        <h3>Age: {user.age}</h3>
                        <h3>Gender: {user.gender}</h3>
                        <h3>Date of birthday: {user.birthDate}</h3>
                        <h3>Email: {user.email}</h3>
                        <h3>Phone: {user.phone}</h3>
                        <h3>Username: {user.username}</h3>
                        <h3>Password: {user.password}</h3>
                        <img src={user.image} alt={user.firstName}/>
                        {
                            !filteredRecipes.length &&
                            <div className={'no-recipes'}>
                                <h3>Recipes: no recipes!</h3>
                            </div>
                        }
                        {
                            !!filteredRecipes.length &&
                            <div>
                                <h4>Recipes:</h4>
                                {
                                    filteredRecipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)
                                }
                            </div>
                        }
                    </div>
                ) : (
                    <div><h4>Loading...</h4></div>
                )}
        </div>
    )
});
export default UserDetails;