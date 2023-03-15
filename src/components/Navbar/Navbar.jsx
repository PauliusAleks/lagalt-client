import React from "react";
import keycloak from "../../keycloak";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import Actions from "./Actions";
import { NavLink } from "react-router-dom";


const NavbarHeader = () => {

    return(
        <div className="navbar" class="d-flex justify-content-between bg-secondary p-3">
            <Logo />
            <Searchbar />
            {!keycloak.authenticated && <Actions />}  
            {keycloak.authenticated && <NavLink to="/profile" style={{ padding: '16px' }}>
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" alt="..." width="50"class="rounded-circle"/>
                </NavLink>}
            
        </div>

    )
}
export default NavbarHeader