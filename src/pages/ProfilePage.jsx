import { React, useEffect } from 'react'
import keycloak from '../keycloak'
import { Button, Form, Alert, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {  setUpdated } from '../reduxParts/userReducer';
import  ProfileInfo  from '../components/Profile/ProfileInfo'
import { setSearchShowFalse } from '../reduxParts/searchReducer';
import { NavLink } from "react-router-dom";
import SettingsSVG from '../components/Profile/SettingsSVG';
import BackArrowSVG from './BackArrowSVG';
import { getContributorProjectsAsync } from '../reduxParts/userProjectsReducer';
import { getUserAsync } from '../reduxParts/userReducer';
import './IconAnimations.css'


const ProfilePage =() => {
    const user = useSelector((state) => state.user)
    const contributorProjects = useSelector((state => state.userProjects))
    const projects = useSelector((state => state.banners.project))

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getContributorProjectsAsync(user.id))
        dispatch(setSearchShowFalse())
    },[])

    const tokenLog = () => {
        console.log("cons",contributorProjects)
        console.log("projects",projects)

        //console.log(keycloak.token)
    }
    const tokenParsed = () => {
        console.log(keycloak.tokenParsed)
    }

    return (
        <div style={{ backgroundColor: '#EEEEE', fontFamily: 'Arial, sans-serif',  }}>
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
            <Container>
                <div>
                    <h1 className="mr-1 p-3">Din Profil</h1>
                    <div style={{backgroundColor:'#000000', height:'2px', width:'97%', marginLeft:'15px', marginBottom:'10px'}}></div>
                </div>
            <div className="container mt-5 p-3 rounded" style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#F8F9FA'}}>
                <NavLink to="/"><BackArrowSVG className="backarrow"/></NavLink>
                <NavLink to="/EditProfilePage" onClick={() => dispatch(setUpdated(false))} >
                    <SettingsSVG style={{float:'right'}} className="settings"/>
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
            </div>
            </Container>
        </div>
        
        )
}

export default ProfilePage