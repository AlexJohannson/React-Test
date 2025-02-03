import {Search} from "../../components/search/Search.tsx";
import {UserListComponent} from "../../components/user/user-list-component/UserListComponent.tsx";

const UsersPage = () => {
    return (
        <div>
            <Search type={"users"}/>
            <UserListComponent/>
        </div>
    );
};

export default UsersPage;