/**
 * Information about the projects of a person
 */
import React from 'react'
import { Divider } from '@material-ui/core'
import ProjectForm from './ProjectForm'

const ProjectsPage = () => {
    return (
        <div>
            <div className="content-container">
                <div className="header">
                    <h2>Add Projects</h2>
                </div>
                <Divider />
                <ProjectForm />
            </div>
        </div>
    )
}

export default ProjectsPage
