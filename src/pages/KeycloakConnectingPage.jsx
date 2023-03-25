import React from 'react'
import { Spinner } from 'react-bootstrap';

function KeycloakConnectingPage() {
 

return (
    <div className="text-center" style={{paddingTop:'200px'}}>
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