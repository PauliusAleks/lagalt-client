import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import KeycloakConnectingPage from './pages/KeycloakConnectingPage';
import { initialize } from "./keycloak";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reduxStore from './reduxParts/reduxStore';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<KeycloakConnectingPage />)
// Initialize Keycloak
initialize()
  .then(() => { // If No Keycloak Error occurred - Display the App
    root.render(
      <React.StrictMode>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </React.StrictMode>
    );
  })
  .catch((error) => {
    root.render(<p>Not connected to keycloak ...</p>)
    console.log(error)
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
