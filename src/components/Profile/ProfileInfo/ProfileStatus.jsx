import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = { //локальный state
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({ 
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <ul>
                {!this.state.editMode &&
                    <li onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</li>
                }{this.state.editMode &&
                    <li> <input onChange={this.onStatusChange} autoFocus='true' onBlur={this.deactivateEditMode} value={this.state.status} /> </li>
                }
            </ul>
        )

    }
}

export default ProfileStatus;