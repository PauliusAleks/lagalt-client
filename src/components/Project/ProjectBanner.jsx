import keycloak from "../../keycloak"
import { NavLink } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getProjectBannersAsync } from '../../reduxParts/projectReducer';
import { useEffect } from "react"
import { PROGRESS } from "../../const/progress"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProjectBanner = () => {
    const projects = useSelector((state) => state.banners)
    const category = useSelector((state) => state.category)
    const search = useSelector((state) => state.search)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProjectBannersAsync())
    })
    
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

        let skillsTest = project.neededSkillsName.map((skill, key) => {
            return (
                <div class="p-1 d-inline">
                <Button variant="secondary" size="sm" disabled>
                    {skill}
                </Button>
                </div>
            )
        })
        if (project.name.toLowerCase().includes(search.text.toLowerCase()) || search === "") {
            if (project.category === category || category === "All" || category === "Choose category") {
                return (
                    <Container fluid="p-3 m-3 bg-light border border-2 border-dark rounded">
                        <Row class="d-flex flex-row p-3">
                            <Col xs={6} md={2}>
                                {project.bannerImage === null ?
                                    <div class="p-2">
                                        <img class="img-fluid rounded" alt="Project"
                                        src="/templateImage.jpg" />
                                    </div>
                                    :
                                    <div class="p-2">
                                        <img class="figure-img img-fluid rounded" alt="Project"
                                        src={project.bannerImage} />
                                    </div>
                                    }
                            </Col>
                            <Col>
                                {!keycloak.authenticated && 
                                    <div>
                                        <h2 class="p-2">{project.name}</h2>
                                        <p class="lead p-2">{project.category}</p>
                                    </div>}  
                                {keycloak.authenticated && 
                                    <NavLink to="/project" style={{ textDecoration: 'none', color: 'black' }}>
                                        <h2 class="p-2">{project.name}</h2>
                                        <p class="lead p-2">{project.category}</p>
                                    </NavLink>}
                            </Col>
                            <Col> 
                                <p class="p-2">{project.description}</p>
                            </Col>
                            <Col>
                                <div class="p-2">{skillsTest}</div>
                            </Col>
                            <Col xs={3} md={1}>
                                <div class="p-2">
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
        }
    return <> </>
});
    

    return (
        <div>
                {testProject}
        </div>
    )
}
export default ProjectBanner