/**
 * Information about the projects of a person
 */
import React from 'react'
import { Divider, Button } from '@material-ui/core'
import ProjectForm from './ProjectForm'
import { v1 as uuid } from 'uuid'
import database from '../firebase/firebase'

export default class ProjectsPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
        this.fetchProjects();
    }

    /**
     * Method to fetch the projects from firebase
     */
    fetchProjects = () => {
        database.ref('/projects').once('value').then((snapshot) => {
            const projects = [];
            snapshot.forEach((childSnapshot) => {
                projects.push({
                    ...childSnapshot.val(),
                    id: childSnapshot.key
                })
            })
            this.setState({ projects });
        })
    }

    handleAddNewProject = () => {
        const projects = [...this.state.projects, {id: uuid()}]
        this.setState({ projects })
    }
    handleDeleteProject = (projectId) => {
        const projects = this.state.projects.filter((project) => project.id !== projectId)
        this.setState({ projects })
    }
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="header">
                        <h2>Add Projects</h2>
                    </div>
                    <Divider />
                    {/* <ProjectForm /> */}
                    { this.state.projects.map((project) => <ProjectForm project={project} key={project.id} handleDeleteProject={this.handleDeleteProject} />) }
                    <Button className="button button--add" onClick={this.handleAddNewProject}>
                        Add a new project
                    </Button>
                </div>
            </div>
        )
    }
}

// const ProjectsPage = () => {
//     const [newProjects, setNewProjects] = useState([]);
//     // database.ref('/projects').once('value').then((snapshot) => {
//     //     const projects = [];
//     //     snapshot.forEach((childSnapshot) => {
//     //         projects.push({
//     //             ...childSnapshot.val(),
//     //             id: childSnapshot.key
//     //         })
//     //     })
//     //     setNewProjects(projects)
//     // })
//     console.log('Hola')
//     const handleAddNewProject = () => {
//         setNewProjects([...newProjects, {id: uuid()}])
//     }
//     const handleDeleteProject = (projectId) => {
//         setNewProjects(newProjects.filter((project) => project.id !== projectId))
//     }
    
// }

// export default ProjectsPage
