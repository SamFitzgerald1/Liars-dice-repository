import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from 'nanoid';
import socket from "../socketConfig";

export function HomePage() {
  const [username, setUsername] = useState('');
  
  return (
    <>
      <h1>Liar's Dice</h1>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Link to={`/createGame/${nanoid()}`} >Create Game</Link>
      <a href="">Join Game</a>
    </>
  )
}