import React from "react";
import keycloak from "../../keycloak";
import Logo from "./Logo";
import Searchbar from "./searchbar/Searchbar";
import Actions from "./Actions";
import { NavLink } from "react-router-dom";
import { Figure } from "react-bootstrap";


const NavbarHeader = () => {

    return(
        <div className="navbar" class="d-flex justify-content-between bg-secondary p-3">
            <Logo />
            <Searchbar />
            {!keycloak.authenticated && <Actions />}  
            {keycloak.authenticated && <NavLink to="/profile">
            <img src="https://www.pngitem.com/pimgs/m/508-5087336_person-man-user-account-profile-employee-profile-template.png" alt="..." width="50"class="rounded-circle"/>
                </NavLink>}
            
        </div>

    )
}
export default NavbarHeader