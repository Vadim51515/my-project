import React from 'react';
import styles from './FormsControls.module.css';
export const FormControls = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error 

    return (
        <div className={styles.formConrol + " " + (hasError? styles.error : '')}>
            <div>
               {props.children}       
            </div>
            {hasError &&<span>{meta.error}</span>}
        </div>
    )
}
export const Input = (props) => {
   const { input, meta, child, ...restProps } = props
    return <FormControls {...props}><input {...restProps} {...input} /></FormControls>
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
     return <FormControls {...props}><textarea {...restProps} {...input} /></FormControls>
 }
 