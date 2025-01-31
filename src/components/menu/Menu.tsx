import {Link} from "react-router-dom";
import {Modal} from "../modal/Modal.tsx";
import {useState} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userAuthSliceSliceActions} from "../../redux/slices/userAuth-slice/UserAuthSlice.ts";
import {AppRoutes} from "../../roures/routes.tsx";
import {LoginForm} from "../login-form/LoginForm.tsx";

export const Menu = () => {
    // Винести це в редакс
    const [active, setActive] = useState<boolean>(false)
    const openModal = () => {
        setActive(true)
    }

    const {userImage, isUserAuth} = useAppSelector(({userAuthSlice}) => userAuthSlice)
    const dispatch = useAppDispatch()

    const logoutUser = () => {
        dispatch(userAuthSliceSliceActions.setLogoutUser())
        dispatch(userAuthSliceSliceActions.setUserAuth(false))
        dispatch(userAuthSliceSliceActions.setUserImage(''))
    }

    if (isUserAuth && userImage) {
        return (
            <div className={'w-full bg-gray-50 bg-opacity-30 relative'}>
                <div className={'w-5/6 h-20 flex justify-end items-center '}>
                    <ul className={'flex w-96 gap-6 justify-end items-center'}>
                        <Link to={AppRoutes.root}>
                            <li className={'hover:text-white hover:underline underline-offset-2'}>Home</li>
                        </Link>
                        <Link to={AppRoutes.users}>
                            <li className={'hover:text-white hover:underline underline-offset-2'}>Users</li>
                        </Link>
                        <Link to={AppRoutes.recipes}>
                            <li className={'hover:text-white hover:underline underline-offset-2'}>Recipes</li>
                        </Link>
                        <button className={'hover:text-white hover:underline underline-offset-2'}
                                onClick={logoutUser}>Logout
                        </button>
                        <img src={userImage} alt="image" className={'size-14'}/>
                    </ul>
                </div>
                <Modal active={active} setActive={setActive}>
                    <LoginForm setActive={setActive}/>
                </Modal>
            </div>
        )
    } else {
        return (
            <div className={'w-full bg-gray-50 bg-opacity-30 relative'}>
                <div className={'w-5/6 h-20 flex justify-end items-center '}>
                    <ul className={'flex w-96 gap-6 justify-end items-center'}>
                        <Link to={AppRoutes.root}>
                            <li className={'hover:text-white hover:underline underline-offset-2'}>Home</li>
                        </Link>
                        <button className={'hover:text-white hover:underline underline-offset-2'}
                                onClick={openModal}>Login
                        </button>
                    </ul>
                </div>
                <Modal active={active} setActive={setActive}>
                    <LoginForm setActive={setActive}/>
                </Modal>
            </div>
        );
    }
}