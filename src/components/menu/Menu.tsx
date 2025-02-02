import {Link, useNavigate} from "react-router-dom";
import {Modal} from "../modal/Modal.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userAuthSliceSliceActions} from "../../redux/slices/userAuth-slice/UserAuthSlice.ts";
import {modalSliceActions} from "../../redux/slices/modal-slice/ModalSlice.ts";
import {AppRoutes} from "../../roures/routes.ts";
import {LoginForm} from "../login-form/LoginForm.tsx";
import './Menu.css';

export const Menu = () => {
    const {userImage, isUserAuth} = useAppSelector(({userAuthSlice}) => userAuthSlice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const openModal = () => {
        dispatch(modalSliceActions.setIsActive(true));
    }

    const logoutUser = () => {
        dispatch(userAuthSliceSliceActions.setLogoutUser());
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
                <Modal>
                    <LoginForm/>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <div className={'login-button'}>
                    <button className={'login-tap-button'} onClick={openModal}>LOGIN</button>
                </div>
                <Modal>
                    <LoginForm/>
                </Modal>
            </>
        );
    }
};