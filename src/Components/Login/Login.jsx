import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from './../../Utils/validators';
import { Input } from './../Common/Preloader/FormsControls/FormsConrols';
import { connect } from 'react-redux';
import { login } from './../../redux/Auth_Reducer';
import { Redirect } from 'react-router-dom';
import styles from '../Common/Preloader/FormsControls/FormsControls.module.css';
    const LoginForm = (props) =>{
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input}  validate={[required]} name={"email"} placeholder={"Login"}/>
                </div>
                <div>
                    <Field  component={Input}  validate={[required]} name={"password"} placeholder={"Password"}/>
                </div>
                <div>
                    <Field component={Input}  name={"rememberMe"} type={"checkbox"} /> remember me
                </div>
               {props.error &&
               <div className={styles.formSummaryError}>
                    ERROR!!!
                </div>
    }
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }
    
const LoginReduxForm =  reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

  const Login = (props) => {
      if (props.isAuth) {
         return <Redirect to={'/profile'}/>
      }
      const onSubmit = (formData) =>{
          props.login(formData.email, formData.password,formData.rememberMe)
      }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) =>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);