import React from "react";
import keycloak from "../../keycloak";
import { Button } from "react-bootstrap";
import { setTrue } from '../../reduxParts/loggedInReducer'
import { useDispatch, useSelector } from "react-redux";
function Actions() {

  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.loggedIn)

    function handleLogin() {
        dispatch(setTrue())
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