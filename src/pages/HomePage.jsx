import React from "react";
import { useEffect, useState } from "react";
import ProjectBanner from "../components/Project/ProjectBanner";
import CategoryDropdown from "../components/Project/CategoryDropdown";
import { setSearchShowTrue } from "../reduxParts/searchReducer";
import { useSelector, useDispatch } from "react-redux";
import keycloak from "../keycloak"
import { getProjectBannersAsync } from "../reduxParts/projectBannersReducer";
import { getUserAsync, createUserAsync, checkForUserAsync, setUser } from '../reduxParts/userReducer';
import CreateProject from '../components/Project/CreateProject';
import { Container } from "react-bootstrap";
import './IconAnimations.css'
import { storageRead, storageSave } from "../utils/storage";


function ProjectBannerPage() {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.banners)
    const user = useSelector((state) => state.user)
    const userFound = useSelector((state)=> state.found)
    const isLoggedIn = keycloak.authenticated
    
    useEffect(() => {
        dispatch(setSearchShowTrue())
        dispatch(getProjectBannersAsync())
        //keycloak.logout()
        if(isLoggedIn) {
            if(storageRead('user') !== null){
                dispatch(setUser(storageRead('user')))
            } else {
                fetch(`https://lagaltapi.azurewebsites.net/api/users/userExists/${keycloak.tokenParsed.preferred_username}`)
                .then(async (response) => {
                    const exists = await response.json()
                    if(exists){ 
                        dispatch(getUserAsync(keycloak.tokenParsed.preferred_username))
                    } else {
                        dispatch(createUserAsync(keycloak.tokenParsed))
                    }
                                   
                 })  
            }                              
        }
        },[isLoggedIn])
        

    return (
        <div className="projectPage" style={{fontFamily: 'Arial, sans-serif',  backgroundColor: '#EEEEEE', zIndex:'-2'}}>
            <Container >
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                <h1 className="mr-1 p-3">Prosjektoversikt</h1>
                {keycloak.authenticated &&
                    <div className="mt-3">
                        <CreateProject user={user}/>
                    </div>
                }
                </div>
                <div className=" p-3">
                    <CategoryDropdown/>
                </div>
            </div>
            <div style={{backgroundColor:'#000000', height:'2px', width:'97%', marginLeft:'15px'}}></div>
                <ProjectBanner projects={projects}/>
            </Container>
        </div>
    )
}

export default ProjectBannerPage