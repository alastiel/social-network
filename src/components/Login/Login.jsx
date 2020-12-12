import React from 'react';
import s from './Login.module.css'
import {Form, Field} from 'react-final-form'
import {requiredField} from "../../Utils/Validators/Validators";
import {Input} from "../common/FormControls/FormControls";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div className={s.loginRegion}>
        <h3>LOGIN</h3>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    return <Form onSubmit={props.onSubmit}>
        {({handleSubmit}) =>(
            <form onSubmit={handleSubmit}>
                <div>
                    <Field validate={requiredField} placeholder={'Login'} component={Input} name={'Login'}/>
                </div>
                <div>
                    <Field validate={requiredField} placeholder={'Password'} component={Input} name={'Password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
                </div>
                <div>
                    <button>login</button>
                </div>
            </form>
        )}
    </Form>
}



export default Login;