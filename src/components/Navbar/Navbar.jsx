import React from "react";
// import {handleLogin} from "../pages/MainPage"
//import keycloak from "../../keycloak";
import Logo from "./Logo";
import Searchbar from "./searchbar/Searchbar";
import Actions from "./Actions";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "bootstrap/dist/css/bootstrap.min.css";


const NavbarHeader = () => {
    // function handleLogin() {
    //     keycloak.login()
    // }
    // function handleLogout() {
    //     keycloak.logout()
    // }
    return(
        <div className="navbar" class="d-flex justify-content-between bg-secondary p-3">
            <Logo />
            <Searchbar />
            <Actions />
        </div>


        // <Navbar class="navbar" className="bg-secondary sticky flex justify-content-space-between">
        //     <img id="nav-logo" src="logoSample.png" alt="Logo"/>
        //     <h1 className="m-2 p-2" id="nav-title">Lagalt</h1>
            
        //     <form>
        //         <label>
        //             <input type="search" className="m-4" id="nav-search" placeholder="Search for projects"/>
        //         </label>
        //     </form>
        //     <div className="m-2 p-2">
        //         <Button variant="primary" id="user-login" onClick={handleLogin}>Login</Button>
        //     </div>
        //     {/* {keycloak !== null && */}
        //     <div className="m-2 p-2">
        //         <Button variant="primary" id="user-logout" onClick={handleLogout}>Logout</Button>
        //     </div>
        //     {/* } */}
        // </Navbar>


    //     <Navbar className="bg-secondary sticky" expand="lg">
    //   <Container fluid>
    //     <Navbar.Brand href="#">Lagalt</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //       </Nav>
    //       <Form className="justify-content-center d-flex m-4">
    //              <label>
    //                  <input type="search" id="nav-search" placeholder="Search for projects"/>
    //              </label>
    //         <div className="justify-content-center m-2 p-2">
    //             <Button variant="primary" id="user-login" onClick={handleLogin}>Login</Button>
    //         </div>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    )
}
export default NavbarHeader