import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, ListGroup, Modal, InputGroup, CloseButton } from 'react-bootstrap';
import { setProject } from '../../reduxParts/projectReducer';
import { createProjectAsync, addAdmin } from '../../reduxParts/projectReducer';
import { getSkillsAsync } from '../../reduxParts/skillsReducer'
import { storageSave, storageRead } from '../../utils/storage';
import DatalistInput from 'react-datalist-input';
import PlussSVG from './PlussSVG';


function CreateProject() {
  const [show, setShow] = useState(false);
  const project = useSelector((state) => state.project)
  const user = useSelector((state) => state.user)
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  const [alreadyInList, setAlreadyInList] = useState(false);
  const [project1, setProject1] = useState({
    name:"",
    category:0,
    progress:0,
    description:"",
    gitUrl:"",
    imageUrls:[],
    NeededSkills:[],
    adminId: -1,
    contributorId:-1,
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
  
  const handleChange1 = (event) => {
    let propertyName = event.target.name;
    let propertyValue= event.target.value;
    if(propertyName === "category" || propertyName === 'progress'){
      propertyValue = parseInt(propertyValue)
    }
    setProject1({...project1, [propertyName] : propertyValue})
  };


 
  const handleAddImage = () => {
    let newUrl = document.getElementById('imageUrls').value.trim()
    if(!project1.imageUrls.includes(newUrl)){
      setProject1({...project1, adminId: user.id, contributorId: user.id, imageUrls: [...project1.imageUrls,newUrl]})
    }
    document.getElementById('imageUrls').value = "";
  }


  const handleAddSkill = () => {
    let newSkill = document.getElementById('neededSkills').value.trim()
    if(!project1.NeededSkills.includes(newSkill)){
      setProject1({...project1, NeededSkills: [...project1.NeededSkills, newSkill]})
    }
    setAlreadyInList(true)
    document.getElementById('neededSkills').value = "";
  }


  const handleRemoveSkill = (event) => {
    setProject1({...project1, NeededSkills: project1.NeededSkills.filter(skill=>skill !== event.target.id)})
  }

  const handleRemoveImage = (event) => {
    setProject1({...project1, imageUrls: project1.imageUrls.filter(url=>url !== event.target.id)})
  }

 
 
  return (
    <>
      <Button variant="white" onClick={handleShow}> <PlussSVG/>
            Opprett prosjekt
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
                <option value={2}>Spillutvikling</option>
                <option value={3}>Nettutvikling</option>
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
              <InputGroup>
                <Form.Control type="text" id="imageUrls" placeholder="Legg til en link" />
                <Button variant="secondary" onClick={handleAddImage}>Add</Button>
              </InputGroup>
              <ul>
                {project1.imageUrls.map((url, index) => (
                  <li key={index}>
                    <a href={url}>{url}</a> <CloseButton id={url} onClick={handleRemoveImage} style={{width:'5px', height:'5px'}}/>
                  </li>
                ))}
              </ul>

              <Form.Label>Ferdigheter prosjektet ser etter</Form.Label>
              <InputGroup>
              <Form.Control type="text" id="neededSkills" placeholder="Legg til en skill" />
              <Button variant="secondary" style={{float:'right'}} onClick={handleAddSkill}>Add</Button>
              </InputGroup>
              <ListGroup horizontal>
                {project1.NeededSkills.map((skill, index) => (
                  <ListGroup.Item key={index}>
                    {skill} <CloseButton id={skill} onClick={handleRemoveSkill} style={{width:'5px', height:'5px'}} />
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