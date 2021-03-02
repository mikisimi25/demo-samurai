import React from 'react';
import { Field } from 'redux-form';
import s from './FormsControls.module.css'

export const FormControl = ({ input, meta: {touched, error},children}) => {
    const hasError = touched && error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = props => {
    const { input, meta, child, ...resProps } = props;
    return <FormControl {...props}> <textarea {...input} {...resProps} /> </FormControl>
}

export const Input = props => {
    const { input, meta, child, ...resProps } = props;
    return <FormControl {...props}> <input {...input} {...resProps} /> </FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} /> {text}
    </div>
);