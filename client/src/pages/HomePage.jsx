import { Link } from "react-router-dom";

export function HomePage() {
    return (
      <>
        <h1>Liar's Dice</h1>
        <Link to='/creategame' >Create Game</Link>
        <Link to='/gamelist' >Join Game</Link>
      </>
    )
}