import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { updateProjectAsync, setProject, setUpdated, deleteProjectAsync } from '../../reduxParts/projectReducer';
import EditProjectList from "./EditProjectList";
import EditProjectText from "./EditProjectText";
import EditProjectSelect from "./EditProjectSelect";
import { parseCategory, parseProgress } from "../../const/parseCategoryProgress";
import { storageRead, storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";



function AdminProjectHandler() {
    const dispatch = useDispatch();
    const project = useSelector((state) => state.project);
    const navigate = useNavigate();

    const [editProject, setEditProject] = useState(project)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)};
    

    const handleSubmit = () => {
      if(project !== editProject){
        dispatch(setUpdated(true))
      }
      dispatch(setProject(editProject))
      dispatch(updateProjectAsync(editProject))
      storageSave('projects', storageRead('projects').map(pr=> pr.id === editProject.id ? pr = editProject : pr))
      handleClose();
    }

    const handleDelete = () => {
        if (window.confirm(`Du er i ferd med å slette "${project.name}", bekreft med Ok!`)){
            dispatch(deleteProjectAsync(project.id));
            storageSave('projects', storageRead('projects').filter(pr=> pr.id !== editProject.id))
            handleClose();
            navigate(-1);

    }}
    
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
                {/* <DeleteProject /> */}
                <Button variant="danger" onClick={handleDelete}>Slett prosjekt</Button>
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