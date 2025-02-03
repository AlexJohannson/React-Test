import {useRoutes} from "react-router-dom";
import {AppRoutes} from "./routes.ts";
import {lazy, Suspense} from "react";

const Home = lazy(()=> import('../pages/home-page/HomePage'));
const Users = lazy(()=> import('../pages/users-page/UsersPage'));
const Recipes = lazy(()=> import('../pages/recipes-page/RecipesPage'));
const UserDetails = lazy(()=> import('../pages/user-details-page/UserDetailsPage.tsx'));
const RecipeDetails = lazy(()=> import('../pages/recipe-details-page/RecipeDetailsPage.tsx'));
const RecipeFilter = lazy(()=>import('../pages/filtered-recipes-page/FilteredRecipesPage.tsx'));


export const RouterComponent = () => useRoutes([
    {
        element:(
            <Suspense fallback={<div><b>Loading.....</b></div>}>
                <Home/>
            </Suspense>
        ),
        path:AppRoutes.root,
        index:true
    },
    {
        element: (
            <Suspense fallback={<div><b>Loading.....</b></div>}>
                <Users/>
            </Suspense>
        ),
        path: AppRoutes.users,
    },
    {
        element: (
            <Suspense fallback={<div><b>Loading.....</b></div>}>
                <Recipes/>
            </Suspense>
        ),
        path: AppRoutes.recipes,
    },
    {
        element: (
            <Suspense fallback={<div><b>Loading.....</b></div>}>
                <UserDetails/>
            </Suspense>
        ),
        path: AppRoutes.userDetails,
    },
    {
        element: (
            <Suspense fallback={<div><b>Loading.....</b></div>}>
                <RecipeDetails/>
            </Suspense>
        ),
        path: AppRoutes.recipeDetails,
    },
    {
        element: (
            <Suspense fallback={<div><b>Loading.....</b></div>}>
                <RecipeFilter/>
            </Suspense>
        ),
        path: AppRoutes.recipeTagFilter,
    },

]);