import React from 'react'
import UserSkills from './UserSkills'


const ViewedProfileInfo = ({user}) => {
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
            <b>{user.username} sine ferdigheter</b>
        </h5>
            <UserSkills/>
    </div>
  )
}

export default ViewedProfileInfo