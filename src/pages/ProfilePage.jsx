import { React, useState } from 'react'
import keycloak from '../keycloak'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProjectAsync, getProjectBannersAsync } from '../reduxParts/projectReducer';

function ProfilePage() {
    const [ projects, setProjects] = useState([])
    const project = useSelector((state) => state.project)
    const dispatch = useDispatch();
    
    function handleLogout() {
        keycloak.logout()
    }

    function tokenLog() {
        keycloak.token()
    }
    function tokenParsed() {
        keycloak.tokenParsed()
    }
    const handleGetProjects = async () => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/projects/getProjectBanners`)
        if(response.ok){
            const result = response.json()
            return result;
        } 

        //dispatch(getProjectBannersAsync())    
    }
    const handleShowProjects = () => {
        setProjects(handleGetProjects)
        console.log(projects)
    }
    

    return (
        <>
        <div class="container">
            <Form>
                <div class="form-check form-switch form-check-inline">
                    <input type="checkbox" id="hidden" class="form-check-input" />
                    <label for="hidden" class="form-check-label">Hidden</label>
                </div>
                <Button onClick={handleLogout}>Logg ut</Button>
                <Button onClick={tokenLog}>Token</Button>
                <Button onClick={tokenParsed}>Token Parsed</Button>
                <Button onClick={handleGetProjects}>Prosjekter </Button>
                <Button onClick={handleShowProjects}>Show </Button>
            </Form>
            <p>{project.name}</p>
        </div>
        
        </>
        )
}

export default ProfilePage