import React from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux";

export const UserSkills = () => {

    const user = useSelector((state) => state.user)
    
    let skills = user.skills.map((skill) => {
        return (
            <div key={skill} className="p-1 d-inline">
                <Button key={skill} variant="secondary" size="sm" disabled>
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
export default UserSkills

