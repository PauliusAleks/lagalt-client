<<<<<<< HEAD
import { React, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import KeycloakRoute from "./routes/KeycloakRoute";
import ProjectPage from "./pages/ProjectPage";
import ProfilePage from "./pages/ProfilePage";
import NavbarHeader from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import EditProfilePage from "./pages/EditProfilePage";
import ChatPanel from "./components/Chat/ChatPanel.jsx";
import { ROLES } from "./const/roles";
import "./App.css";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

function App() {
  const [, setTokenUpdateCount] = useState(0);
=======
import { React } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import KeycloakRoute from './routes/KeycloakRoute';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import NavbarHeader from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import EditProfilePage from './pages/EditProfilePage'
//import ChatPanel from './components/Chat/ChatPanel.jsx';
import { ROLES } from './const/roles';
import './App.css';
import { useState, useCallback } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import ViewedProfilePage from './pages/ViewedProfilePage';

function App() {
  const [, setTokenUpdateCount] = useState(0);
  
    const onUpdateToken = useCallback(() => {
        setTokenUpdateCount((value) => value + 1);
    }, []);
>>>>>>> 59e746b2180c6024b4c655410073816fede62ce5

  const onUpdateToken = useCallback(() => {
    setTokenUpdateCount((value) => value + 1);
  }, []);

  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <BrowserRouter>
        <div className="App">
          <NavbarHeader />
          <ReactKeycloakProvider authClient={keycloak} onTokens={onUpdateToken}>
            <Routes>
              <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
              <Route
                path="/project"
                element={
                  <KeycloakRoute role={ROLES.User}>
                    <ProjectPage />
                  </KeycloakRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <KeycloakRoute role={ROLES.User}>
                    <ProfilePage />
                  </KeycloakRoute>
                }
              />
              <Route
                path="/editProfilePage"
                element={
                  <KeycloakRoute role={ROLES.User}>
                    <EditProfilePage />
                  </KeycloakRoute>
                }
              />
              <Route path="/chat" element={
              <KeycloakRoute role={ROLES.User}>
                <ChatPanel />
              </KeycloakRoute>
              } />
            </Routes>
          </ReactKeycloakProvider>
        </div>
      </BrowserRouter>
    </div>
=======
              <Route path="/project" element={
                <KeycloakRoute role={ ROLES.User }>
                    <ProjectPage /> 
                </KeycloakRoute>} />
              <Route path="/profile" element={
                <KeycloakRoute role={ ROLES.User }>                   
                    <ProfilePage /> 
                </KeycloakRoute>} />
                <Route path="/viewedProfile" element={
                <KeycloakRoute role={ ROLES.User }>                   
                    <ViewedProfilePage /> 
                </KeycloakRoute>} />
                <Route path="/editProfilePage" element={
                <KeycloakRoute role={ ROLES.User }> 
                   <EditProfilePage/> 
                </KeycloakRoute>} />
        {/* <Route path="/chat" element={
          <KeycloakRoute role={ ROLES.User }> 
            <ChatPanel /> 
          </KeycloakRoute>
        } /> */}
          </Routes>
        </ReactKeycloakProvider>
      </div>
    </BrowserRouter>
    </div> 
>>>>>>> 59e746b2180c6024b4c655410073816fede62ce5
  );
}

export default App;
