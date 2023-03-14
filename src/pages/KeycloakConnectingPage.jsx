import React from 'react'
import keycloak from "../keycloak";
import { Spinner } from 'react-bootstrap';

function KeycloakConnectingPage() {
 

return (
    <div class="text-center pt-5">
        <h1>Connecting to keycloak ...</h1>
        <div class="p-5">
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