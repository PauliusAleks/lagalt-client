import { React, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchShowFalse } from '../reduxParts/searchReducer';
import { NavLink } from "react-router-dom";
import BackArrowSVG from './BackArrowSVG';
import ViewedProfileInfo from '../components/Profile/ViewedProfileInfo';
import './IconAnimations.css'


const ViewedProfilePage =() => {
    const viewedUser = useSelector((state) => state.viewedUser)

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setSearchShowFalse())
    })

    return (
        <div>
        <div style={{ backgroundColor: '#EEEEE', fontFamily: 'Arial, sans-serif', width:'100vw', height:'100vh'}}>
            <Container>
                <div>
                    <h1 className="mr-1 p-3">{viewedUser.username} sin Profil</h1>
                    <div style={{backgroundColor:'#000000', height:'2px', width:'97%', marginLeft:'15px', marginBottom:'10px'}}></div>
                </div>
            <div className="container mt-5 p-3 rounded" style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#F8F9FA'}}>
            <NavLink to="/project"><BackArrowSVG className="backarrow"/></NavLink> 
            {viewedUser.isHidden && 
            <div>
                <img src="https://icon-library.com/images/incognito-icon/incognito-icon-19.jpg"
                alt="privat" width="200" className="rounded-circle"/>
                <p>Profilen til {viewedUser.username} er privat</p>
                </div>}
            <div>
            {!viewedUser.isHidden && 
                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" 
                alt="offentlig" width="200" className="rounded-circle"/>}
            {!viewedUser.isHidden && 
            <div>
                <ViewedProfileInfo user={viewedUser}></ViewedProfileInfo>
                </div> }
                </div>
            </div>
            </Container>
         </div>
        </div>
        )
}

export default ViewedProfilePage