import {UserItemComponent} from "../user-item-component/UserItemComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../../redux/slices/UserSlice.ts";
import {useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../../pagination-component/PaginationComponent.tsx";



export const UserListComponent = () => {
    const [query] = useSearchParams();

    const {usersByPage,total} = useAppSelector(({userSlice})=>userSlice)
    const dispatch = useAppDispatch()

    const skip: number = Number(query.get('skip'));

    useEffect(() => {

        if (!(usersByPage[skip] && usersByPage[skip].length > 0)) {
            dispatch(userSliceActions.loadUsersWithPagination(skip));
        }
    }, [skip]);

    return (
        <div>
            {
                usersByPage[skip]?.map(user => <UserItemComponent key={user.id} user={user}/>)
            }
            <PaginationComponent skip={skip} total={total}/>
        </div>
    );
};