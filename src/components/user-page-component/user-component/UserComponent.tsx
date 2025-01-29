import {UserComponentProps} from "../../../models/UsersComponentProps.ts";

export const UserComponent = ({user}: UserComponentProps) => {

    return (
        <>
          <div>
              <h1>{user.firstName} {user.lastName}</h1>
          </div>
        </>
    );
};