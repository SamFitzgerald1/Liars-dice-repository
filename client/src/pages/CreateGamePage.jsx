import { useParams } from "react-router-dom";
import { Chat } from "../components/Chat";
import { InviteUrl } from "../components/InviteUrl";
import { Settings } from "../components/Settings";
import { useEffect } from "react";
import socket from "../socketConfig";

export function CreateGamePage() {
  const {id} = useParams();

  useEffect(() => {
    socket.emit("joinRoom", id)
  }, []);
  
  return (
    <>
      <h1>Hello</h1>
      <InviteUrl />
      <Settings />
      <Chat id={id}/>
    </>
  )
}