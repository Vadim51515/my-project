import React from 'react';
import styles from './FormsControls.module.css';
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import { FiledValidatorType } from '../../../../Utils/validators';

type FormControlsPropsType = {
    meta:WrappedFieldMetaProps
    children:React.ReactNode

}
export const FormControls:React.FC<FormControlsPropsType> = ({meta, children,}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formConrol + " " + (hasError && styles.error)}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input:React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    // const { input, meta, child, ...restProps } = props
    return <FormControls {...props}><input {...restProps} {...input} /></FormControls>
}

export const Textarea:React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    // const { input, meta, child, ...restProps } = props
    return <FormControls {...props}><textarea {...restProps} {...input} /></FormControls>
}

export function CreateField<FormKeysType extends string> (
    placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FiledValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {},
    text: string | undefined
)  {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            />{text}
        </div>
    )
}
