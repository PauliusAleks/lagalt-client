import { React, useEffect, useState } from 'react'
import keycloak from '../keycloak'
import { Button, Form, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeIsHidden, checkForUserAsync, getUserAsync, loginUserAsync, createUserAsync, setUpdated } from '../reduxParts/userReducer';
import  ProfileInfo  from '../components/Profile/ProfileInfo'
import { setSearchShowFalse } from '../reduxParts/searchReducer';
import { NavLink } from "react-router-dom";
import SettingsSVG from '../components/Profile/SettingsSVG';
import BackArrowSVG from './BackArrowSVG';
// import Modal from 'react-bootstrap/Modal';
import { getContributorProjectsAsync } from '../reduxParts/userProjectsReducer';


const ProfilePage =() => {
    const user = useSelector((state) => state.user)
    const contributorProjects = useSelector((state => state.userProjects.project))
    const projects = useSelector((state => state.banners.project))

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getContributorProjectsAsync(user.id))
        dispatch(setSearchShowFalse())
    },[])

    
    const handleLogout = () => {
        keycloak.logout()
    }

    const tokenLog = () => {
        console.log("cons",contributorProjects)
        console.log("projects",projects)

        //console.log(keycloak.token)
    }
    const tokenParsed = () => {
        console.log(keycloak.tokenParsed)
    }
    const handleEditProfile = () => {
        
    }

    return (
        <div style={{ backgroundColor: '#EEEEE', padding:'16px'}}>
        {user.updated &&
        <div className="d-flex justify-content-center p-3">
            <Alert variant="success" 
            onClose={() => dispatch(setUpdated(false))} 
            dismissible
            style={{maxWidth: '500px', alignContent: 'center'}}>
              <Alert.Heading>Profil oppdatert!</Alert.Heading>
              <p>
                Gratulerer profilen din har blitt oppdatert!
                Se nedenfor for å se den flotte beskrivelsen din og alle skillsene du nå har lagt til!
              </p>
            </Alert>
            </div>
            }
            <div className="container p-3 rounded" style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#F8F9FA'}}>
            <NavLink to="/"><BackArrowSVG/></NavLink>
            <NavLink to="/EditProfilePage" onClick={() => dispatch(setUpdated(false))} >
                    <Button className="rounded-circle" variant="light" style={{ alignItems:'center',
                    float:'right',
                    width:'60px',
                    height:'60px',
                    padding: '0px',
                    marginLeft: '30px'}}><SettingsSVG/></Button>
                </NavLink>
                <Form>
                    
                    <div style={{float:'right'}}>
                        <Button onClick={tokenLog}>Token</Button>
                        <Button onClick={tokenParsed}>Token Parsed</Button>
                    </div>
                    
                </Form>
                {user.isHidden && 
                <img src="https://icon-library.com/images/incognito-icon/incognito-icon-19.jpg"
                alt="privat" width="200" className="rounded-circle"/>
                    }
                
                {!user.isHidden && 
                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" 
                alt="offentlig" width="200" className="rounded-circle"/>}
               
                <ProfileInfo user={user} contributorProjects={contributorProjects}></ProfileInfo>
                <div style={{marginBottom:'40px'}}>
                    <Button variant="danger" style={{float:'right'}} onClick={handleLogout}>Logg ut</Button>
                </div>
            </div>
        </div>
        
        )
}

export default ProfilePage