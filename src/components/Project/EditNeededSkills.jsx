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

function EditNeededSkills() {
  const project = useSelector((state) => state.project);
  const [editProject, setEditProject] = useState(project);
  const [ProjectSkills, setProjectSkills] = useState([]);
  const [alreadyInList, setAlreadyInList] = useState(false);
  const handleChanges = (event) => {
    setAlreadyInList(false);
    setProjectSkills(event.target.value);
  };

  const addSkillsToList = () => {
    if (ProjectSkills.trim() !== "") {
      if (editProject.neededSkills.includes(ProjectSkills)) {
        setAlreadyInList(true);
      } else {
        setEditProject({
          ...editProject,
          neededSkills: [...editProject.neededSkills, ProjectSkills],
        });
        setProjectSkills("");
        document.getElementById("neededSkills").value = "";
      }
    }
  };

  const handleRemoveItem = (event) => {
    setEditProject({
      ...editProject,
      neededSkills: editProject.neededSkills.filter(
        (sk) => sk !== event.target.id
      ),
    });
  };

  const handleAddSkill = () => {
    addSkillsToList();
  };

  return (

  <Form.Group>
    {alreadyInList && (
      <h4 style={{ color: "red" }}>Du har allerede denne skillen!</h4>
    )}
    <InputGroup>
      <Form.Control
        type="text"
        id="NeededSkills"
        onChange={handleChanges}
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
    <ListGroup horizontal>
      {editProject.neededSkills.map((skill, index) => (
        <ListGroup.Item
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {skill}
          <CloseButton
            id={skill}
            onClick={handleRemoveItem}
            style={{ width: "5px", height: "5px" }}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Form.Group>
  )
}
export default EditNeededSkills;
