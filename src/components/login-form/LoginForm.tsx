import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {IForm} from "../../models/form/IForm.ts";
import {loginValidator} from "../../validator/LogitValidator.ts";
import {loginUser} from "../../api/auth/loginUser.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userAuthSliceSliceActions} from "../../redux/slices/userAuth-slice/UserAuthSlice.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {modalSliceActions} from "../../redux/slices/modal-slice/ModalSlice.ts";
import './LoginForm.css';

export const LoginForm = () => {
    const {isActive} = useAppSelector(({modalSlice})=>modalSlice);
    const dispatch = useAppDispatch();

    const {handleSubmit, register, formState: {errors}, reset} = useForm<IForm>({
        mode: "all",
        resolver: joiResolver(loginValidator)
    })

    useEffect(() => {
        if (!isActive) {
            reset()
        }
    }, [isActive,reset]);
    const submitAndLogin = async (formData: IForm) => {
        const {data} = await loginUser({...formData,expiresInMins:30}).then(res => res);
        dispatch(userAuthSliceSliceActions.setLoginUser(data));
        dispatch(modalSliceActions.setIsActive(false));
        reset()
    }

    return (
        <div className={'login-to-app'}>
            <h2>LOGIN</h2>
            <form className={'login-form'} onSubmit={handleSubmit(submitAndLogin)}>
                <div>
                    <div className={'error-message'}>
                        {
                            errors.username  && <div className={'error-message-text'}>{errors.username.message}</div>
                        }
                    </div>
                    <label className={'label-form'}>
                        <span>USERNAME</span>
                        <input type="text" {...register('username')}/>
                    </label>
                </div>
                <div>
                    <div className={'error-message'}>
                        {
                            errors.password  && <div className={'error-message-text'}>{errors.password.message}</div>
                        }
                    </div>
                    <label className={'label-form'}>
                        <span>PASSWORD</span>
                        <input type="text" {...register("password")}/>
                    </label>
                </div>
                <button className={'button-sing-in'}>SING IN</button>
            </form>
        </div>
    )
};