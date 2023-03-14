import React from "react";

function ProjectPage() {

    var test = [1,2,3]

    var projects = test.map(function(item) {
        return (
            <div>
                <h1> item </h1>
                <label for="projectStatus">Downloading progress:</label>
                <progress id="file" value="2" max="4"> Status </progress>
            </div>
        );
    });
    

    return (
        <div class="projectPage">
            <div class="projectBanner"> 
                {projects}
            </div>
        </div>
    )
}

export default ProjectPage