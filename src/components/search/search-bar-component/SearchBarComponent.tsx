import {useFindItems} from "../untils-search-component/untils.ts";
import './SearchBarComponent.css';


export const SearchBarComponent = ({type}: { type: "users" | "recipes" }) => {
    const {handleChangeSearchValue, searchValue} = useFindItems(type);

    return (
        <div className={'search-bar'}>
            <label>
                <input type="text" placeholder="Search......" value={searchValue}
                        onChange={(e) => handleChangeSearchValue(e.target.value)}/>
            </label>
        </div>
    );
};

export default SearchBarComponent;