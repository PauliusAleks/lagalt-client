import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { useDispatch,useSelector } from "react-redux";
import { getUserAsync } from "../../reduxParts/userReducer";
import keycloak from "../../keycloak";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ChatSendSVG from "./ChatSendSVG";
import BackArrowSVG from "../../pages/BackArrowSVG";
import '../../pages/IconAnimations.css'

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
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project)
  const userState = useSelector((state) => state.user);
  const connection = useSignalRConnection();
  
  //console.dir(userState);

  const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
}

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

  useEffect(()=> {
    scrollToBottom("chats")
    window.scrollTo(0, 0)
})

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
    <div style={{height: '100vh', backgroundColor: '#EEEEEE',fontFamily: 'Arial, sans-serif'}}>
    <Container className="p-2">
    <div >
          <h1 className="mr-1 p-3">Chat</h1>
          <div style={{backgroundColor:'#000000', height:'2px', width:'97%', marginLeft:'15px', marginBottom:'10px'}}></div>
      </div>
    <div className="rounded p-3 mt-3" style={{backgroundColor: 'white', textAlign:'center'}}>
    <NavLink to="/project" style={{float:'left'}}><BackArrowSVG className="backarrow"/></NavLink>
        <div className="rounded p-2 border-dark border border-2 d-inline-block" style={{width:'auto', backgroundColor:'#449DD1'}}>
        <div className="d-flex justify-content-center">
          <h2>{project.name} Chat</h2>
        </div>
    <div className="d-flex justify-content-center p-3">
      <div className="messages">
        <ul className="list-group list-group-flush">
        <div id="chats" className="bg-light w-100 rounded ml-5 border border-1 border-dark" 
            style={{overflowY: 'scroll', maxHeight: '500px', maxWidth:'500px', textAlign:'start'}}>
          {messages.map((msg, i) => (
            <li className="list-group-item" key={i}>
              <p>
                <span>{msg}</span>
              </p>
            </li>
          ))}
          </div>
        </ul>
        </div>
    </div>
    <div className="d-flex justify-content-center">
     <div className="message-input">
          <form name="form" onSubmit={handleSubmit} className="form p-2">
            <input className="rounded" style={{marginLeft:'20px', width:'450px'}} placeholder={"Skriv her"} />
              <button style={{padding:'0', border:'none', background:'none', marginLeft:'20px'}}><ChatSendSVG className="send"/></button>
          </form>
          </div>
        </div>
        </div>
        </div>
        </Container>
      </div>
  );
}

export default ChatPanel;
