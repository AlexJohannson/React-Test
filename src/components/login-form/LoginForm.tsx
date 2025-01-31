import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {IForm} from "../../models/form/IForm.ts";
import {loginValidator} from "../../validator/LogitValidator.ts";
import {loginUser} from "../../api/auth/loginUser.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userSlice} from "../../redux/slices/user-slice/UserSlice.ts";

interface LoginFormProps {
    setActive: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export const LoginForm = ({setActive}: LoginFormProps) => {
    const dispatch = useAppDispatch()
    const {handleSubmit, register, formState: {errors}, reset} = useForm<IForm>({
        mode: "all",
        resolver: joiResolver(loginValidator)
    })

    const submitAndLogin = async (formData: IForm) => {
        const data = await loginUser(formData).then(res => res.data);
        localStorage.setItem('user',JSON.stringify(data));
        dispatch(userSlice.actions.setUserImage(data.image))
        dispatch(userSlice.actions.setUserAuth(true))
        setActive(false);
        reset()
    }

    //Пофіксити висоту форми, убрати кончений колір вставки
    return (
        <div className={'flex flex-col justify-center items-center gap-6'}>
            <h2>Login</h2>
            <form className={'flex flex-col gap-2 '} onSubmit={handleSubmit(submitAndLogin)}>
                <div>
                    {
                        errors.username && <div className={'text-xs text-red-500'}>{errors.username.message}</div>
                    }
                    <label className={'flex justify-center flex-col gap-2 relative mt-3'}>
                        <span className={'block absolute -top-2 left-5 bg-white px-1 text-xs'}>Username</span>
                        <input type="text" {...register('username')}
                               className={'rounded-xl p-2 pl-4 outline-black-200 border-black border-opacity-25 border-2'}/>
                    </label>
                </div>
                <div className={'mt-1'}>
                    {
                        errors.password && <div className={'text-xs text-red-500'}>{errors.password.message}</div>
                    }
                    <label className={'flex justify-center flex-col gap-2 relative mt-3'}>
                        <span className={'block absolute -top-2 left-5 bg-white px-1 text-xs'}>Password</span>
                        <input type="text" {...register("password")}
                               className={'rounded-xl p-2 pl-4 outline-black-200 border-black border-opacity-25 border-2'}/>
                    </label>
                </div>
                <button className={'border-2 border-black border-opacity-25 rounded-xl w-24 hover:border-black self-center mt-4'}>
                    Sign in
                </button>
            </form>
        </div>
    );
};