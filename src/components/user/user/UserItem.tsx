import {memo} from "react";
import {IUser} from "../../../models/user/IUser.ts";
import {Link} from "react-router-dom";
import './UserItem.css';

interface UserItemProps {
    user:IUser,
}

export const UserItem = memo(({user}: UserItemProps) => {
    return (
        <div className={'user-page'}>
            <p>For more details about user klick on name</p>
            <Link to={'/users/'+user.id} className={'user-link'}><h1>{user.firstName} {user.lastName}</h1></Link>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>
        </div>
    );
});