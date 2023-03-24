import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, ListGroup, Modal, InputGroup, CloseButton, Badge } from 'react-bootstrap';
import { createProjectAsync } from '../../reduxParts/projectReducer';
import PlussSVG from './PlussSVG';
import '../../pages/IconAnimations.css'


function CreateProject() {
  const [show, setshow] = useState(false);
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [characterLimit] = useState(250);

  const [createProject, setCreateProject] = useState({
    name:"",
    category: null,
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
 
  const handleClose = () => setshow(false);
  const handleshow = () => {
     //for resetting state
     setCreateProject( {name:"",
     category:null,
     progress:0,
     description:"",
     gitUrl:"",
     imageUrls:[],
     NeededSkills:[],
     adminId: -1,
     contributorId:-1})
     setshow(true);
  }

  const handleSubmit = () => {
        // handle form submission
    if(createProject.name === "" || createProject.description === "" || createProject.category === null) {
      window.alert("Du må fylle ut feltene som har en stjerne")
    } else {
      dispatch(createProjectAsync(createProject));
      handleClose();
    }
  };
  
  const handleChange1 = (event) => {
    let propertyName = event.target.name;
    let propertyValue= event.target.value;
    if(propertyName === "category" || propertyName === 'progress'){
      propertyValue = parseInt(propertyValue)
    }
    setCreateProject({...createProject, [propertyName] : propertyValue})
  };


 
  const handleAddImage = () => {
    let newUrl = document.getElementById('imageUrls').value.trim()
    if(!createProject.imageUrls.includes(newUrl)){
      setCreateProject({...createProject, adminId: user.id, contributorId: user.id, imageUrls: [...createProject.imageUrls,newUrl]})
    }
    document.getElementById('imageUrls').value = "";
  }


  const handleAddSkill = () => {
    let newSkill = document.getElementById('neededSkills').value.trim()
    if(!createProject.NeededSkills.includes(newSkill)){
      setCreateProject({...createProject, NeededSkills: [...createProject.NeededSkills, newSkill]})
    }
    document.getElementById('neededSkills').value = "";
  }


  const handleRemoveSkill = (event) => {
    setCreateProject({...createProject, NeededSkills: createProject.NeededSkills.filter(skill=>skill !== event.target.id)})
  }

  const handleRemoveImage = (event) => {
    setCreateProject({...createProject, imageUrls: createProject.imageUrls.filter(url=>url !== event.target.id)})
  }

 
 
  return (
    <div style={{height:'50px', width:'300px', display:'flex'}}>
      <Button variant="white" onClick={handleshow}> <PlussSVG className="createProject"/>  
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opprett prosjekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="required">
              <Form.Label><div className="d-flex">Tittel<p style={{color:'red'}}>*</p></div></Form.Label>
              <Form.Control
                type="title"
                placeholder="Prosjekttittel"
                onChange={handleChange1}
                name="name"
              />
              <Form.Label className="mt-3"><div className="d-flex">Kategori<p style={{color:'red'}}>*</p></div></Form.Label>
              <Form.Select className="mb-3 mt-2" onChange={handleChange1} name="category">
                <option hidden>Velg en kategori</option>
                <option value={0}>Musikk</option>
                <option value={1}>Film</option>
                <option value={2}>Spillutvikling</option>
                <option value={3}>Nettutvikling</option>
              </Form.Select>


              <Form.Label>Status</Form.Label>
              <Form.Select className="mb-3 mt-2"  onChange={handleChange1} name="progress">
                <option hidden>Oppstart</option>
                <option value={0}>Oppstart</option>
                <option value={1}>Under Utvikling</option>
                <option value={2}>Utsatt</option>
                <option value={3}>Ferdig</option>
              </Form.Select>
             
              <Form.Label><div className="d-flex">Beskrivelse<p style={{color:'red'}}>*</p></div></Form.Label>
              <Form.Control as="textarea" maxLength={characterLimit} rows={3} placeholder="Hva går prosjektet ut på?
              Hva ser du etter? ..."
              onChange={handleChange1} name="description"
              /><Badge className='mt-2 bg-secondary'>{createProject.description.length}/{characterLimit}</Badge>
              </Form.Group> 
                       
              <Form.Label className="mb-3">GitURL</Form.Label>
              <Form.Control type="text" placeholder="https://gitlab.com/brukernavn/prosjektnavn"  onChange={handleChange1} name="gitUrl" />
                       
            <Form.Group className="mb-3">
              <Form.Label>Bilder</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="imageUrls" placeholder="Legg til en link" />
                <Button variant="secondary" onClick={handleAddImage}>Add</Button>
              </InputGroup>
              <ul>
                {createProject.imageUrls.map((url, index) => (
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
                {createProject.NeededSkills.map((skill, index) => (
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
    </div>
  );
}

export default CreateProject