import {RecipeListComponent} from "../../components/recipe/recipe-list-component/RecipeListComponent.tsx";
import {Search} from "../../components/search/Search.tsx";

const RecipesPage = () => {
    return (
        <div>
            <Search type={"recipes"}/>
            <RecipeListComponent/>
        </div>
    );
};

export default RecipesPage;