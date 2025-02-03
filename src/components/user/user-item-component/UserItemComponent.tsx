import {memo} from "react";
import {IUser} from "../../../models/users-models/IUser.ts";
import {Link} from "react-router-dom";
import './UserItemComponent.css';

interface UserItemProps {
    user:IUser,
}

export const UserItemComponent = memo(({user}: UserItemProps) => {
    return (
        <div className={'user-page'}>
            <Link to={'/users/'+user.id} className={'user-link'}>
                <h2>{user.firstName} {user.lastName}</h2>
            </Link>
            <p>Phone: {user.phone}</p>
            <p> Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    );
});