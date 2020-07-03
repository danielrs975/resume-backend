/**
 * Component that allow the user to change his profile
 * @author Daniel Rodriguez
 */
import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import profile from '../fixtures/profile';
import SaveIcon from '@material-ui/icons/Save'

const ProfileForm = () => {
    const [bio, setBio] = useState(profile.bio);
    const [name, setName] = useState(profile.name);
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleBioChange = (e) => {
        setBio(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
            bio,
            name
        })
    }
    return (
        <form className="form" autoComplete="off" onSubmit={onSubmit}>
            <div className="form__input form__input--image">
                <AccountCircleIcon className="profile-photo" />
            </div>
            <TextField label="Name" variant="outlined" className="form__input" value={name} onChange={handleNameChange} />
            <TextField label="Bio" multiline variant="outlined" className="form__input form__input--textarea" value={bio} onChange={handleBioChange} />
            <Button className="button button--form" onClick={onSubmit}>
                <SaveIcon fontSize="large" className="save-icon" />
                Save
            </Button>
        </form>
    )
}

export default ProfileForm
