import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {UserItem} from "../user/UserItem.tsx";
import {useEffect} from "react";
import {IUser} from "../../../models/user/IUser.ts";
import {userSliceActions} from "../../../redux/slices/user-slice/UserSlice.ts";
import {useRefreshAndLoadItems} from "../../../hooks/useRefreshAndLoadItem.tsx";

export const UserList = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const {fetchItems} = useRefreshAndLoadItems<IUser[]>(userSliceActions.loadUsers);

    useEffect(() => {
        if (!users.length) {
            fetchItems();
        }
    }, [users.length]);

    return (
        <div>
            {
                users.map(user => <UserItem key={user.id} user={user}/>)
            }
        </div>
    );
};