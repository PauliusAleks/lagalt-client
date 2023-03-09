import React from 'react'
import keycloak from "../keycloak";

function ProfilePage() {
  function handleLogin() {
    keycloak.login()
}
function handleLogout() {
    keycloak.logout()
}

function handleLogToken() {
    console.log("KC Token", keycloak.token)
    console.log("KC TokenParsed", keycloak.tokenParsed)
    console.log("KC Auth", keycloak.authenticated)
}

return (
    <div className="homepage">
        <h3>WELCOME!!!</h3>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleLogToken}>Token</button>
    </div>
)
}

export default ProfilePage