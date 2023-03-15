import React from "react";
import keycloak from "../../keycloak";
import { Button } from "react-bootstrap";
function Actions() {

    function handleLogin() {
        keycloak.login()
    }

    function handleSearch() {

    }

    return(
      <div class="p-3">
          <Button size="lg" variant="outline-light" onClick={handleLogin}>Logg inn</Button>
        <div className="profile">
        </div>
      </div>
    );
}

export default Actions