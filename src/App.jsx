import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import KeycloakRoute from './routes/KeycloakRoute';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import NavbarHeader from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ChatPanel from './components/Chat/ChatPanel.jsx';
import { ROLES } from './const/roles';
import './App.css';

function App() {
  return (        
    <BrowserRouter>
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={
          <KeycloakRoute role={ ROLES.User }> 
            <ProjectPage /> 
          </KeycloakRoute>} />
        <Route path="/profile" element={
        <KeycloakRoute role={ ROLES.User }> 
          <ProfilePage /> 
        </KeycloakRoute>} />
        <Route path="/chat" element={
          <KeycloakRoute role={ ROLES.User }> 
            <ChatPanel /> 
          </KeycloakRoute>
        } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
