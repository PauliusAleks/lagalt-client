import React from 'react'
import keycloak from '../keycloak'
import { Button, Form } from 'react-bootstrap'


function ProfilePage() {

    function handleLogout() {
        keycloak.logout()
    }

    return (
        <>
        <div class="container">
            <Form>
                <div class="form-check form-switch form-check-inline">
                    <input type="checkbox" id="hidden" class="form-check-input" />
                    <label for="hidden" class="form-check-label">Hidden</label>
                </div>
                <Button onClick={handleLogout}>Logg ut</Button>
            </Form>
        </div>
        
        </>
        )
}

export default ProfilePage