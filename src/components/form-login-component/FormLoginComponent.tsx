import {useForm} from "react-hook-form";
import {LoginData} from "../../models/login-data-model/LoginData.ts";
import {login} from "../../services/api.login.service.ts";

export const FormLoginComponent = () => {

    const {handleSubmit, register} = useForm<LoginData>(
        {
            mode: 'all'
        }
    );

    const myHandelSubmit = async (data: LoginData) => {

        if (data.password.includes(data.username)) {
            const loginData: LoginData = {
                username: data.username,
                password: data.password,
                expiresInMins: 1
            };
            await login(loginData);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(myHandelSubmit)}>
                    <label>
                        <input type={'text'} {...register('username')} placeholder={'Enter the username'}/>
                    </label>
                    <label>
                        <input type={'text'} {...register('password')} placeholder={'Enter the password'}/>
                    </label>
                    <button>LOGIN</button>
                </form>
            </div>

        </>
    );
};