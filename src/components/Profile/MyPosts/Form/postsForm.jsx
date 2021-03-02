import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from '../MyPosts.module.css';
import {required,maxLengthCreator} from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/FormsControls/FormsControls'; 

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  className={s.textareaNews} name={'text'} placeholder={'Your news...'}  validate={[required, maxLength10]} component={Textarea} />
            <button className={s.inputNews}>Send</button>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({ form: 'posts' })(MyPostsForm);

const PostsForm = (props) => {
    
    let addPost = (value) => {
        props.addPost(value.text);
    }

    return (
        
        <section className={s.addPosts}>
            <h2>My posts</h2>
            <MyPostsReduxForm onSubmit={addPost} />
        </section>
    )
}

export default PostsForm;