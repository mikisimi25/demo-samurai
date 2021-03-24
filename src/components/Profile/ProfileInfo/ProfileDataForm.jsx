import { createField, Input, Textarea } from 'components/common/FormsControls/FormsControls';
import React from 'react';
import { reduxForm } from 'redux-form';
import s from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
                <h1>Full name: {createField('Full name', 'fullName', [], Input)} </h1>
                <ul>
                    {error && <li className={s.formSummaryError}>{error}</li>}
                    <li>Looking for a job: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}</li>

                    <li>My professional skills: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}</li>

                    <li>About me: {createField('About me', 'aboutMe', [], Input)}</li>

                    <li>Contacts:
                        <ul>
                            {Object.keys(profile.contacts).map(key => {
                                return (
                                    <li key={key}>{key}: {createField(key, "contacts." + key, [], Input )}</li>
                                )
                            })}
                        </ul>
                    </li>   
                </ul>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;