import React from "react";
import { useEffect } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { setSearchShowFalse } from '../reduxParts/searchReducer';
import { useDispatch, useSelector } from 'react-redux';
import { PROGRESS } from "../const/progress";
import { Carousel } from "react-bootstrap";
import ApplyProject from "../components/Project/ApplyProject";
import ProjectSkills from "../components/Project/ProjectSkills";

function ProjectPage() {
    const project = useSelector((state) => state.project)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setSearchShowFalse())
    })

    let images = project.imageUrls.map((image, key) => {
        if(project.imageUrls.length > 0) {
            return (
                <div style={{
                    flex:'0 0 100%',
                    padding:'24px',
                    borderRadius:'8px',
                    scrollSnapAlign:'start'}}>
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

    return (

        <div className="p-2" style={{fontFamily: 'Arial, sans-serif'}} >
            <NavLink to="/">Tilbake</NavLink>
            <div className="p-2" style={{float:'right'}}>
                <ApplyProject/>
            </div>
            <div className="p-3">
                <h1 className="text-center p-2">{project.name}</h1>
                <ProgressBar variant="info" label={project.progress} now={progress} max={4}/>
                <h5 className="p-4">Kategori: {project.category} </h5>
                {project.imageUrls.length > 0 && 
                <div style={{padding: '0px', margin:'0px', boxSizing:'border-box'}}>
                    <div style={{display:'flex',
                     overflowX:'scroll',
                      padding:'24px',
                       width:'300px',
                        height:'400px',
                        scrollSnapType:'x mandatory',
                        scrollPadding:'24px',
                        borderRadius:'8px',
                        gap:'12px',
                        margin:'2rem auto'}}>{images}</div>
                        </div>}
                <h4 className="p-2">Ferdigheter vi trenger:</h4>
                <div className="p-2"><ProjectSkills/></div>
                <h3 className="p-2">Om prosjektet:</h3>
                <p className="p-2">{project.description}</p>
                <h3 className="p-2">GitURL:</h3>
                <a href={project.gitURL} className="p-2">{project.gitURL}</a>
            </div>
        </div>
    )
}

export default ProjectPage