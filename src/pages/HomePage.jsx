import React from "react";
import { useEffect } from "react";
import ProjectBanner from "../components/Project/ProjectBanner";
import CategoryDropdown from "../components/Project/CategoryDropdown";
import { setSearchShowTrue } from "../reduxParts/searchReducer";
import { useDispatch } from "react-redux";
import keycloak from "../keycloak"
import { getUserAsync, createUserAsync, checkForUserAsync } from '../reduxParts/userReducer';
import CreateProject from '../components/Project/CreateProject';


function ProjectBannerPage() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setSearchShowTrue())
        if(keycloak.authenticated) {
            const checkError =  dispatch(checkForUserAsync(keycloak.tokenParsed.preferred_username));
            
            if(!checkError.payload) {
                dispatch(getUserAsync(keycloak.tokenParsed.preferred_username))
            }
            if(keycloak.preferred_username === undefined){
                console.log()
            }
            else {   
                console.log("yeah")
                if(checkError.payload) {
                    dispatch(createUserAsync(keycloak.tokenParsed))
                }
            }
        }
    })


    return (
        <div className="projectPage" style={{fontFamily: 'Arial, sans-serif',  backgroundColor: '#c7c7c7'}}>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                <h1 className="mr-1 p-3">Prosjektoversikt</h1>
                {keycloak.authenticated &&
                    <CreateProject />
                }</div>
                <div className="ml-auto p-3">
                <CategoryDropdown/>
                </div>
            </div>
            <ProjectBanner />
        </div>
    )
}

export default ProjectBannerPage