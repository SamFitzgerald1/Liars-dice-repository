import { useEffect, useState } from "react";
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
    fetch(`http://localhost:3000/user/${id}/new`, {
      method: 'POST'
    })
  }, []);
  
  return (
    <>
      <InviteUrl />
      <Chat id={id} />
      <Players />
      <StartGameForm id={id}/>
    </>
  );
}