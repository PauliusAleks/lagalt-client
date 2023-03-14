import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
//import KeycloakRoute from './routes/KeycloakRoute';
import KeycloakExample from './pages/KeycloakExample';
import ProfilePage from './pages/ProfilePage';
import NavbarHeader from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import './App.css';


function App() {
  return (        
    <BrowserRouter>
    <div className="App">
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/keycloakExample" element={<KeycloakExample />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
