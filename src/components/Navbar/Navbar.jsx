import React from "react";
import keycloak from "../../keycloak";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import Actions from "./Actions";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const NavbarHeader = () => {
    const search = useSelector((state) => state.search)
    
    return(
        <div className="d-flex justify-content-between bg-secondary p-3 sticky-top border-bottom border-3">
            <Logo />
            {search.show === true && <Searchbar /> }
            {!keycloak.authenticated && <Actions />}  
            {/* {keycloak.authenticated && <NavLink to="/chat" style={{padding: '20px'}}><Button>Chat</Button></NavLink>} */}
            {keycloak.authenticated && <NavLink to="/profile" style={{ padding: '16px' }}>
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" alt="..." width="50"className="rounded-circle"/>
                </NavLink>}
            
        </div>

    )
}
export default NavbarHeader