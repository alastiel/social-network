import React from "react";
import s from './FormControls.module.css'

//({input, meta, ...props}) тут мы достали input и meta из пропсов и положили их отдельно,
// теперь при передачи пропсов дальше там их не будет, input и meta нужно передавать отдельно.
// Это называется деструкторизация данных
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError && s.error)}>
            <textarea {...props} {...input}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error &&meta.touched;
    return (
        <div className={s.formControl + " " + (hasError && s.error)}>
            <input {...props} {...input}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}