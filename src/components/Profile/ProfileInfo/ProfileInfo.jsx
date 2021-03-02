import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <React.Fragment>
            <section className={s.banner}>
                <img src={profile.photos.large} alt="banner" />
            </section>
            <section className={s.profileInfo}>
                <img src={profile.photos.small} alt='avatar' />
                <div>
                    <h1>{profile.fullName}</h1>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </section>
        </React.Fragment>
    )
}

export default ProfileInfo;