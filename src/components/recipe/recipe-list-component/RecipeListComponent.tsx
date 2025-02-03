import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {PaginationComponent} from "../../pagination-component/PaginationComponent.tsx";
import {recipeSliceActions} from "../../../redux/slices/RecipeSlice.ts";
import {RecipeItemComponent} from "../recipe-item-component/RecipeItemComponent.tsx";

export const RecipeListComponent = () => {
    const [query] = useSearchParams();
    const {recipesByPage,total} = useAppSelector(({recipeSlice})=>recipeSlice)
    const dispatch = useAppDispatch()
    const skip: number = Number(query.get('skip'));
    useEffect(() => {
        if (!(recipesByPage[skip] && recipesByPage[skip].length > 0)) {
            dispatch(recipeSliceActions.loadRecipes(skip));
        }
    }, [skip]);
    return (
        <div>
            {
                recipesByPage[skip]?.map((recipe,index) => <RecipeItemComponent key={index} recipe={recipe}/>)
            }
            <PaginationComponent skip={skip} total={total}/>
        </div>
    );
};