import React from "react";
import { useEffect, useState } from "react";
import { Button, ProgressBar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { setSearchShowFalse } from '../reduxParts/searchReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getViewedUserAsync } from "../reduxParts/viewedUserReducer";
import { PROGRESS } from "../const/progress";
import ApplyProject from "../components/Project/ApplyProject";
import ProjectSkills from "../components/Project/ProjectSkills";
import ImageArrowSVG from "./ImageArrowSVG";
import AdminProjectHandler from "../components/Project/AdminProjectHandler";
import BackArrowSVG from "./BackArrowSVG";
import ChatIconSVG from "../components/Chat/ChatIconSVG";
import '../components/Chat/ChatIcon.css'
import './ScrollBar.css'
import './IconAnimations.css'
import ApplicationHandler from "../components/Project/ApplicationHandler";

function ProjectPage() {
    const project = useSelector((state) => state.project)
    const user = useSelector((state) => state.user)

    const dispatch = useDispatch();

    const [scrollAmountLeft, setScrollAmountLeft] = useState(-500);
    const [scrollAmountRight, setScrollAmountRight] = useState(500);


    useEffect(()=> {
        dispatch(setSearchShowFalse())
    })

    const handleClickLeft = () => {
        let element = document.getElementById("MAIN")
        setScrollAmountLeft(scrollAmountLeft+(-500))
            if(scrollAmountRight >= 1000) {
                setScrollAmountRight(500)
            }
            
        element.scroll(scrollAmountLeft,0)
    }

    const handleClickRight = () => {
        let element = document.getElementById("MAIN")
        setScrollAmountRight(scrollAmountRight+500)
            if (scrollAmountLeft >= -1000) {
                setScrollAmountLeft(-500)
            }
            
        element.scroll(scrollAmountRight,0)
    }

    let contributors = project.contributors.map((contributor, key) => {
        return (
            <li><Button variant="light"><NavLink to="/viewedProfile" className="link-dark" style={{ height: '12px',
            textDecoration: 'none',
            color: '#393E46',
            }} onClick={() => dispatch(getViewedUserAsync(contributor))}><h4>{contributor}</h4></NavLink></Button></li>
        )
    })

    let images = project.imageUrls.map((image, key) => {
        if(project.imageUrls.length > 0) { 
            return (
                <div style={{
                    flex:'0 0 100%',
                    padding:'24px',
                    borderRadius:'8px',
                    scrollSnapAlign:'start',
                    }}>
                    <img
                    className="img-responsive center-block"
                    width={300} height={300}
                    src={image}
                    alt="project figure"
                    />
                </div>
            )
        }   
        else return <></>
    })

    //if stalled progress equal to 0
    let progress = 0;
    if (project.progress === PROGRESS.founding) {
        progress = 1
    } else if (project.progress === PROGRESS.inProgress) {
        progress = 2
    } else if (project.progress === PROGRESS.completed) {
        progress = 4
    }

    const checkProjectAdmin = () => {
        return project.admins.includes(user.username)
    }
    
    const checkProjectContributor = () => {
        return project.contributors.includes(user.username)
    }

    return (
        
        <div style={{ backgroundColor: '#EEEEEE', fontFamily: 'Arial, sans-serif',  height:'100vh', minHeight: '100vh'}}>
            <Container>
                <div>
                    <h1 className="mr-1 p-3">Prosjekt </h1> 
                    <div style={{backgroundColor:'#000000', height:'2px', width:'97%', marginLeft:'15px', marginBottom:'10px'}}></div>
                </div>
         <div className="container p-3 mt-5 rounded" style={{ backgroundColor: '#F8F9FA'}} >
            <NavLink to="/"><BackArrowSVG className="backarrow"/></NavLink>
         {!checkProjectAdmin(project.id) && !checkProjectContributor(project.id) &&
            <div className="p-2" style={{float:'right'}}>
                <ApplyProject/>
            </div>
            }
            {checkProjectContributor(project.id) && checkProjectContributor(project.id) &&
                <NavLink to="/chat" style={{padding: '20px', float:'right'}}><ChatIconSVG className="chat" /></NavLink>
            }
            <div className="p-2" style={{float:'right'}}>
                {checkProjectAdmin(project.id) && (
                // <h4>Hei {user.username}, du er administrator!</h4>,
                <ApplicationHandler project={project}/>
                )}
            </div>
            <div className="p-3">
                <h1 className="text-center p-2">{project.name}</h1>
                <ProgressBar variant="info" label={project.progress} now={progress} max={4}/>
                <h5 className="p-4">Kategori: {project.category} </h5>
                {project.imageUrls.length > 0 && 
                
                <div style={{padding: '0px', margin:'0px', boxSizing:'border-box',}}>
                    <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Button variant="light" style={{float:'left', height:'50px', transform:'rotate(-180deg)'}} onClick={handleClickLeft}><ImageArrowSVG/></Button>
                                <div id="MAIN" className="scrollbar" style={{display:'flex',
                                overflowX:'scroll', padding:'24px',
                                width:'400px', height:'400px',
                                scrollSnapType:'x mandatory', scrollPadding:'24px',
                                borderRadius:'8px', gap:'12px', margin:'2rem auto' 
                                }}>{images}</div>
                        <Button variant="light" style={{float:'right', height:'50px'}} onClick={handleClickRight}><ImageArrowSVG /></Button>
                     </div>
                </div>
                }
                <h4 className="p-2">Ferdigheter vi trenger:</h4>
                <div className="p-2"><ProjectSkills/></div>
                <h3 className="p-2">Om prosjektet:</h3>
                <p className="p-2">{project.description}</p>
                <h3 className="pb-2">Contributors: </h3>
                    <ul style={{listStyleType: 'none'}}>{contributors}</ul>
                <h3 className="p-2">GitURL:</h3>
                <a href={project.gitURL} className="p-2">{project.gitURL}</a>
                <div className="p-2" style={{float:'right'}}>
                    {checkProjectAdmin(project.id) && (
                    <AdminProjectHandler/>
                    )}
                </div>
            </div>

        </div>
        </Container>
        </div>
    )
}

export default ProjectPage