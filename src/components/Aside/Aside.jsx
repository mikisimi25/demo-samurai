import React from 'react';
import s from './Aside.module.css';
import {NavLink} from 'react-router-dom';
import Friend from './Friend/Friend';


const Aside = (props) => {
    let friends = props.store.friends.map( friend => <Friend name={friend.name} key={friend.id}/>);

    return (
        <aside className={s.aside}>
            <ul className={s.item}>
                <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to="/users" activeClassName={s.active}>Find Users</NavLink></li>
            </ul>
            <h2>Friends</h2>
            {friends}           
        </aside>
    )
}


export default Aside;