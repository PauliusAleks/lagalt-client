import React from 'react'
import {  Button } from "react-bootstrap"

const ProfileInfo = ({user}) => {

    let skillsTest = user.skills.map((skill) => {
        return (
            <div key={skill} class="p-1 d-inline">
            <Button key={skill} variant="secondary" size="sm" disabled>
                {skill}
            </Button>
            </div>
        )
    })

  return (
    <div>
        <h1>{user.firstName} {user.lastName}</h1>
        <h3>Epost: {user.email}</h3>
        <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </h6>
        <h5 style= {{paddingTop:30}}>
            Mine skills
        </h5>
        <h4>{skillsTest}</h4>
        <h3 style= {{paddingTop:40}}>
            Tidligere prosjekter
        </h3>
        <h6>
            Insert projects here...
        </h6>
    </div>
  )
}

export default ProfileInfo