import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Badge, Alert, CloseButton } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { updateUserAsync, changeIsHidden, setPortfolio, setUpdated } from '../reduxParts/userReducer';
import  ProfileInfo  from '../components/Profile/ProfileInfo'

const EditProfilePage = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const [inputText, setInputText] = useState("");
    const [characterLimit] = useState(1250);


    const handleChange = event => {
      setInputText(event.target.value);
      dispatch(setPortfolio(inputText))
      console.log(user.portfolio)
      //user.portfolio = event.target.value
    };

    const handleSubmit = () => {
      dispatch(setUpdated(true))
      dispatch(updateUserAsync(user))
      //console.log(user)
    }

    const handleIsHidden = () =>  {
      console.log(user.isHidden)
      //user.isHidden = !user.isHidden;
      dispatch(changeIsHidden())
    }

  return (
    <div className="p-3" style={{ backgroundColor: '#c7c7c7'}}>
      <div className="p-3 container rounded" style={{ backgroundColor: '#F8F9FA'}}>
        <div className="d-flex justify-content-end">
          <NavLink to="/profile">
            <CloseButton  />
          </NavLink>
        </div>
        <h1>Rediger {user.username}'s profil:</h1>
        <div className="p-3 text-center">
          <h4>Profil status:</h4>
          <div className="d-flex justify-content-center align-items-center">

            {user.isHidden &&
               <Button className='m-2' variant='danger'>Privat</Button>
            }
            {!user.isHidden &&
               <Button className='m-2' disabled variant='danger'>Privat</Button>
            }
            <div className="form-check form-switch ">
                      <input 
                          type="checkbox" 
                          id="hidden"
                          style={{ height: '30px', width: '60px'}}
                          className="form-check-input" 
                          checked={!user.isHidden} 
                          onChange={handleIsHidden}/>
            </div>
            {user.isHidden &&
               <Button className='m-2' variant='success' disabled>Offentlig</Button>
            }
            {!user.isHidden &&
               <Button className='m-2' variant='success'>Offentlig</Button>
            }
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h4>Beskrivelse:</h4>
            <Form.Control style={{width:'100%', height:'200px'}} 
              as="textarea"
              maxLength={characterLimit}
              onChange={handleChange}/>
            <Badge className='mt-2 bg-secondary'>{inputText.length}/{characterLimit}</Badge>
        </Form.Group>
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



