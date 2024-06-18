import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "../components/Chat";
import { InviteUrl } from "../components/InviteUrl";
import { Settings } from "../components/Settings";
import { Players } from "../components/Players";
import { StartGameForm } from "../components/StartGameForm";
import socket from "../socketConfig";

export function CreateGamePage() {
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/creategame/${id}`);
  }, []);
  
  useEffect(() => {
    socket.emit("joinRoom", id)
  }, []);
  
  return (
    <>
      <InviteUrl />
      <Settings />
      <Chat id={id} />
      <Players id={id} />
      <StartGameForm />
    </>
  )
}