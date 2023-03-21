import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import UserSkills from "../Profile/UserSkills";

function ApplyProject() {
  const project = useSelector((state) => state.project);
  const user = useSelector((state) => state.user);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Send søknad
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send søknad til {project.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Brukernavn</Form.Label>
              <Form.Control type="username" autoFocus value={user.username} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mine skills</Form.Label>
              <h4> <UserSkills /></h4>

              <Form.Label>Motivasjonsbrev</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Hvorfor vil du bli med ..."/>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lukk
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send søknad
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ApplyProject;
