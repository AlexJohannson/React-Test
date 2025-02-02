import {useRoutes} from "react-router-dom";
import {AppRoutes} from "./routes.ts";
import {lazy, Suspense} from "react";

const Home = lazy(()=> import('../pages/home/HomePage'))
const Users = lazy(()=> import('../pages/users/UsersPage'))
const Recipes = lazy(()=> import('../pages/recipes/RecipesPage'))
const UserDetails = lazy(()=> import('../pages/user-details/UserDetailsPage.tsx'))
const RecipeDetails = lazy(()=> import('../pages/recipe-details/RecipeDetailsPage.tsx'))

export const RouterComponent = () => useRoutes([
    {
        element:(
            <Suspense fallback={<div><p>Loading..</p></div>}>
                <Home/>
            </Suspense>
        ),
        path:AppRoutes.root,
        index:true
    },
    {
        element: (
            <Suspense fallback={<div><p>Loading..</p></div>}>
                <Users/>
            </Suspense>
        ),
        path: AppRoutes.users,
    },
    {
        element: (
            <Suspense fallback={<div><p>Loading..</p></div>}>
                <Recipes/>
            </Suspense>
        ),
        path: AppRoutes.recipes,
    },
    {
        element: (
            <Suspense fallback={<div><p>Loading..</p></div>}>
                <UserDetails/>
            </Suspense>
        ),
        path: AppRoutes.userDetails,
    },
    {
        element: (
            <Suspense fallback={<div><p>Loading..</p></div>}>
                <RecipeDetails/>
            </Suspense>
        ),
        path: AppRoutes.recipeDetails,
    },

]);