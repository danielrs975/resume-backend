/**
 * In here goes the information about the profile of the person
 * @author Daniel Rodriguez
 */
import React from 'react'
import { Divider } from '@material-ui/core';
import ProfileForm from './ProfileForm';

const ProfilePage = () => {
    return (
        <div>
            <div className="content-container">
                <div className="header">
                    <h2>Modify Basic Information</h2>
                </div>
                <Divider />
                <ProfileForm />
            </div>
        </div>
    )
}

export default ProfilePage
