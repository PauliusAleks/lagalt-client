import React from 'react'
import { Spinner } from 'react-bootstrap';

function KeycloakConnectingPage() {
 

return (
    <div className="text-center pt-5">
        <h1>Connecting to keycloak ...</h1>
        <div className="p-5">
            <Spinner animation="grow" role="status">
            </Spinner>
            <Spinner animation="grow" role="status">
            </Spinner>
            <Spinner animation="grow" role="status">
            </Spinner>
        </div>
    </div>
)
}

export default KeycloakConnectingPage