import keycloak from "../../keycloak"
import { NavLink } from "react-router-dom"
import { ProgressBar, Container, Row, Col } from "react-bootstrap"
import { Figure } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getProjectBannersAsync } from '../../reduxParts/projectReducer';
import { useState } from "react"

const ProjectBanner = () => {
    const [ projects, setProjects] = useState([])
    const project = useSelector((state) => state.project)
    const dispatch = useDispatch()
    

    

    //Dummy data
    var test = ["Project 1","Project 2","Project 3","Project 4","Project 5","Project 6","Project 7","Project 8","Project 9","Project 10","Project 11","Project 12"]

    var image = "https://picsum.photos/200"

    var skills = test.map(function(skill) {
        return (
            <li>{skill}</li>
        )
    })
    //End Dummy data

    const handleGetProjects = async () => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/projects/getProjectBanners`)
        if(response.ok){
            const result = response.json()
            return result;
        } 
        
        //dispatch(getProjectBannersAsync())    
    }



    let testProject = Object.values(projects).map(project => {
        setProjects(handleGetProjects)
        console.log(projects)
        return (
            <Container fluid="p-2 m-3 bg-light border border-dark rounded">
                <Row class="d-flex flex-row">
                    <Col>
                        <Figure> 
                            <img class="figure-img img-fluid rounded" alt="Project image"src={image}/>
                        </Figure>
                    </Col>
                    <Col>
                     {!keycloak.authenticated && <h1>{"title"}</h1>}  
                     {keycloak.authenticated && <NavLink to="/project"><h1>{"title"}</h1></NavLink>}
                    </Col>
                    <Col> 
                        <p class="projectDescription">lalala</p>
                    </Col>
                    <Col >
                        <ul class="mr-5 d-flex">{skills}</ul>
                    </Col>
                    <Col>
                        <ProgressBar animated now={45} label={`${"status"}`} />
                    </Col>
                </Row>
            </Container>
        );
    });

    return (
        <div>
                {testProject}
        </div>
    )
}
export default ProjectBanner