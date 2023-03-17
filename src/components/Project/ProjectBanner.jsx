import keycloak from "../../keycloak"
import { NavLink } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Figure } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getProjectBannersAsync } from '../../reduxParts/projectReducer';
import { useEffect } from "react"
import { PROGRESS } from "../../const/progress"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProjectBanner = () => {
    const projects = useSelector((state) => state.banners)
    const category = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProjectBannersAsync())
    }, [])
    
    let testProject = projects.project.map(project => {
        //if stalled progress equal to 0
        let progress = 0;
        if (project.progress === PROGRESS.founding) {
            progress = 1
        } else if (project.progress === PROGRESS.inProgress) {
            progress = 2
        } else if (project.progress === PROGRESS.completed) {
            progress = 4
        }

        let skillsTest = project.neededSkillsName.map((skill) => {
            return (
                <div class="p-2 d-inline">
                <Button variant="secondary" size="sm" disabled>
                    {skill}
                </Button>
                </div>
            )
        })

        let skills = project.neededSkillsName.map((skill,key) => {
            return (
                <li key={key}> {`${skill}`} </li>
            )
        })
        if (project.category === category || category === "All" || category === "Choose category") {
            return (
                <Container fluid="p-3 m-3 bg-light border border-dark rounded">
                    <Row class="d-flex flex-row p-3">
                        <Col xs={6} md={2}>
                            {project.bannerImage === null ? 
                                <Figure> 
                                    <img class="figure-img img-fluid rounded" 
                                    alt="Project"
                                    src="/templateImage.jpg" />
                                </Figure> :
                                <Figure> 
                                    <img class="figure-img img-fluid rounded" 
                                    alt="Project"
                                    src={project.bannerImage} />
                                </Figure>}
                        </Col>
                        <Col>
                        {!keycloak.authenticated && <h2 class="p-2">{project.name}</h2>}  
                        {keycloak.authenticated && <NavLink to="/project"><h2 class="p-2">{project.name}</h2></NavLink>}
                        <p class="lead">{project.category}</p>
                        </Col>
                        <Col> 
                            <p class="p-2">{project.description}</p>
                        </Col>
                        <Col >
                            <ul class="p-2 mr-5 d-flex list-unstyled">{skillsTest}</ul>
                        </Col>
                        <Col xs={6} md={1}>
                            <div style={{ width: 70, height: 70 }}>
                            <CircularProgressbar value={progress} maxValue={4} 
                            text={`${project.progress}`} 
                            styles={buildStyles({
                                    textSize: '10px', 
                                    pathColor: `rgba(62, 152, 199, )`,
                                    textColor: '',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',})} />
                            
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            );
        }
    });

    return (
        <div>
                {testProject}
        </div>
    )
}
export default ProjectBanner