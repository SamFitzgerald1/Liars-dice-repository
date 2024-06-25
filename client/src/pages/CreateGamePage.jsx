import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "../components/Chat";
import { InviteUrl } from "../components/InviteUrl";
import { useSettings } from "../components/Settings";
import { Players } from "../components/Players";
import { StartGameForm } from "../components/StartGameForm";
import socket from "../socketConfig";

export function CreateGamePage() {
  const {id} = useParams();

  const {renderSettings, numOfDice, turnSpeed} = useSettings();

  let username;

  useEffect(() => {
    username = prompt('Enter your name');
  }, []);

  useEffect(() => {
    socket.emit("joinRoom", id);
  }, []);
  
  useEffect(() => {      
    fetch(`http://localhost:3000/room/${id}/edit`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        numOfDice: numOfDice,
        turnSpeed: turnSpeed,
        username: username
      })
    });
  }, [numOfDice, turnSpeed, username]);

  return (
    <>
      <InviteUrl />
      {renderSettings}
      <Chat id={id} />
      <Players id={id} />
      <StartGameForm />
      <button onClick={() => fetch(`http://localhost:3000/room/${id}/delete`, {method: 'DELETE'})}>
        Delete
      </button>
    </>
  )
}