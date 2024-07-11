import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "../components/Chat";
import { InviteUrl } from "../components/InviteUrl";
import { Players } from "../components/Players";
import { StartGameForm } from "../components/StartGameForm";
import socket from "../socketConfig";

export function LobbyPage() {

  const {id} = useParams();

  useEffect(() => {
      socket.emit("joinRoom", id);
    }, []);

  useEffect(() => {
    let username = prompt('Enter your name');

    fetch(`http://localhost:3000/user/${id}/new`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username
      })
    })
  }, []);
  
  return (
    <>
      <InviteUrl />
      <Chat id={id} />
      <Players id={id} />
      <StartGameForm id={id}/>
    </>
  );
}