/**
 * Form to add a new project to the page
 * @author Daniel Rodriguez
 */
import React from 'react'
import { Button, TextField } from '@material-ui/core'

const ProjectForm = () => {
    return (
        <form className="form project">
            <div className="project__image">
                In here goes the image of the project
            </div>
            <div className="project__content">
                <TextField label="Name" variant="outlined" className="form__input"/>
                <TextField label="Duration" variant="outlined" className="form__input" />
                <TextField label="Description" multiline variant="outlined" className="form__input form__input--textarea" />
                <div className="project__buttons">
                    <Button className="button button--form">
                        Publish
                    </Button>
                    <Button className="button button--cancel">
                        Cancel
                    </Button>
                </div>
            </div> 
        </form>
    )
}

export default ProjectForm
