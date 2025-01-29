import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <div>
                <p>Please <Link to={'/login'}>login</Link> for authorisation</p>
            </div>
        </>
    );
};