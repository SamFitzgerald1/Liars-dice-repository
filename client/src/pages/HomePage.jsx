import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from 'nanoid';

export function HomePage() {
  const [username, setUsername] = useState('');

  const ID = nanoid();
  
  return (
    <>
      <h1>Liar's Dice</h1>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Link
        to={`/createGame/${ID}`}
        onClick={() => fetch(`http://localhost:3000/room/${ID}`, {method: 'POST'})}
      >
        Create Game
      </Link>
      <a href="">Join Game</a>
    </>
  )
}