import {Outlet} from "react-router-dom";
import {MenuComponent} from "../menu/MenuComponent.tsx";

export const MainLayout = () => {
    return (
        <>
            <MenuComponent/>
            <Outlet/>
        </>
    );
};