import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <article>
            <div className={s.user}>
                <img src='https://image.flaticon.com/icons/png/512/194/194938.png' alt='avatar' />
                <h3>{props.user}</h3>
            </div>
            <div className={s.userText}>
                <p>{props.message}</p>
            </div>
        </article>
    )
}

export default Message;