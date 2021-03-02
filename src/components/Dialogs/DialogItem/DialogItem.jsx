import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li><NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink></li>
    )
}

export default DialogItem;