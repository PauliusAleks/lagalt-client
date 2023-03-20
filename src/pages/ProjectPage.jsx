import React from "react";
import { useEffect } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { setSearchShowFalse } from '../reduxParts/searchReducer';
import { useDispatch, useSelector } from 'react-redux';
import { PROGRESS } from "../const/progress";
import { Carousel } from "react-bootstrap";

function ProjectPage() {
    const project = useSelector((state) => state.project)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setSearchShowFalse())
    })

    let skillsTest = project.neededSkillsName.map((skill, key) => {
        return (
            <div key={key} className="p-1 d-inline">
                <Button variant="secondary" size="sm" disabled>
                    {skill}
                </Button>
            </div>
        )
    })

    let images = project.imageUrls.map((image, key) => {
        return (
            <Carousel.Item>
                <img
                className="d-block w-30"
                src={image}
                alt="image"
                />
            </Carousel.Item>
        )
    })

    console.log(project)

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

        <div className="p-2">
            <NavLink to="/">Tilbake</NavLink>
            <div className="p-3">
                <h1 className="text-center p-2">{project.name}</h1>
                <ProgressBar variant="info" now={progress} max={4}/>
                <h5 className="p-4">Kategori: {project.category} </h5>
                <Carousel variant="dark" slide={false}>{images}</Carousel>
                <h4 className="p-2">Skills vi trenger:</h4>
                <div className="p-2">{skillsTest}</div>
                <h3 className="p-2">Om prosjektet:</h3>
                <p className="p-2">{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectPage