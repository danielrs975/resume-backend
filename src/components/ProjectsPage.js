/**
 * Information about the projects of a person
 */
import React, { useState } from 'react'
import { Divider, Button } from '@material-ui/core'
import ProjectForm from './ProjectForm'
import { v1 as uuid } from 'uuid'

const ProjectsPage = () => {
    const [newProjects, setNewProjects] = useState([{id: '13as'}]);
    const handleAddNewProject = () => {
        setNewProjects([...newProjects, {id: uuid()}])
    }
    const handleDeleteProject = (projectId) => {
        setNewProjects(newProjects.filter((project) => project.id !== projectId))
    }
    return (
        <div>
            <div className="content-container">
                <div className="header">
                    <h2>Add Projects</h2>
                </div>
                <Divider />
                {/* <ProjectForm /> */}
                { newProjects.map((project) => <ProjectForm project={project} key={project.id} handleDeleteProject={handleDeleteProject} />) }
                <Button className="button button--add" onClick={handleAddNewProject}>
                    Add a new project
                </Button>
            </div>
        </div>
    )
}

export default ProjectsPage
