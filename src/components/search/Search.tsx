import SearchBarComponent from "./search-bar-component/SearchBarComponent.tsx";
import SearchResultsComponent from "./search-results-component/SearchResultsComponent.tsx";

export const Search = ({ type }: { type: "users" | "recipes" }) => {
    return (
        <>
            <SearchBarComponent type={type} />
            <SearchResultsComponent type={type} />
        </>
    );
};