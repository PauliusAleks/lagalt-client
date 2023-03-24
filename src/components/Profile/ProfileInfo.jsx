import React from 'react'
import {  Button } from "react-bootstrap"
import UserSkills from './UserSkills'
import ProjectBanner from '../Project/ProjectBanner'
import keycloak from '../../keycloak'

const handleLogout = () => {
    keycloak.logout()
}

const ProfileInfo = ({user, contributorProjects}) => {
  return (
    <div className="p-2">
        <h1>{user.firstName} {user.lastName}</h1>
        <h5 style= {{paddingTop:30}}><b>E-post: </b></h5>
        <p>{user.email}</p>
        <h5 style= {{paddingTop:30}}><b>Beskrivelse</b></h5>
            <p>
                {user.portfolio}
            </p>
        <h5 style= {{paddingTop:30}}>
            <b>Mine ferdigheter</b>
        </h5>
            <UserSkills/>
        <div style={{marginBottom:'30px'}}>
            <Button variant="danger" style={{float:'right'}} onClick={handleLogout}>Logg ut</Button>
        </div> 
        <h2 style= {{paddingTop:40, display:'flex', justifyContent:'center'}}>
            <b>Tidligere prosjekter</b>
        </h2>
        
        <div>
            <ProjectBanner projects={contributorProjects}/>
        </div>
    </div>
  )
}

export default ProfileInfo