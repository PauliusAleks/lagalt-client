import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import UserSkills from "../Profile/UserSkills";
import { createApplicationAsync } from "../../reduxParts/applicationReducer";

function ApplyProject({projectID}) {
  const project = useSelector((state) => state.project);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [applicationToCreate, setApplicationToCreate] = useState({
    projectId: null,
    userId: null,
    motivationLetter: ""
  })
  
  const handleMotivationLetterChange = (event) => {
    setApplicationToCreate({...applicationToCreate, motivationLetter : event.target.value})
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setApplicationToCreate({...applicationToCreate, projectId: project.id, userId:user.id})
    setShow(true)
  };

  const handleSubmit = () => {
    dispatch(createApplicationAsync(applicationToCreate))
    handleClose();
  }

  
  return (
    <>
      <Button variant="success" onClick={handleShow}>Send søknad</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send søknad til {project.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Brukernavn</Form.Label>
              <Form.Control type="username" autoFocus value={user.username} disabled={true} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mine ferdigheter</Form.Label>
              <h4> <UserSkills /></h4>
              <Form.Label>Motivasjonsbrev *</Form.Label>
              <Form.Control as="textarea" rows={5} onChange={handleMotivationLetterChange} placeholder="Hvorfor vil du bli med ..."/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lukk
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send søknad
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ApplyProject;
