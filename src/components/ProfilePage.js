/**
 * In here goes the information about the profile of the person
 * @author Daniel Rodriguez
 */
import React, { useState } from 'react'
import { Divider, TextField, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import profile from '../fixtures/profile';
import SaveIcon from '@material-ui/icons/Save'
const ProfilePage = () => {
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
        <div>
            <div className="content-container">
                <div className="header">
                    <h2>Modify Basic Information</h2>
                </div>
                <Divider />
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
            </div>
        </div>
    )
}

export default ProfilePage
