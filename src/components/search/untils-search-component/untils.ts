import {searchSliceActions} from "../../../redux/slices/SearchSlice.ts";
import {IUser} from "../../../models/users-models/IUser.ts";
import {IRecipe} from "../../../models/recipes-model/IRecipe.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect, useState} from "react";
import {getData} from "../../../services/api.get.data.service.ts";



export const useFindItems = (type:string) =>{
    const dispatch = useAppDispatch();
    const { searchValue } = useAppSelector(({ searchSlice }) => searchSlice);
    const [debounceTimer, setDebounceTimer] = useState<number | null>(null);

    const handleChangeSearchValue = (value: string) => {
        dispatch(searchSliceActions.setSearchValue(value));

        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        if (!value.trim()) {
            dispatch(searchSliceActions.setSearchResults([])); // Очищаємо результати
            return;
        }

        const newTimer = setTimeout(async () => {
            try {
                let results: IUser[] | IRecipe[] = [];
                if (type === "users") {
                    const {users} = await getData.getUsers();
                    results = users.filter(user =>
                        `${user.firstName} ${user.lastName}`.toLowerCase().includes(value.toLowerCase()) ||
                        user.id.toString().includes(value)
                    );
                } else if (type === "recipes") {
                    const {recipes} = await getData.getRecipes();
                    results = recipes.filter(recipe =>
                        recipe.name.toLowerCase().includes(value.toLowerCase()) ||
                        recipe.id.toString().includes(value)
                    );
                }
                dispatch(searchSliceActions.setSearchResults(results));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }, 300);

        setDebounceTimer(newTimer);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest(".search-bar")) {
                dispatch(searchSliceActions.setSearchValue(""));
                dispatch(searchSliceActions.setSearchResults([]));
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [dispatch]);

    return{handleChangeSearchValue,searchValue}
}