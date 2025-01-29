import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {userAction} from "../../../redux/slices/UserSlice.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";


export const UsersComponent = () => {


    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userStoreSlice.users);
    console.log(users);

    useEffect(() => {
        dispatch(userAction.loadUsers());
        }, []);

    return (
        <>
           <div>
               {users.map((user) => <UserComponent key={user.id} user={user}/>)}
           </div>
        </>
    );
};