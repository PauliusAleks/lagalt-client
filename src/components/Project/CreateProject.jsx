import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { setProject } from '../../reduxParts/projectReducer';

function CreateProject() {
  const [show, setShow] = useState(false);
  const project = useSelector((state) => state.project)
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    // handle form submission
    console.log('Submitted image URLs:', project.ImageUrls);
    console.log('Submitted skills:', project.NeededSkills)
    handleClose();
  };
  const handleChange = (event) => {
    if (event.target.id === 'ImageUrls'){
      dispatch(setProject({...project, ImageUrls: event.target.value}));
    } else if (event.target.id === 'NeededSkills') {
      dispatch(setProject({...project, NeededSkills: event.target.value}));
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Opprett prosjekt
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opprett prosjekt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Tittel *</Form.Label>
              <Form.Control
                type="title"
                placeholder="Prosjekttittel"
              />
              <Form.Label className="mt-3">Kategori *</Form.Label>
              <Form.Select className="mb-3 mt-2">
                <option hidden>Velg en kategori</option>
                <option value="1">Musikk</option>
                <option value="2">Film</option>
                <option value="3">SpillUtvikling</option>
                <option value="4">NettUtvikling</option>
              </Form.Select>

              <Form.Label>Status *</Form.Label>
              <Form.Select className="mb-3 mt-2">
                <option hidden>Velg prosjekt status</option>
                <option value="1">Utsatt</option>
                <option value="2">Oppstart</option>
                <option value="3">Under Utvikling</option>
                <option value="4">Ferdig</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Beskrivelse *</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Hva går prosjektet ut på? 
              Hva ser du etter? ..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput2">
              <Form.Label>GitURL</Form.Label>
              <Form.Control type="text" placeholder="https://gitlab.com/brukernavn/prosjektnavn" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput3">
              <Form.Label>Bilder</Form.Label>
              <Form.Control type="text" value={project.ImageUrls} onChange={handleChange} placeholder="Separer med komma (link, link, link)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput4">
              <Form.Label>Skills prosjektet ser etter</Form.Label>
              <Form.Control type="text" value={project.NeededSkills} onChange={handleChange} placeholder="Java, Fifa, C#, Photoshop"/>
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