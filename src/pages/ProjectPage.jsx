import React from "react";
import { ProgressBar } from "react-bootstrap";

function ProjectPage() {

    return (
        <div class="p-3">
        <h1 class="text-center">Title</h1>
        <ProgressBar variant="info" now={20} />
        <h4>Skills vi trenger:</h4>
        <h3>Om prosjektet</h3>
        <p></p>
        </div>
    )
}

export default ProjectPage