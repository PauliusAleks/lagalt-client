import React from "react";
import { useEffect } from "react";
import ProjectBanner from "../components/Project/ProjectBanner";
import CategoryDropdown from "../components/Project/CategoryDropdown";
import { setSearchShowTrue } from "../reduxParts/searchReducer";
import { useSelector, useDispatch } from "react-redux";
import keycloak from "../keycloak"
import { getProjectBannersAsync } from "../reduxParts/projectBannersReducer";
import { getUserAsync, createUserAsync, checkForUserAsync } from '../reduxParts/userReducer';
import CreateProject from '../components/Project/CreateProject';
import { Container } from "react-bootstrap";


function ProjectBannerPage() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(setSearchShowTrue())
        if(keycloak.authenticated) {
            const checkError =  dispatch(checkForUserAsync(keycloak.tokenParsed.preferred_username));
            checkError.then(error => {
                dispatch(getUserAsync(keycloak.tokenParsed.preferred_username))
                if(error.payload) {
                    dispatch(createUserAsync(keycloak.tokenParsed))
                }
            }) 
        }
    })
    const projects = useSelector((state) => state.banners)

    useEffect(()=> {
        dispatch(getProjectBannersAsync())
    },[])
    


    return (
        <div className="projectPage" style={{fontFamily: 'Arial, sans-serif',  backgroundColor: '#EEEEEE', zIndex:'-2'}}>
            <Container >
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                <h1 className="mr-1 p-3">Prosjektoversikt</h1>
                {keycloak.authenticated &&
                    <div className="mt-3">
                        <CreateProject />
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