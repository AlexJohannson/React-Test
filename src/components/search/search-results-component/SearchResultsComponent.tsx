import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {Link} from "react-router-dom";
import './SearchResultComponent.css';


export const SearchResultsComponent = ({ type }: { type: "users" | "recipes" }) => {
    const { searchResults } = useAppSelector(({ searchSlice }) => searchSlice);

    return (
        <div className={'search-result'}>
            {searchResults.length > 0 ? (
                searchResults.map((res, index) => (
                    <div key={index}>
                        {type === "users" ? (
                            <Link to={'/users/'+ res.id} className={'search-link-result'}>
                                {res.firstName} {res.lastName}
                            </Link>
                        ) : (
                            <Link to={'/recipe/'+res.id} className={'search-link-result'}>
                                {res.name}
                            </Link>
                        )}
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
};

export default SearchResultsComponent;