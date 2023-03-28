import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Badge, CloseButton, InputGroup, ListGroup } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { updateUserAsync, setUser , setUpdated } from '../reduxParts/userReducer';
import { storageSave } from '../utils/storage';


const EditProfilePage = () => {
    const user = useSelector((state) => state.user)
    const [UserSkills, setUserSkills] = useState([])
    const dispatch = useDispatch();
    const [editUser, setEditUser] = useState(user);
    const [alreadyInList, setAlreadyInList] = useState(false);


    const [characterLimit] = useState(1250);

    useEffect(()=> {
      window.scrollTo(0, 0)
    })

    const handlePortfolioChange = event => {
      setEditUser({...editUser, portfolio:event.target.value})
    };


    const handleSubmit = () => {
      if(user !== editUser){
        dispatch(setUpdated(true))
      }
      storageSave('user',editUser)
      dispatch(setUser(editUser))
      dispatch(updateUserAsync(editUser))
    }


    const handleIsHidden = () =>  {
      setEditUser({...editUser, isHidden: !editUser.isHidden})
    }


    const handleChanges = (event) => {
      setAlreadyInList(false)
      setUserSkills(event.target.value);
    }


    const addSkillsToList = () => {
      if (UserSkills.trim() !== ""){
        if (editUser.skills.includes(UserSkills)){
          setAlreadyInList(true)
        } else {
          setEditUser({...editUser, skills: [...editUser.skills, UserSkills]});
          setUserSkills("");
          document.getElementById('Skills').value = "";
        }
       
      }
    }
   
    const handleRemoveItem = (event) => {
      setEditUser({...editUser, skills: editUser.skills.filter(sk=>sk !== event.target.id)})
    }
 
    const handleAddSkill = () => {
      addSkillsToList();
    }


  return (
    <div className="p-3" style={{ backgroundColor: '#EEF2F5', height:'100vh'}}>
      <div className="p-3 container rounded" style={{ backgroundColor: '#F8F9FA'}}>
        <div className="d-flex justify-content-end">
          <NavLink to="/profile">
            <CloseButton  />
          </NavLink>
        </div>
        <h1>Rediger {user.username} sin profil:</h1>
        <div className="p-3 text-center">
          <h4>Profilstatus:</h4>
          <div className="d-flex justify-content-center align-items-center">


            {editUser.isHidden &&
               <Button className='m-2' variant='danger'>Privat</Button>
            }
            {!editUser.isHidden &&
               <Button className='m-2' disabled variant='danger'>Privat</Button>
            }
            <div className="form-check form-switch ">
                      <input
                          type="checkbox"
                          id="hidden"
                          style={{ height: '30px', width: '60px'}}
                          className="form-check-input"
                          checked={!editUser.isHidden}
                          onChange={handleIsHidden}/>
            </div>
            {editUser.isHidden &&
               <Button className='m-2' variant='success' disabled>Offentlig</Button>
            }
            {!editUser.isHidden &&
               <Button className='m-2' variant='success'>Offentlig</Button>
            }
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h5>Beskrivelse:</h5>
            <Form.Control style={{width:'100%', height:'200px'}}
              as="textarea"
              defaultValue={editUser.portfolio}
              maxLength={characterLimit}
              onChange={handlePortfolioChange}/>
              {editUser.portfolio !== null && 
                 <Badge className='mt-2 bg-secondary'>{editUser.portfolio.length}/{characterLimit}</Badge>
              }
        </Form.Group>
        {alreadyInList &&
                <h5 style={{color:'red'}}>Du har allerede denne ferdigheten!</h5>}
        <InputGroup>
              <Form.Control type="text" id="Skills" onChange={handleChanges} placeholder="Legg til en ferdighet" />
              <Button variant="secondary" style={{float:'right'}} onClick={handleAddSkill}>Legg til</Button>
              </InputGroup>
              <ListGroup horizontal style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexWrap: "wrap"
              }}>
                {editUser.skills.map((skill, index) => (
                  <ListGroup.Item key={index} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                    {skill}<CloseButton id={skill} onClick={handleRemoveItem} style={{width:'5px', height:'5px'}} />
                  </ListGroup.Item>
                ))}
              </ListGroup>
           <div className="row">
            <div className="col">
            <NavLink to="/profile">
                <Button className='m-2' onClick={handleSubmit} style={{float:'right'}}>Lagre</Button>
              </NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}


export default EditProfilePage


