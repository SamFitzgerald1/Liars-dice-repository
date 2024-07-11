import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSettings } from "../components/useSettings";

export function CreateGamePage() {
  const {id} = useParams();

  const {renderSettings, numOfDice, turnSpeed} = useSettings();
  
  useEffect(() => {
    fetch(`http://localhost:3000/room/${id}/edit`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        numOfDice: numOfDice,
        turnSpeed: turnSpeed
      })
    });
  }, [numOfDice, turnSpeed]);

  return (
    <>
      {renderSettings}
      <button onClick={() => fetch(`http://localhost:3000/room/${id}/delete`, {method: 'DELETE'})}>
        Delete
      </button>
      <Link to={`/lobby/${id}`}>Create!</Link>
    </>
  )
}