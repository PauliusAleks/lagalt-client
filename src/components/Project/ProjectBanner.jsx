import keycloak from "../../keycloak"
import { NavLink } from "react-router-dom"
import { ProgressBar, Container, Row, Col } from "react-bootstrap"
import { Figure } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getProjectBannersAsync } from '../../reduxParts/projectReducer';
import { useEffect, useState } from "react"
import { PROGRESS } from "../../const/progress"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProjectBanner.css'

const ProjectBanner = () => {
    const projects = useSelector((state) => state.banner)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProjectBannersAsync())
        console.log(projects)
    }, [])
    


    let testProject = projects.project.map(project => {
        let progress = 0;
        if (project.progress === PROGRESS.founding) {
            progress = 1
        } else if (project.progress === PROGRESS.inProgress) {
            progress = 2
        } else if (project.progress === PROGRESS.stalled) {
            progress = 0
        } else if (project.progress === PROGRESS.completed) {
            progress = 4
        }

        let skills = project.neededSkillsName.map((skill,key) => {
            return (
                <li key={key}> {` ${skill}`} </li>
            )
        })

        return (
            <Container fluid="p-2 m-3 bg-light border border-dark rounded">
                <Row class="d-flex flex-row">
                    <Col>
                        <Figure> 
                            <img class="figure-img img-fluid rounded" alt="Project image"src={project.bannerImage}/>
                        </Figure>
                    </Col>
                    <Col>
                     {!keycloak.authenticated && <h1>{project.name}</h1>}  
                     {keycloak.authenticated && <NavLink to="/project"><h1>{project.name}</h1></NavLink>}
                    </Col>
                    <Col> 
                        <p class="projectDescription">{project.description}</p>
                    </Col>
                    <Col >
                        <ul class="mr-5 d-flex list-unstyled">{skills}</ul>
                    </Col>
                    <Col>
                        <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={progress} maxValue={4} text={`${project.progress}`} 
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
    });

    return (
        <div>
                {testProject}
        </div>
    )
}
export default ProjectBanner