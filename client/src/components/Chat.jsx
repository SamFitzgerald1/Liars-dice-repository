import { useState } from "react";
import socket from "../socketConfig";

export function Chat() {
    const [message, setMessage] = useState("");
    
    return (
      <>
        <h1>Chat</h1>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && socket.emit('sendMessage', {})}
        />
        <button onClick={() => socket.emit('sendMessage', {})} >Send</button>
      </>
    )
}