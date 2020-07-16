/**
 * Form to add a new project to the page
 * @author Daniel Rodriguez
 */
import React, { useState } from 'react'
import { Button, TextField, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ProjectLinkForm from './ProjectLinkForm';
import { v1 as uuid } from 'uuid'

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.project)
        this.state = {
            links: [],
            description: props.project? props.project.description: '',
            name: props.project? props.project.name: '',
            date: props.project? props.project.date: ''
        }
    }
    /**
     * Add a new link to the form
     */
    handleAddLink = () => {
        const links = [...this.state.links, {id: uuid()}]
        this.setState({ links })
    }
    /**
     * Delete a link from the form
     * @param {*} id the if of the link
     */
    handleDeleteLink = (id) => {
        const links = this.state.links.filter((link) => link.id !== id)
        this.setState({ links })
    }
    render() {
        return (
            <form className="form project">
                <div className="project__image">
                    In here goes the image of the project
                </div>
                <div className="project__content">
                    <TextField label="Name" variant="outlined" className="form__input" value={this.state.name}/>
                    <TextField label="Duration" variant="outlined" className="form__input" value={this.state.date} />
                    <TextField label="Description" multiline variant="outlined" className="form__input form__input--textarea" value={this.state.description}/>
                    <div className="project__links">
                        <div className="subheader">
                            <h4>Add Links</h4>
                            <Fab color="primary" aria-label="add" size="small" onClick={this.handleAddLink} >
                                <AddIcon fontSize="large" />
                            </Fab>
                        </div>
                        {this.state.links.map((link) => <ProjectLinkForm key={link.id} link={link} handleDeleteLink={this.handleDeleteLink} />)}
                    </div>
                    <div className="project__buttons">
                        <Button className="button button--form">
                            Publish
                        </Button>
                        <Button className="button button--cancel" onClick={() => this.props.handleDeleteProject(this.props.project.id)} >
                            Delete
                        </Button>
                    </div>
                </div> 
            </form>
        )
    }
}


// const ProjectForm = (props) => {
//     // console.log(props.project)
//     const [links, setLinks] = useState([])
//     /**
//      * Add a new link to the form
//      */
//     const handleAddLink = () => {
//         setLinks([...links, {id: uuid() }]);
//     }
//     /**
//      * Delete a link from the form
//      * @param {*} id the if of the link
//      */
//     const handleDeleteLink = (id) => {
//         setLinks(links.filter((link) => link.id !== id));
//     }
//     return (
//         <form className="form project">
//             <div className="project__image">
//                 In here goes the image of the project
//             </div>
//             <div className="project__content">
//                 <TextField label="Name" variant="outlined" className="form__input"/>
//                 <TextField label="Duration" variant="outlined" className="form__input" />
//                 <TextField label="Description" multiline variant="outlined" className="form__input form__input--textarea" />
//                 <div className="project__links">
//                     <div className="subheader">
//                         <h4>Add Links</h4>
//                         <Fab color="primary" aria-label="add" size="small" onClick={handleAddLink} >
//                             <AddIcon fontSize="large" />
//                         </Fab>
//                     </div>
//                     {links.map((link) => <ProjectLinkForm key={link.id} link={link} handleDeleteLink={handleDeleteLink} />)}
//                 </div>
//                 <div className="project__buttons">
//                     <Button className="button button--form">
//                         Publish
//                     </Button>
//                     <Button className="button button--cancel" onClick={() => props.handleDeleteProject(props.project.id)} >
//                         Delete
//                     </Button>
//                 </div>
//             </div> 
//         </form>
//     )
// }

// export default ProjectForm
