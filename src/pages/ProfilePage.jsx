import React from 'react'
import keycloak from '../keycloak'
import { Button } from 'react-bootstrap'


function ProfilePage() {

    function handleLogout() {
        keycloak.logout()
    }

    return (
        <Button onClick={handleLogout}>Logg ut</Button>
        )
}

export default ProfilePage