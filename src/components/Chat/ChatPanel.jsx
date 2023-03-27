import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { useDispatch,useSelector } from "react-redux";
import { getUserAsync } from "../../reduxParts/userReducer";
import keycloak from "../../keycloak";
import { useLocation } from "react-router-dom";
import { getContributorProjectAsync } from "../../reduxParts/projectReducer";

const deployURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";
const baseURL = debugBaseURL;

function useSignalRConnection() {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(baseURL+"/chathub")
      .build();
    setConnection(newConnection);
    return () => {
      newConnection.stop().then(() => {
        console.log("Disconnected from SignalR hub");
      });
    };
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().then(() => {
        console.log("Connected to SignalR hub");
      });
      return () => {
        connection.off("ReceiveMessage");
      };
    }
  }, [connection]);

  return connection;
}
 

function ChatPanel() {
  const projectState = useSelector((state) => state.project);
  const userState = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  const connection = useSignalRConnection(); 

  useEffect(() => {
    console.info("INFO ABOUT USER SLICE: ");
    console.dir(userState);
    console.info("INFO ABOUT PROJECT SLICE: ");
    console.dir(projectState);
    fetch(baseURL+"/api/UserMessage/"+JSON.stringify(projectState.id))
      .then((response) => response.json())
      .then((data) => {
        setMessages(data.map((data) => data.username+": "+data.message));
      });
  }, []);

  useEffect(() => {
    if (connection) {
      connection.on("ReceiveMessage", (projectId, message) => {
        if(projectState.id === parseInt(projectId)){
          setMessages((msgs) => [...msgs, message]);
        }
      });
    }
  }, [connection]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = e.target[0].value; 
    const usernameAndMessage = userState.username + ": " + msg;
    fetch(baseURL+"/api/UserMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId: parseInt(projectState.id),
        userId: parseInt(userState.id), 
        message: msg,
      }),
    })
      .then((response) => {  
        if (connection && connection.state === signalR.HubConnectionState.Connected) { 
          try{
            connection.invoke("SendMessage", JSON.stringify(projectState.id), usernameAndMessage);
          } catch(err){
            console.error("Error invoking sendmessage: " + err );
          }
        } else {
          console.warn("SignalR connection is not established.");
        }
      })
      .catch(console.warn);
    e.target[0].value = "";
  };

  return (
    <div className="w-50">
      <div className="messages">
        <ul className="list-group list-group-flush">
          {messages.map((msg, i) => (
            <li className="list-group-item" key={i}>
              <p>
                <span>{msg}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="message-input">
        <form name="form" onSubmit={handleSubmit} className="form ">
          <label htmlFor="message-input-form">Melding</label>
          <input placeholder={"Skriv her"} />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatPanel;
