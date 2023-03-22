import { React, useEffect, useState } from 'react'
import keycloak from '../keycloak'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeIsHidden, checkForUserAsync, getUserAsync, loginUserAsync, createUserAsync } from '../reduxParts/userReducer';
import  ProfileInfo  from '../components/Profile/ProfileInfo'
import { setSearchShowFalse } from '../reduxParts/searchReducer';
import CreateProject from '../components/Project/CreateProject';
import { NavLink } from "react-router-dom";
import SettingsSVG from '../components/Profile/SettingsSVG';
// import Modal from 'react-bootstrap/Modal';


function ProfilePage() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setSearchShowFalse())
    })

    
    function handleLogout() {
        keycloak.logout()
    }

    function tokenLog() {
        console.log(keycloak.token)
    }
    function tokenParsed() {
        console.log(keycloak.tokenParsed)
    }
    const handleGetUser = () => {
        dispatch(getUserAsync(keycloak.tokenParsed.preferred_username))
    }
    const handleIsHidden = () =>  {
        dispatch(changeIsHidden())
    }
    const handlePostUser = () => {
            dispatch(createUserAsync(keycloak.tokenParsed))
    }

    const handleEditProfile = () => {
        
    }

    return (
        <>
        <div className="container">
            <Form>
                <div className="form-check form-switch form-check-inline">
                    <input 
                        type="checkbox" 
                        id="hidden" 
                        class="form-check-input" 
                        checked={!user.isHidden} 
                        onChange={handleIsHidden}/>
                    <label for="hidden" class="form-check-label">Offentlig/Privat</label>
                </div>
                <div style={{float:'right'}}>
                    <Button onClick={handleLogout}>Logg ut</Button>
                    <Button onClick={tokenLog}>Token</Button>
                    <Button onClick={tokenParsed}>Token Parsed</Button>
                    <Button onClick={handleGetUser}>Fetch user</Button>
                    <Button onClick={handlePostUser}>Post user</Button>
                </div>
                
            </Form>
            <ProfileInfo user={user}></ProfileInfo>
            <CreateProject />
            <NavLink to="/EditProfilePage">
                <Button style={{float:'right'}} onClick={handleEditProfile}><SettingsSVG/></Button>

            </NavLink>
        </div>
        
        </>
        )
}

export default ProfilePage