import React from "react";
import keycloak from "../../keycloak";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { storageDelete } from "../../utils/storage";
function Actions() {

  const dispatch = useDispatch()

    function handleLogin() {
        storageDelete('user')
        keycloak.login()
        
    }
    
    return(
      <div className="p-3">
          <Button size="lg" variant="outline-light" onClick={handleLogin}>Logg inn</Button>
        <div className="profile">
        </div>
      </div>
    );
}

export default Actions