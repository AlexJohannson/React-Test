import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <>
            <div>

                    <ul>
                        <li>
                            <Link to={'/home'}>HOME</Link>
                        </li>
                        <li>
                            <Link to={'/auth/user'}>LOGIN</Link>
                        </li>
                    </ul>

            </div>
        </>
    );
};