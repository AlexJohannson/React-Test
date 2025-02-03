import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import './HomePage.css';

const HomePage = () => {

    const {isUserAuth, authenticatedUser} = useAppSelector(({userAuthSlice}) => userAuthSlice)
    if (isUserAuth && authenticatedUser) {
        return (
            <div className={'welcome-user'}>
                <h1 className={'mt-6 text-4xl text-amber-300'}>Welcome back {authenticatedUser.firstName} ;)</h1>
            </div>
        );
    } else {
        return (
            <div className={'message-to-login'}>
                <h2>Hey! To use the app authentication is required, please login in the app!</h2>
            </div>

        )
    }

};

export default HomePage;