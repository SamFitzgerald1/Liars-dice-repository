import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';

export function HomePage() {

  const ID = nanoid();
  
  return (
    <>
      <h1>Liar's Dice</h1>
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