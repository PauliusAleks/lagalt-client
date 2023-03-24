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

function EditProjectTexts() {
    const project = useSelector((state) => state.project);
    const [editProject, setEditProject] = useState(project);
    const [inputText, setInputText] = useState("");
    const [characterLimit] = useState(1250);
    const [nameLimit] = useState(30);

    const handleDescriptionChange = event => {
        setInputText(event.target.value);
        setEditProject({...editProject, description:event.target.value})
      };
    const handleNameChange = event => {
        setInputText(event.target.value);
        setEditProject({...editProject, name:event.target.value})
    }
    
    return (
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h4>Prosjekt tittel:</h4>
            <Form.Control style={{width:'100%', height:'30px'}}
            as="textarea"
            defaultValue={editProject.name}
            maxLength={nameLimit}
            onChange={handleNameChange}/>
            <Badge className='mt-2 bg-secondary'>{inputText.length}/{nameLimit}</Badge>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h4>Prosjekt beskrivelse:</h4>
            <Form.Control style={{width:'100%', height:'120px'}}
            as="textarea"
            defaultValue={editProject.description}
            maxLength={characterLimit}
            onChange={handleDescriptionChange}/>
            <Badge className='mt-2 bg-secondary'>{inputText.length}/{characterLimit}</Badge>
        </Form.Group>
        </Form>
    )
}
export default EditProjectTexts
