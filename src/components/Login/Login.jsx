import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit,error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email','email',[required],Input)}
            {createField('Password','password',[required],Input, {type: 'password'})}
            {createField(null,'rememberMe',[required],Input,{type: 'checkbox'}, 'remember me')}

            {error && <div className={s.formSummaryError}>{error}</div>}
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) return <Redirect to={'/profile'} />

    return (
        <React.Fragment>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);