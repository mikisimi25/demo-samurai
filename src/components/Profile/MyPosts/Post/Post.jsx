import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <article className={s.item}>
            <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' alt='avatar'/>
            <section>
                <h3>{props.message}</h3>
                <span>Likes: {props.countLike}</span>
            </section>
        </article>
    )
}

export default Post;