import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {UserItem} from "../user/UserItem.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../../redux/slices/user-slice/UserSlice.ts";

export const UserList = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(!users.length) dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {
                users.map(user=><UserItem key={user.id} user={user}/>)
            }
        </div>
    );
};