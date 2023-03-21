import React from 'react'
import {  Button } from "react-bootstrap"
import UserSkills from './UserSkills'

const ProfileInfo = ({user}) => {

  return (
    <div>
        <h1>{user.firstName} {user.lastName}</h1>
        <h5 style= {{paddingTop:30}}>E-post: {user.email}</h5>
        <h5 style= {{paddingTop:30}}>Beskrivelse</h5>
        
        <p style= {{paddingTop:10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <h5 style= {{paddingTop:30}}>
            Mine skills
        </h5>
            <UserSkills/>
        <h5 style= {{paddingTop:40}}>
            Tidligere prosjekter
        </h5>
        <p>
            Insert projects here...
        </p>
    </div>
  )
}

export default ProfileInfo