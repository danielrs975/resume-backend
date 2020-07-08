/**
 * Form to add a new project to the page
 * @author Daniel Rodriguez
 */
import React from 'react'
import { Button, TextField, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ProjectLinkForm from './ProjectLinkForm';

const ProjectForm = (props) => {
    return (
        <form className="form project">
            <div className="project__image">
                In here goes the image of the project
            </div>
            <div className="project__content">
                <TextField label="Name" variant="outlined" className="form__input"/>
                <TextField label="Duration" variant="outlined" className="form__input" />
                <TextField label="Description" multiline variant="outlined" className="form__input form__input--textarea" />
                <div className="project__links">
                    <div className="subheader">
                        <h4>Add Links</h4>
                        <Fab color="primary" aria-label="add" size="small">
                            <AddIcon fontSize="large" />
                        </Fab>
                    </div>
                    <ProjectLinkForm />
                </div>
                <div className="project__buttons">
                    <Button className="button button--form">
                        Publish
                    </Button>
                    <Button className="button button--cancel" onClick={() => props.handleDeleteProject(props.project.id)} >
                        Delete
                    </Button>
                </div>
            </div> 
        </form>
    )
}

export default ProjectForm
