import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {recipeSliceActions} from "../../../redux/slices/RecipeSlice.ts";
import {useParams, useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../../pagination-component/PaginationComponent.tsx";
import {RecipeItemComponent} from "../recipe-item-component/RecipeItemComponent.tsx";
import {urls} from "../../../constans/urls.ts";

export const RecipeTagFilterComponent = () => {
    const [query] = useSearchParams();

    const {tagItem} = useParams()
    const {recipesByTag,total} = useAppSelector(({recipeSlice})=>recipeSlice)
    const dispatch = useAppDispatch()
    const skip: number = Number(query.get('skip'));

    useEffect(() => {
        if (tagItem) {
            dispatch(recipeSliceActions.loadRecipesByTag({url: urls.recipes, tag: tagItem, skip: skip}))
        }
    }, [tagItem,skip])
    return (
        <div>
            {
                recipesByTag.map((recipe,index) => <RecipeItemComponent key={index} recipe={recipe}/>)
            }
            {total >= 7 && <PaginationComponent skip={skip} total={total}/>}
        </div>
    );
};