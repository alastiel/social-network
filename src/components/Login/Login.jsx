import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'Login'}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'Password'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    </div>
}
const LoginReduxForm = reduxForm({
    form: 'login' // a unique name for this form
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div className={s.loginRegion}>
        <h3>LOGIN</h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;