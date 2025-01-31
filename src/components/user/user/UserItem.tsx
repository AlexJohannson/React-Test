import {memo} from "react";
import {IUser} from "../../../models/user/IUser.ts";

interface UserItemProps {
    user:IUser,
}

export const UserItem = memo(({user}: UserItemProps) => {

    return (
        <div>
            {user.id} --- {user.firstName}
        </div>
    );
})