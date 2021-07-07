import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../Utils/validators';
import { CreateField, GetStringKeys, Input} from '../Common/Preloader/FormsControls/FormsConrols';
import { connect } from 'react-redux';
import { login } from '../../redux/Auth_Reducer';
import { Redirect } from 'react-router-dom';
import styles from '../Common/Preloader/FormsControls/FormsControls.module.css';
import { AppStateType } from '../../redux/redux-store';
type LoginFormOwnProps = {
    captchaUrl: string | null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField<LoginFormValuesTypeKeys>("Email", "email", [required], Input, {}, undefined)}
            {CreateField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, { type: "password" }, undefined)}
            {CreateField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, { type: 'checkbox' }, "remember Me")}
            {captchaUrl && <img src={captchaUrl} alt="Capcha" />}
            {captchaUrl && CreateField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {}, undefined)}
            {error &&
                <div className={styles.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type MyStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MyDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


const Login: React.FC<MyStatePropsType & MyDispatchPropsType> = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}
const mapStateToProps = (state: AppStateType): MyStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})
export default connect(mapStateToProps, { login })(Login);