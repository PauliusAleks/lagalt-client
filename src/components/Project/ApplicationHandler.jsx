import React, { useState, useEffect } from "react";
import {Button, Form, ListGroup, Modal} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { setApplicationToAcceptedAsync, setApplicationToRejectedAsync, setApplication } from "../../reduxParts/applicationReducer";
import {getProjectApplicationAsync, setApplications} from "../../reduxParts/applicationsReducer";
import { getUserByIdAsync } from "../../reduxParts/viewedUserReducer";
import ApplicationInfo from "./ApplicationInfo";


function ApplicationHandler({project}) {
    const applications = useSelector((state) => state.applications.applications)
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>{
        dispatch(getProjectApplicationAsync(project))
        setShow(true)
    }
     

    const handleApplicationAccept = (id) => {
        dispatch(setApplications(applications.filter(application => application.id !== id)))
        dispatch(setApplicationToAcceptedAsync(id));
    }
    const handleApplicationReject = (id) => {
        dispatch(setApplications(applications.filter(application => application.id !== id)))
        dispatch(setApplicationToRejectedAsync(id));
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
                            {applications && applications
                            .filter(application=> application.state === 'Ventende')
                            .map(application => (
                                <ListGroup.Item key={application.id}>
                                    <ApplicationInfo id={application.userId} motivationLetter= {application.motivationLetter}/>
                                    <Button variant="success" onClick={() => handleApplicationAccept(application.id)} style={{float: "right"}}>Aksepter</Button>
                                    <Button variant="danger" onClick={() => handleApplicationReject(application.id)} style={{float: "right"}}>Avslå</Button>
                                </ListGroup.Item>
                            ))}
                            {applications.filter(app=> app.state === 'Ventende').length === 0  &&
                            <h4>Du har ingen nye søknader å behandle😢</h4>}
                        </ListGroup>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Lukk
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default ApplicationHandler;