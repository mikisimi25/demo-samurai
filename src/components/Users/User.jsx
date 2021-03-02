import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';

let User = ({ user,key, folloingInProgress, unfollow, follow }) => {
    return (
        <article className={s.article} key={key}>
            <div className={s.avatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'} alt="user" />
                </NavLink>
                {
                    user.followed ?
                        <button disabled={folloingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button> :

                        <button disabled={folloingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</button>
                }
            </div>
            <div className={s.info}>
                <h3>{user.name}</h3>
                <p>{user.status}</p>
            </div>
        </article>
    )
}

export default User;