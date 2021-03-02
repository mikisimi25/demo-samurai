import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <article className={s.friend}>
            <img src='https://image.flaticon.com/icons/png/512/147/147144.png' alt='friend' />
            <span>{props.name}</span>
        </article>
    )
}

export default Friend;