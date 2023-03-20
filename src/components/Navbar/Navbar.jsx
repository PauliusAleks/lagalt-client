import React from "react";
import keycloak from "../../keycloak";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import Actions from "./Actions";
import { NavLink } from "react-router-dom";
import FilterSearch from "./FilterSearch";
import { useSelector } from "react-redux";

const NavbarHeader = () => {
    const search = useSelector((state) => state.search)
    console.log("Navbar check if authenticated", keycloak.authenticated)
    console.log("navbar check token", keycloak.token)
    return(
        <div className="navbar" class="d-flex justify-content-between bg-secondary p-3 sticky-top border-bottom border-3">
            <Logo />
            <FilterSearch />
            {search.show === true && <Searchbar /> }
            {!keycloak.authenticated && <Actions />}  
            {keycloak.authenticated && <NavLink to="/profile" style={{ padding: '16px' }}>
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" alt="..." width="50"class="rounded-circle"/>
                </NavLink>}
            
        </div>

    )
}
export default NavbarHeader