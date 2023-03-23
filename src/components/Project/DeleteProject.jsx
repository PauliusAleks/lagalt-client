import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteProjectAsync } from '../../reduxParts/projectReducer';


function DeleteProject() {
    const [projectToDelete, setProjectToDelete] = useState(null)
    const dispatch = useDispatch();
    const project = useSelector((state) => state.project);
    const projects = useSelector((state) => state.banners);

    const user = useSelector((state) => state.user);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setProjectToDelete({...projectToDelete, projectId: project.id, userId:user.id, admins: project.admins})
        setShow(true)
  };


    // const handleDeleteProject = (projectId, adminId) => {
    //     dispatch(deleteProjectAsync({projectId, adminId}));
    // }


    const handleSubmit = () => {
        dispatch(deleteProjectAsync(projectToDelete))
            .then((result) => {
                console.log("Project was successfully deleted");
                handleClose();
            })
            .catch((error) => {
                console.log("Could not delete project:", error.message);
            });
        //projects.remove(projectToDelete)
      };


    return(
        <div>
            <Button variant="danger" onClick={handleShow}>Slett prosjekt</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    {projectToDelete && projectToDelete.admins
                    ? `Du er i ferd med å slette ${project.name}`
                    : "Bare administratorer kan slette et prosjekt!"}                
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Lukk
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Slett prosjekt
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default DeleteProject