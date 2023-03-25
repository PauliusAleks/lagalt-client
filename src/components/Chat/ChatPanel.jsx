import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { useDispatch,useSelector } from "react-redux";
import { getUserAsync } from "../../reduxParts/userReducer";


function useSignalRConnection() {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://lagaltapi.azurewebsites.net/chathub")
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
  const userState = useSelector((state) => state.user);
  const connection = useSignalRConnection();
  
  console.dir(userState);

  useEffect(() => {
    dispatch(getUserAsync())
      .then((user) => setUser(user))
      .catch((error) => console.error(error));
  }, [dispatch]);

  useEffect(() => {
    fetch("https://lagaltapi.azurewebsites.net/api/UserMessage")
      .then((response) => response.json())
      .then((data) => {
        setMessages(data.map((data) => data.username+": "+data.message));
      });
  }, []);

  useEffect(() => {
    if (connection) {
      connection.on("ReceiveMessage", (message) => {
        setMessages((msgs) => [...msgs, message]);
      });
    }
  }, [connection]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = e.target[0].value; 
    const usernameAndMessage = userState.username + ": " + msg;
    fetch("https://lagaltapi.azurewebsites.net/api/UserMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: parseInt(userState.id), 
        message: msg,
      }),
    })
      .then((response) => {
        console.dir(response);
        if (connection && connection.state === signalR.HubConnectionState.Connected) {
          connection.send("SendMessage", usernameAndMessage);
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
