import React from "react";
import keycloak from "../../keycloak";
import { Button } from "react-bootstrap";
function Actions() {

    function handleLogin() {
        keycloak.login()
    }

    function handleLogout() {
        keycloak.logout()
    }

    return(
        <div class="p-3">
          <Button size="lg" variant="primary" onClick={handleLogin}>Logg inn</Button>
          <Button size="lg" variant="primary" onClick={handleLogout}>Logg ut</Button>
        <div className="profile">
        </div>
      </div>
    );
}

export default Actions