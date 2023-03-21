import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, InputGroup, Form } from 'react-bootstrap'

const EditProfilePage = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();


  return (
    <div>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
        <Form.Control
          value={user.preferred_username}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  )
}

export default EditProfilePage



