import React from 'react'
import {  Button } from "react-bootstrap"
import UserSkills from './UserSkills'
import { useSelector, useDispatch } from 'react-redux'
import ProjectBanner from '../Project/ProjectBanner'


const ProfileInfo = ({user, contributorProjects}) => {
  return (
    <div className="p-2">
        <h1>{user.firstName} {user.lastName}</h1>
        <h5 style= {{paddingTop:30}}>E-post: {user.email}</h5>
        <h5 style= {{paddingTop:30}}>Beskrivelse</h5>
            <p style= {{paddingTop:10}}>
                {user.portfolio}
            </p>
        <h5 style= {{paddingTop:30}}>
            Mine ferdigheter
        </h5>
            <UserSkills/>
        <h5 style= {{paddingTop:40}}>
            Tidligere prosjekter
        </h5>
        <div>
            {/*<ProjectBanner projects={contributorProjects}/>*/}
            
        </div>
    </div>
  )
}

export default ProfileInfo