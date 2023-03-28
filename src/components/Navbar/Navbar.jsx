import React from "react";
import keycloak from "../../keycloak";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import Actions from "./Actions";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './Navbar.css'
import ChatIconSVG from "../Chat/ChatIconSVG";
import { Button } from 'react-bootstrap';
import { setTrue } from '../../reduxParts/loggedInReducer'
import { getUserAsync, setUser } from "../../reduxParts/userReducer";
import '../Chat/ChatIcon.css'
import { storageRead } from "../../utils/storage";

const NavbarHeader = () => {
    const dispatch = useDispatch()
    const search = useSelector((state) => state.search)
    const user = useSelector((state) => state.user)
    
    return(
       <div className="sticky-top">
        <div className= "d-flex justify-content-between align-items-center p-3 sticky-top" style={{
            backgroundColor: '#449DD1',
            fontFamily: 'Arial, sans-serif',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            height:'110px',
            }}>    
            <Logo />
            {search.show === true && <Searchbar /> }
            {!keycloak.authenticated && <Actions />}
            {keycloak.authenticated && 
                <NavLink to="/profile" onClick={() => dispatch(setUser(storageRead('user')))} className="link-dark" style={{ padding: '16px',
                textDecoration: 'none',
                color: '#393E46',
                textAlign: 'center'}}>
                    {!user.isHidden &&
                    <div>
                    <div className="profileImage">
                    <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" 
                    alt="..." 
                    width="50"
                    className="rounded-circle border border-2 border-dark"/>
                    </div>
                    <h4>{keycloak.tokenParsed.preferred_username}</h4>
                    </div>}
                    {user.isHidden &&
                    <div >
                    <div className="profileImage">
                        <img src="https://icon-library.com/images/incognito-icon/incognito-icon-19.jpg" 
                        alt="..." 
                        width="50"
                        className="rounded-circle border border-2 border-dark"/>
                    </div>
                    <h4>{keycloak.tokenParsed.preferred_username}</h4>
                    </div>}
                </NavLink>}      
             </div>
             {/* <div class="custom-shape-divider-top-1679663728">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div> */}
             {/* <div class="custom-shape-divider-top-1679594416">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
            </svg>
            </div> */}
            </div>
    )
}
export default NavbarHeader