import {useRoutes} from "react-router-dom";
import {AppRoutes} from "./routes.tsx";
import {lazy, Suspense} from "react";

const Home = lazy(()=> import('../pages/home/HomePage'))
const Users = lazy(()=> import('../pages/users/UsersPage'))
const Recipes = lazy(()=> import('../pages/recipes/RecipesPage'))

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

])