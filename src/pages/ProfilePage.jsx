import { React, useEffect } from 'react'
import keycloak from '../keycloak'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeIsHidden, getUserAsync } from '../reduxParts/userReducer';
import  ProfileInfo  from '../components/Profile/ProfileInfo'
import { setSearchShowFalse } from '../reduxParts/searchReducer';

function ProfilePage() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setSearchShowFalse())
    })

    
    function handleLogout() {
        keycloak.logout()
    }

    function tokenLog() {
        console.log(keycloak.token)
    }
    function tokenParsed() {
        console.log(keycloak.tokenParsed)
    }
    const handleGetUser = () => {
        dispatch(getUserAsync(keycloak.tokenParsed.preferred_username))
    }
    const handleIsHidden = () =>  {
        dispatch(changeIsHidden())
    }
    const handleEditProfile = () => {
        //Profile editing stuff
    }
    return (
        <>
        <div class="container">
            <Form>
                <div class="form-check form-switch form-check-inline">
                    <input 
                        type="checkbox" 
                        id="hidden" 
                        class="form-check-input" 
                        checked={!user.isHidden} 
                        onChange={handleIsHidden}/>
                    <label for="hidden" class="form-check-label">Hidden</label>
                </div>
                <div style={{float:'right'}}>
                    <Button onClick={handleLogout}>Logg ut</Button>
                    <Button onClick={tokenLog}>Token</Button>
                    <Button onClick={tokenParsed}>Token Parsed</Button>
                    <Button onClick={handleGetUser}>Fetch user</Button>
                </div>
                
            </Form>
            <ProfileInfo user={user}></ProfileInfo>
            <Button style={{float:'right'}} onClick={handleEditProfile} >Rediger Profil</Button>
        </div>
        
        </>
        )
}

export default ProfilePage