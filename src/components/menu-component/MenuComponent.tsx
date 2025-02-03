import {Link, useNavigate} from "react-router-dom";
import {ModalComponent} from "../modal-component/ModalComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userAuthSliceActions} from "../../redux/slices/UserAuthSlice.ts";
import {modalSliceActions} from "../../redux/slices/ModalSlice.ts";
import {AppRoutes} from "../../roures/routes.ts";
import {LoginFormComponent} from "../login-form-component/LoginFormComponent.tsx";
import './MenuComponent.css';

export const MenuComponent = () => {
    const {userImage, isUserAuth} = useAppSelector(({userAuthSlice}) => userAuthSlice)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const openModal = () => {
        dispatch(modalSliceActions.setIsActive(true))
    }

    const logoutUser = () => {
        dispatch(userAuthSliceActions.setLogoutUser())
        navigate(AppRoutes.root);
    }

    if (isUserAuth && userImage) {
        return (
            <>
                <div className={'navigator-menu'}>
                    <ul>
                        <Link to={AppRoutes.root} className={'link-menu'}>
                            <li>HOME</li>
                        </Link>
                        <Link to={AppRoutes.users} className={'link-menu'}>
                            <li>USERS</li>
                        </Link>
                        <Link to={AppRoutes.recipes} className={'link-menu'}>
                            <li>RECIPES</li>
                        </Link>
                        <button onClick={logoutUser}>LOGOUT</button>
                    </ul>
                </div>
                <div className={'user-image'}>
                    <img src={userImage} alt="image"/>
                </div>
                <ModalComponent>
                    <LoginFormComponent/>
                </ModalComponent>
            </>
        )
    } else {
        return (
            <>
                <div className={'login-button'}>
                     <button onClick={openModal} className={'login-tap-button'}>LOGIN</button>
                </div>
                <ModalComponent>
                    <LoginFormComponent/>
                </ModalComponent>
            </>
        );
    }
}