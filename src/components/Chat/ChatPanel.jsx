import { useState } from "react";
import { useEffect } from "react";
import * as signalR from "@microsoft/signalr";

function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://lagaltapi.azurewebsites.net/chathub" ) // Connect to SignalR hub
    .build();

  connection.on("ReceiveMessage", (message) => {
    setMessages([...messages, message]); // Add new message to state
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages, setMessages]);

  useEffect(() => {
    connection.start().then(() => {
      console.log("Connected to SignalR hub");
    });

    return () => {
      connection.stop().then(() => {
        console.log("Disconnected from SignalR hub");
      });
    };
  });
  return (
    <>
      <div className="w-50">
        <div className="messages">
          <ul className="list-group list-group-flush">
            {messages?.map((msg) => (
              <li className="list-group-item">
                <p>
                  <span>{msg}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="message-input">
          <form
            name="form"
            onSubmit={(e) => {
              e?.preventDefault();
              let msg = e.target[0].value;
              if (connection.state === signalR.HubConnectionState.Connected) {
                connection.invoke("SendMessage", msg);
              } else {
                connection.start().then(() => {
                  connection.invoke("SendMessage", msg);
                });
              }
            }}
            className="form "
          >
            <label htmlFor="message-input-form">Melding</label>
            <input placeholder={"Skriv her"}></input>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatPanel;