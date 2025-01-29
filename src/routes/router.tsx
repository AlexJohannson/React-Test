import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";



export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path:'/home', element: <HomePage/>},
            {path: '/login', element: <LoginPage/>},
            {path: '/auth/user', element: <UsersPage/>},
            {path: '/auth/recipes', element: <RecipesPage/>}
        ]
    }
]);