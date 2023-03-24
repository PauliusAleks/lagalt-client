import keycloak from "../../keycloak"
import { NavLink } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getAdminProjectAsync } from '../../reduxParts/projectReducer';
import { PROGRESS } from "../../const/progress"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SkillCompare from "./SkillCompare";
import './BannerAnimation.css'



const ProjectBanner = ({projects}) => {
    const dispatch = useDispatch()
    //const projects = useSelector((state) => state.banners)
    const category = useSelector((state) => state.category)
    const search = useSelector((state) => state.search)
    const user = useSelector((state) => state.user)
    /*
    useEffect(()=> {
        dispatch(getProjectBannersAsync())
    },[])
    */

    let testProject = projects.project.map((project,key) => {
        //if stalled progress equal to 0
        let progress = 0;
        if (project.progress === PROGRESS.founding) {
            progress = 1
        } else if (project.progress === PROGRESS.inProgress) {
            progress = 2
        } else if (project.progress === PROGRESS.completed) {
            progress = 4
        }

        let skillsTest = project.neededSkills.map((skill, key) => {
            if (user.skills.includes(skill)) {
                return (
                    <div key={key} className="p-1 d-inline">
                        <Button className="mt-2" variant="success" size="sm" disabled>
                            {skill}
                        </Button>
                    </div>
                )
            }
            else {
                return (
                    <div key={key} className="p-1 d-inline">
                        <Button className="mt-2" variant="secondary" size="sm" disabled>
                            {skill}
                        </Button>
                    </div>
                )
            }
        })
        if (project.name.toLowerCase().includes(search.text.toLowerCase()) || search === "") {
            if (project.category === category || category === "Alle" || category === "Velg kategori") {
                return (
                    <Container key={key} className="banner" fluid="p-3 m-5 bg-light border border-2 border-grey rounded" style={{filter: 'drop-shadow(8px 8px 5px grey)', zIndex:'-1'}}>
                        <Row className="d-flex flex-row p-3" >
                            <Col xs={6} md={2} lg={2} xl={2} xxl={1} >
                                {project.bannerImage === null || project.bannerImage === "" || project.bannerImage.trim().includes(" ") ?
                                    <div className="p-2">
                                        <img className="img-fluid rounded" alt="Project"
                                        src="/templateImage.jpg" />
                                    </div>
                                    :
                                    <div className="p-2">
                                        <img className="figure-img img-fluid rounded" alt="Project"
                                        src={project.bannerImage} />
                                    </div>
                                    }
                            </Col>
                            <Col>
                                {!keycloak.authenticated && 
                                    <div>
                                        <h2 className="p-2">{project.name}</h2>
                                        <p className="lead p-2">{project.category}</p>
                                    </div>}  
                                {keycloak.authenticated && 
                                    <NavLink to="/project" onClick={() => dispatch(getAdminProjectAsync(project.id))} style={{ textDecoration: 'none', color: 'black' }}>
                                        <h2 className="p-2">{project.name}</h2>
                                        <p className="lead p-2">{project.category}</p>
                                    </NavLink>}
                            </Col>
                            <Col> 
                                <p className="p-2">{project.description}</p>
                            </Col>
                            <Col>
                                <div className="p-2 mt-2">{skillsTest}</div>
                            </Col>
                            {SkillCompare(project.neededSkills, user.skills) &&
                                <Col xs={2} md={2} lg={2} xl={2} xxl={1}>
                                    <h3 className="text-center text-success">Match!</h3>
                                <div className="p-2">
                                <CircularProgressbar value={progress} maxValue={4} 
                                text={`${project.progress}`} 
                                styles={buildStyles({
                                        textSize: '10px', 
                                        pathColor: `#228C22`,
                                        textColor: '#228C22',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#00FF00',})} />
                                </div>
                            </Col>
                            }
                            {!SkillCompare(project.neededSkills, user.skills) &&
                            <Col xs={2} md={2} lg={2} xl={2} xxl={1}>
                                <div className="p-2">
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
                            }
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