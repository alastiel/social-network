import React from "react";
import s from './FormControls.module.css'

//({input, meta, ...props}) тут мы достали input и meta из пропсов и положили их отдельно,
// теперь при передачи пропсов дальше там их не будет, input и meta нужно передавать отдельно.
// Это называется деструкторизация данных
const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError && s.error)}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}