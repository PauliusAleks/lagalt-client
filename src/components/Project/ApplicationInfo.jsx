import { useSelector, useDispatch } from "react-redux";
//import { getUserByIdAsync } from "../../reduxParts/viewedUserReducer";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ApplicationInfo = ({id, motivationLetter}) => {
const [profile, setProfile] = useState({})
const [showInfo,setShowInfo] = useState(false)

const handleGetUser= () => {
    fetch(`https://lagaltapi.azurewebsites.net/api/users/id/${id}`).then(async response => {
       const data = await response.json()
        setProfile(data)
    })
    setShowInfo(!showInfo)
}
useEffect(() => {
    fetch(`https://lagaltapi.azurewebsites.net/api/users/id/${id}`).then(async response => {
        const data = await response.json()
         setProfile(data)
     })
},[])
    
return (
<div>
    <div>
         <h5><b>Fornavn: </b>{profile.firstName}</h5>
        <h5><b>Etternavn: </b>{profile.lastName}</h5>
        <h5><b>Epost: </b>{profile.email}</h5>
        <h5><b>Brukernavn: </b>{profile.username}</h5>
        <h5><b>Beskrivelse: </b>{profile.portfolio}</h5>
        <h5><b>Ferdigheter: </b>{profile.skills.map((skill) => {
            <div key={skill} className="p-1 d-inline">
                <Button key={skill} variant="secondary" size="sm" disabled>
                    {skill}
                </Button>
            </div> 
    })}</h5>
        <h5><b>Søknadsbrev: </b>{motivationLetter}</h5>
    </div>
</div>
)
}
 


export default ApplicationInfo