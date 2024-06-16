import { Link } from "react-router-dom";

export function StartGameForm(props) {
  return (
    <>
      <input type="checkbox" id="readyButton" />
      <label htmlFor="readyButton">Ready</label>
      <Link to="/game">Start Game</Link>
    </>
  )
}