import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, ListGroup, Modal } from 'react-bootstrap';
import { setProject } from '../../reduxParts/projectReducer';
import { createProjectAsync } from '../../reduxParts/projectReducer';
import { getSkillsAsync } from '../../reduxParts/skillsReducer'
import { storageSave, storageRead } from '../../utils/storage';
import DatalistInput from 'react-datalist-input';

function CreateProject() {
  const [show, setShow] = useState(false);
  const project = useSelector((state) => state.project)
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  const [project1, setProject1] = useState({
    name:"",
    category:0,
    progress:0,
    description:"",
    gitUrl:"",
    imageUrls:[],
    NeededSkills:[],

  })
  
  // useEffect(() => {
  //   dispatch(getSkillsAsync())
  // },[])
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    // handle form submission
    dispatch(createProjectAsync(project1));
    handleClose();
  };
  const handleAddSkillsToSessionStorage =() => {
    storageSave("skills",skills)
  }
  const handleChange1 = (event) => {
    let propertyName = event.target.name;
    let propertyValue= event.target.value;
    if(propertyName === "category" || propertyName === 'progress'){
      propertyValue = parseInt(propertyValue)
    }
    setProject1({...project1, [propertyName] : propertyValue})
    //console.log(skills)
    //console.log(project1)
  };

  const [imageUrl, setImageUrl] = useState([]);
  const [NeededSkills, setNeededSkills] = useState([])

  const handleChanges = (event) => {
    if (event.target.id === 'imageUrls') {
      setImageUrl(event.target.value);
    } else if (event.target.id === 'NeededSkills') {
      setNeededSkills(event.target.value);
    }
  }
  const addImageUrlToList = () => {
    if (imageUrl.trim() !== ""){
      setProject1({...project1, imageUrls: [...project1.imageUrls, imageUrl.trim()],       
      });
      setImageUrl("");
      document.getElementById('imageUrls').value = "";
      // console.log(project1)
    }
  }
  const handleAddImage = () => {
    addImageUrlToList();
  };
  const addSkillsToList = () => {
    if (NeededSkills.trim() !== ""){
      setProject1({...project1, NeededSkills: [...project1.NeededSkills, NeededSkills.trim()],
      });
      setNeededSkills("");
      document.getElementById('NeededSkills').value = "";
    }
  }

  const handleAddSkill = () => {
    addSkillsToList();
  }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Opprett prosjekt
      </Button>
      <Button variant="primary" onClick={handleAddSkillsToSessionStorage}>
        SkillsSessionStorage
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opprett prosjekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="required">
              <Form.Label>Tittel *</Form.Label>
              <Form.Control
                type="title"
                placeholder="Prosjekttittel"
                onChange={handleChange1}
                name="name"
              />
              <Form.Label className="mt-3">Kategori *</Form.Label>
              <Form.Select className="mb-3 mt-2" onChange={handleChange1} name="category">
                <option hidden>Velg en kategori</option>
                <option value={0}>Musikk</option>
                <option value={1}>Film</option>
                <option value={2}>SpillUtvikling</option>
                <option value={3}>NettUtvikling</option>
              </Form.Select>

              <Form.Label>Status *</Form.Label>
              <Form.Select className="mb-3 mt-2"  onChange={handleChange1} name="progress">
                <option hidden>Velg prosjekt status</option>
                <option value={0}>Utsatt</option>
                <option value={1}>Oppstart</option>
                <option value={2}>Under Utvikling</option>
                <option value={3}>Ferdig</option>
              </Form.Select>
              
              <Form.Label>Beskrivelse *</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Hva går prosjektet ut på? 
              Hva ser du etter? ..."
              onChange={handleChange1} name="description"
              />
                       
              <Form.Label>GitURL</Form.Label>
              <Form.Control type="text" placeholder="https://gitlab.com/brukernavn/prosjektnavn"  onChange={handleChange1} name="gitUrl" />
              </Form.Group>             
            <Form.Group className="mb-3">
              <Form.Label>Bilder</Form.Label>
              <Form.Control type="text" id="imageUrls" value={project.ImageUrls} onChange={handleChanges} placeholder="Legg til en link" />
              <Button variant="secondary" style={{float:'right'}} onClick={handleAddImage}>Add</Button>
              <ul>
                {project1.imageUrls.map((url, index) => (
                  <li key={index}>
                    <a href={url}>{url}</a>
                  </li>
                ))}
              </ul>

              <Form.Label>Ferdigheter prosjektet ser etter</Form.Label>
              <Form.Control type="text" id="NeededSkills" value={project.NeededSkills} onChange={handleChanges} placeholder="Legg til en skill" />
              <Button variant="secondary" style={{float:'right'}} onClick={handleAddSkill}>Add</Button>
              <ListGroup horizontal>
                {project1.NeededSkills.map((skill, index) => (
                  <ListGroup.Item key={index}>
                    {skill}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Lukk</Button>
          <Button variant="primary" onClick={handleSubmit}>Opprett prosjekt</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default CreateProject