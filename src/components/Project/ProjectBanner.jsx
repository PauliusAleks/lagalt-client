import keycloak from "../../keycloak"
import { NavLink } from "react-router-dom"
import { ProgressBar, Container, Row, Col } from "react-bootstrap"
import { Figure } from "react-bootstrap"

const ProjectBanner = () => {

    var test = ["Project 1","Project 2","Project 3","Project 4","Project 5","Project 6","Project 7","Project 8","Project 9","Project 10","Project 11","Project 12"]

    var image = "https://picsum.photos/200"

    var skills = test.map(function(skill) {
        return (
            <li>{skill}</li>
        )
    })

    var projects = test.map(function(project) {
        return (
            <Container fluid="p-2 m-3 bg-light border border-dark rounded">
                <Row class="d-flex flex-row">
                    <Col>
                        <Figure> 
                            <img class="figure-img img-fluid rounded" alt="Project image"src={image}/>
                        </Figure>
                    </Col>
                    <Col>
                     {!keycloak.authenticated && <h1>{project}</h1>}  
                     {keycloak.authenticated && <NavLink to="/project"><h1>{project}</h1></NavLink>}
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
                {projects}
        </div>
    )
}
export default ProjectBanner