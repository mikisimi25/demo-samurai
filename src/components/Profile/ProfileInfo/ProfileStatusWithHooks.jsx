import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);//запускай useEffect когда в первый раз компонента монтировалась

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <ul>
            {!editMode &&
                <li onDoubleClick={activateEditMode}>{props.status || '-----'}</li>
            }{editMode &&
                <li> <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} 
// @ts-ignore
                autoFocus='true' /></li>
            }
        </ul>
    )

}

export default ProfileStatusWithHooks;