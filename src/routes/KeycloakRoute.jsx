import { Navigate } from "react-router-dom";
import keycloak from "../keycloak";

function KeycloakRoute({ children, role, redirectTo = "/" }) {
  
  if (!keycloak.authenticated) {
    console.warn("user not authenticated");
    return <Navigate replace to={redirectTo} />;
  }
  
  if (keycloak.hasRealmRole(role)) {
    console.warn("user granted access");
    return <>{children}</>;
  }else{
    console.warn("user not unauthorized");
    return <Navigate replace to={redirectTo} />;
  }
}

export default KeycloakRoute;
