import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {IForm} from "../../models/i-form-model/IForm.ts";
import {loginValidator} from "../../validator/loginValidator.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {modalSliceActions} from "../../redux/slices/ModalSlice.ts";
import {userAuthSliceActions} from "../../redux/slices/UserAuthSlice.ts";
import './LoginFormComponent.css';
import {loginUser} from "../../services/api.login.user.ts";

export const LoginFormComponent = () => {
    const {isActive} = useAppSelector(({modalSlice})=>modalSlice)
    const dispatch = useAppDispatch();

    const {handleSubmit, register, formState: {errors}, reset} = useForm<IForm>({
        mode: "all",
        resolver: joiResolver(loginValidator)
    });

    useEffect(() => {
        if (!isActive) {
            reset()
        }
    }, [isActive,reset]);
    const submitAndLogin = async (formData: IForm) => {
        const {data} = await loginUser({...formData,expiresInMins:1}).then(res => res);
        dispatch(userAuthSliceActions.setLoginUser(data))
        dispatch(modalSliceActions.setIsActive(false));
        reset()
    };

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
                <button className={'button-sing-in'}>SIGN IN</button>
            </form>
        </div>
    )
};