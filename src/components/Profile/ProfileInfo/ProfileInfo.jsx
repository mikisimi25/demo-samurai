import React,{useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode,setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <React.Fragment>
            <section className={s.banner}>
                <img src={profile.photos.large || 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'} alt="banner" />
            </section>
            <section className={s.profileInfo}>

                {!isOwner ? <input type={'file'} onChange={onMainPhotoSelected} /> : <img src={profile.photos.small || 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'} alt='avatar' />}

                {editMode ? 
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : 
                    <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                

            </section>
        </React.Fragment>
    )
}

const ProfileData = ({ profile,isOwner,status,updateStatus,goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode} >edit</button>}
            <h1>Full name: {profile.fullName}</h1>
            <ul>
                <li>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</li>
                {profile.lookingForAJob &&
                    <li>My professional skills: {profile.lookingForAJobDescription}</li>
                }
                <li>About me: {profile.aboutMe}</li>
                <li>Contacts:
                            <ul>
                        {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <li>{contactTitle}: {contactValue}</li>
    )
}

export default ProfileInfo;