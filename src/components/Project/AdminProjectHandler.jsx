import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Badge, Alert, CloseButton, InputGroup, ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { updateProjectAsync, setProject, setUpdated } from '../../reduxParts/projectReducer';
import DeleteProject from "./DeleteProject";
import EditNeededSkills from "./EditNeededSkills";
import EditProjectTexts from "./EditProjectTexts";
import EditProjectSelect from "./EditProjectSelect";



function AdminProjectHandler() {
    const dispatch = useDispatch();
    const project = useSelector((state) => state.project);
    const projects = useSelector((state) => state.banners);
    const user = useSelector((state) => state.user);

    const [editProject, setEditProject] = useState(project)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setEditProject({...editProject, projectId: project.id, userId:user.id, admins: project.admins})
        setShow(true)};
    

    const handleSubmit = () => {
      if(project !== editProject){
        dispatch(setUpdated(true))
      }
      dispatch(setProject(editProject))
      dispatch(updateProjectAsync(editProject))
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
                        <EditProjectTexts/>
                        <EditProjectSelect/>
                        <EditNeededSkills/>
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