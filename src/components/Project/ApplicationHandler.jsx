import React, { useState, useEffect } from "react";
import {Button, Form, ListGroup, Modal} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { setApplicationToAcceptedAsync, setApplicationToRejectedAsync, setApplication } from "../../reduxParts/applicationReducer";
import {getProjectApplicationAsync} from "../../reduxParts/applicationsReducer";
import { getUserAsync } from "../../reduxParts/userReducer";


function ApplicationHandler({project}) {
    const applications = useSelector((state) => state.applications.applications)
    const user = useSelector((state) => state.user)
    const [editApplications, setEditApplications] = useState(applications)
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true)
        dispatch(getProjectApplicationAsync(project))
    };
    
    const handleApplicationAccept = (id) => {
        setEditApplications([editApplications.filter(application => application.id !== id)])
        dispatch(setApplicationToAcceptedAsync(id));
    }
    const handleApplicationReject = (id) => {
        setEditApplications([editApplications.filter(application => application.id !== id)])
        dispatch(setApplicationToRejectedAsync(id));
    }
    const handleSubmit = () => {
        if(applications !== editApplications){
            dispatch(setApplication(true))
        }
          console.log(editApplications)
    }
    
    return(
        <div>
            <Button variant="success" onClick={handleShow}>Behandle søknader</Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Behandle søknadene for: {project.name}              
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group>
                        <ListGroup>
                            {applications && editApplications
                            .filter(application=> application.state === 'Ventende')
                            .map(application => (
                                <ListGroup.Item key={application.id}>
                                    <h4>{application.motivationLetter}</h4>
                                    {/* <h3>{application.user.username}</h3> */}
                                    <Button variant="success" onClick={() => handleApplicationAccept(application.id)}>Aksepter</Button>
                                    <Button variant="danger" onClick={() => handleApplicationReject(application.id)}>Avslå</Button>
                                </ListGroup.Item>
                            ))}
                            {!applications
                            }
                        </ListGroup>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
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

export default ApplicationHandler;