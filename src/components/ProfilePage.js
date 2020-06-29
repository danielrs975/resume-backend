/**
 * In here goes the information about the profile of the person
 * @author Daniel Rodriguez
 */
import React from 'react'
import { Divider, TextField, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import profile from '../fixtures/profile';

const ProfilePage = () => {
    return (
        <div>
            <div className="content-container">
                <div className="header">
                    <h2>Modify Basic Information</h2>
                </div>
                <Divider />
                <form className="form" autoComplete="off">
                    <div className="form__input form__input--image">
                        <AccountCircleIcon className="profile-photo" />
                    </div>
                    <TextField label="Name" variant="outlined" className="form__input" value={profile.name} />
                    <TextField label="Bio" multiline variant="outlined" className="form__input form__input--textarea" value={profile.bio} />
                    <Button className="button" >Save</Button>
                </form>
            </div>
        </div>
    )
}

export default ProfilePage
