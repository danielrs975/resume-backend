import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import TrashIcon from '@material-ui/icons/Delete'
const ProjectLinkForm = (props) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }
    return (
        <div  className="form form--links">
            <TextField label="Name" variant="outlined" className="form__input" value={name} onChange={handleNameChange} />
            <TextField label="Link" variant="outlined" className="form__input" value={link} onChange={handleLinkChange} />
            <TrashIcon fontSize="large" className="icon" onClick={() => props.handleDeleteLink(props.link.id)} />
        </div>
    )
}

export default ProjectLinkForm
