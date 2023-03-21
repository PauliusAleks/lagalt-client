import React from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux";

export const ProjectSkills = () => {
    const project = useSelector((state) => state.project)

    let skills = project.neededSkills.map((skill, key) => {
        return (
            <div key={key} className="p-1 d-inline">
                <Button variant="secondary" size="sm" disabled>
                    {skill}
                </Button>
            </div>
        )
    
    })
    return (
        <div>
            {skills}
        </div>
    )
    
}

export default ProjectSkills