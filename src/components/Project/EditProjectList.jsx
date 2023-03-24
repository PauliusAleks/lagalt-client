import React, { useState } from "react";

import {
  Form,
  Button,
  CloseButton,
  InputGroup,
  ListGroup,
} from "react-bootstrap";

function EditProjectList({editProject, setEditProject}) {
  const [alreadyInList, setAlreadyInList] = useState(false);
  
  const handleAddImage = () => {
    let newUrl = document.getElementById('imageUrls').value.trim()
    if(!editProject.imageUrls.includes(newUrl)){
      setEditProject({...editProject, imageUrls: [...editProject.imageUrls,newUrl]})
      setAlreadyInList(true)
    }
    document.getElementById('imageUrls').value = "";
  }

  const handleAddSkill = () => {
    let newSkill = document.getElementById('neededSkills').value.trim()
    if(!editProject.neededSkills.includes(newSkill)){
      setEditProject({...editProject, neededSkills: [...editProject.neededSkills, newSkill]})
      setAlreadyInList(false)
    } else {
      setAlreadyInList(true)
    }
    document.getElementById('neededSkills').value = ""; 
  }


  const handleRemoveSkill = (event) => {
    setEditProject({...editProject, neededSkills: editProject.neededSkills.filter(skill=>skill !== event.target.id)})
  }

  const handleRemoveImage = (event) => {
    setEditProject({...editProject, imageUrls: editProject.imageUrls.filter(url=>url !== event.target.id)})
  }


  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Bilder</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            id="imageUrls"
            placeholder="Legg til en link"
          />
          <Button variant="secondary" onClick={handleAddImage}>
            Add
          </Button>
        </InputGroup>
        <ul>
          {editProject.imageUrls.map((url, index) => (
            <li key={index}>
              <a href={url}>{url}</a>{" "}
              <CloseButton
                id={url}
                onClick={handleRemoveImage}
                style={{ width: "5px", height: "5px" }}
              />
            </li>
          ))}
        </ul>
      </Form.Group>
      <Form.Group>
        <InputGroup>
          <Form.Control
            type="text"
            id="neededSkills"
            placeholder="Legg til en ny skill"
          />
          <Button
            variant="secondary"
            style={{ float: "right" }}
            onClick={handleAddSkill}
          >
            Add
          </Button>
        </InputGroup>
        <ListGroup horizontal style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexWrap: "wrap"
              }}>
          {editProject.neededSkills.map((skill, index) => (
            <ListGroup.Item
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}>
              {skill}
              <CloseButton
                id={skill}
                onClick={handleRemoveSkill}
                style={{ width: "5px", height: "5px" }}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Form.Group>
    </Form>
  );
}
export default EditProjectList;
