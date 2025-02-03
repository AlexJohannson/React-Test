import {Search} from "../../components/search/Search.tsx";
import {RecipeTagFilterComponent} from "../../components/recipe/recipe-tag-filter-component/RecipeTagFilterComponent.tsx";

const FilteredRecipesPage = () => {
    return (
        <div>
            <Search type={"recipes"}/>
            <RecipeTagFilterComponent/>
        </div>
    );
};

export default FilteredRecipesPage;

