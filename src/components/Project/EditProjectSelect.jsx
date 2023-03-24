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


function EditProjectSelect() {
    const project = useSelector((state) => state.project);
    const [editProject, setEditProject] = useState(project);

    const handleCategoryChange = event => {
        let propertyName = event.target.name;
        let propertyValue = event.target.value;
        if(propertyName === "category"){
            propertyValue = parseInt(propertyValue)
        }
        setEditProject({...editProject, [propertyName]: propertyValue})// category:event.target.value})
    }
    const handleProgressChange = event => {
        let propertyName = event.target.name;
        let propertyValue = event.target.value;
        if(propertyName === "progress"){
            propertyValue = parseInt(propertyValue)
        }
        setEditProject({...editProject, [propertyName]: propertyValue})//progress:event.target.value})
    }

    return(
        <Form>
            <Form.Label className="mt-3">Kategori:</Form.Label>
            <Form.Select className="mb-3 mt-2" onChange={handleCategoryChange} name="category">
            <option hidden>{project.category}</option>
            <option value={0}>Musikk</option>
            <option value={1}>Film</option>
            <option value={2}>SpillUtvikling</option>
            <option value={3}>NettUtvikling</option>
            </Form.Select>
            <Form.Label>Status:</Form.Label>
            <Form.Select className="mb-3 mt-2"  onChange={handleProgressChange} name="progress">
            <option hidden>{project.progress}</option>
            <option value={0}>Utsatt</option>
            <option value={1}>Oppstart</option>
            <option value={2}>Under Utvikling</option>
            <option value={3}>Ferdig</option>
            </Form.Select>
        </Form>
    )
}
export default EditProjectSelect