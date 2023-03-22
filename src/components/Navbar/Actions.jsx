import React from "react";
import keycloak from "../../keycloak";
import { Button } from "react-bootstrap";
function Actions() {

    function handleLogin() {
        keycloak.login()
    }
    
    return(
      <div className="p-3">
          <Button size="lg" variant="outline-dark" onClick={handleLogin}>Logg inn</Button>
        <div className="profile">
        </div>
      </div>
    );
}

export default Actions