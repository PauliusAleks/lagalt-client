import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { updateProjectAsync, setProject, setUpdated } from '../../reduxParts/projectReducer';
import DeleteProject from "./DeleteProject";
import EditProjectList from "./EditProjectList";
import EditProjectText from "./EditProjectText";
import EditProjectSelect from "./EditProjectSelect";



function AdminProjectHandler() {
    const dispatch = useDispatch();
    const project = useSelector((state) => state.project);
    const user = useSelector((state) => state.user);

    const [editProject, setEditProject] = useState(project)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)};
    

    const handleSubmit = () => {
      console.log(editProject)
      console.log("project",project)
      if(project !== editProject){
        dispatch(setUpdated(true))
      }
      dispatch(setProject(editProject))
      dispatch(updateProjectAsync(editProject))
      handleClose();
    }
    const handleApplicationAccept = () => {

    }
    const handleApplicationDenied = () => {

    }


    return(
        <div>
            <Button variant="danger" onClick={handleShow}>Rediger prosjekt</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Her kan du redigere {project.name}              
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group>
                        <EditProjectText editProject={editProject} setEditProject={setEditProject}/>
                        <EditProjectSelect editProject={editProject} setEditProject={setEditProject}/>
                        <EditProjectList editProject={editProject} setEditProject={setEditProject}/>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <DeleteProject style={{float: 'left'}}/>
                <Button variant="secondary" onClick={handleClose}>
                    Lukk
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Lagre endringer
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

  export default AdminProjectHandler;