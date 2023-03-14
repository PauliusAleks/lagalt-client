import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { NavLink } from "react-router-dom"

function ProjectPage() {

    var test = ["Java", "C#", "Python", "Music", "ASP.NET"]

    var skills = test.map(function(skill) {
        return (
            <div class="p-2 d-inline">
            <Button variant="secondary" size="sm" disabled>
                {skill}
            </Button>
            </div>
        )
    })

    return (
        <div class="p-2">
            <NavLink to="/">Tilbake</NavLink>
            <div class="p-3">
                <h1 class="text-center p-2">Title</h1>
                <ProgressBar variant="info" now={20} />
                <h5 class="p-3">Industri: </h5>
                <h4>Skills vi trenger:</h4>
                {skills}
                <h3>Om prosjektet</h3>
                <p></p>
            </div>
        </div>
    )
}

export default ProjectPage