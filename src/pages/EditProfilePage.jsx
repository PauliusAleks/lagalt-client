import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap'

const EditProfilePage = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();


  return (
    <div>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Beskrivelse</Form.Label>
              <Form.Control type="username" autoFocus value={user.portfolio} />
       </Form.Group>
    </div>

    
  )
}

export default EditProfilePage



