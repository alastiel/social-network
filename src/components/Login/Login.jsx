import React from 'react';
import s from './Login.module.css'
import fc from '../common/FormControls/FormControls.module.css'
import {Form, Field} from 'react-final-form'
import {requiredField} from "../../Utils/Validators/Validators";
import {Input} from "../common/FormControls/FormControls";
import {login, logout} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return <div className={s.loginRegion}>
        <h3>LOGIN</h3>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

// const LoginForm = (props) => {
//     return (
//         <Form onSubmit={values => props.onSubmit(values.login, values.password, values.rememberMe, values.captcha)}>
//             {({handleSubmit, submitError}) => (
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <Field validate={requiredField} name={'login'}>
//                         {(props) => {
//                             return (
//                                 <div>
//                                     <input placeholder="Login" type="text" {...props.input} />
//                                     { props.meta.error && props.meta.touched && <span> {props.meta.error} </span>}
//                                 </div>
//                             )}
//                         }
//                     </Field>
//                 </div>
//                 <div>
//                     <Field validate={composeValidators(requiredField, minLength(6))} name={'password'}>
//                         {(props) => {
//                             return(
//                                 <div>
//                                     <input placeholder="Password" type="password" {...props.input} />
//                                     { props.meta.error && props.meta.touched && <span> {props.meta.error} </span>}
//                                 </div>
//                             )}
//                         }
//                     </Field>
//                 </div>
//                 <div>
//                     <Field name="rememberMe" >
//                         {(props) => (<input type="checkbox" {...props.input} />)}
//                     </Field>
//                 </div>
//                 <div>
//                     {submitError && <div className={fc.formSummeryError}> {submitError} </div>}
//                     <button>login</button>
//                 </div>
//             </form>
//         )}
//         </Form>
//     )
// }

const LoginForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
        {({handleSubmit, submitError, values}) =>(
            <form onSubmit={handleSubmit}>
                <div>
                    <Field validate={requiredField} placeholder={'Email'} component={Input} name={'email'}/>
                </div>
                <div>
                    <Field validate={requiredField} placeholder={'Password'} component={Input} name={'password'} type={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
                </div>
                <div>
                    {submitError && <div className={fc.formSummeryError}>
                        {props.onSubmit.values}
                    </div>}
                    <button>login</button>
                </div>
            </form>
        )}
    </Form>)
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login, logout}) (Login);