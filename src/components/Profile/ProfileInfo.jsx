import React from 'react'

const ProfileInfo = ({user}) => {
  return (
    <div>
        <h1>{user.firstName} {user.lastName}</h1>
        <h3>Epost: {user.email}</h3>
        <h4>{user.portfolio}</h4>
        <h4>{user.skills}</h4>
    </div>
  )
}

export default ProfileInfo