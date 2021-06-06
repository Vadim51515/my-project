import React from 'react';
import styles from './FormsControls.module.css';
import { Field } from 'redux-form';
export const FormControls = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error 

    return (
        <div className={styles.formConrol + " " + (hasError && styles.error)}>
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
 export const CreateField = (placeholder, name, validators, component, props = {}, text) => {
    return <div>
        <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
        />{text}
    </div>
 }
 