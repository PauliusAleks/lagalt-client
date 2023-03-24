import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import {
  Form,
  Button,
  Badge,
  Alert,
  CloseButton,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

function EditProjectTexts({editProject, setEditProject}) {
    //const project = useSelector((state) => state.project);
    //const [editProject, setEditProject] = useState(project);
    const [characterLimit] = useState(1250);
    const [nameLimit] = useState(30);

    const handleDescriptionChange = event => {
        setEditProject({...editProject, description:event.target.value})
      };
    const handleNameChange = event => {
        setEditProject({...editProject, name:event.target.value})
    }
    const handleGitChange = event => {
        setEditProject({...editProject, gitURL:event.target.value})
    }
    return (
        <Form className="mb-3 mt-2">
        <Form.Group>
            <h4>Prosjekt tittel:</h4>
            <Form.Control style={{width:'100%', height:'30px'}}
            as="textarea"
            defaultValue={editProject.name}
            maxLength={nameLimit}
            onChange={handleNameChange}/>
            <Badge className='mt-2 bg-secondary'>{editProject.name.length}/{nameLimit}</Badge>
        </Form.Group>
        <Form.Group>
            <h4>Prosjekt beskrivelse:</h4>
            <Form.Control style={{width:'100%', height:'120px'}}
            as="textarea"
            defaultValue={editProject.description}
            maxLength={characterLimit}
            onChange={handleDescriptionChange}/>
            <Badge className='mt-2 bg-secondary'>{editProject.description.length}/{characterLimit}</Badge>
        </Form.Group>
        <Form.Group className="mt-2">
            <Form.Label>GitURL</Form.Label>
            <Form.Control type="text" value={editProject.gitURL}  onChange={handleGitChange} name="gitUrl" />
        </Form.Group>
        </Form>
    )
}
export default EditProjectTexts
