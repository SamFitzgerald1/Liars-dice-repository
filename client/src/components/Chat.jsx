import { useState, useEffect } from "react";
import socket from "../socketConfig";

export function Chat(props) {
    const [message, setMessage] = useState("");
    const [messageLog, setMessageLog] = useState([]);

    useEffect(() => {
      socket.on("receiveMessage", data => {
        setMessageLog(list => [...list, data.message]);
      });
    }, [socket]);
    
    return (
      <>
        <h1>Chat</h1>
        <div>
          {messageLog.map(messages => (
            <p>{messages}</p>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && socket.emit('sendMessage', {
            roomId: props.id,
            message: message
          })}
        />
        <button onClick={() => socket.emit('sendMessage', {
            roomId: props.id,
            message: message
          })}>
            Send
          </button>
      </>
    )
}