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

  const {renderSettings, numOfDice} = useSettings();

  useEffect(() => {
    socket.emit("joinRoom", id)
  }, []);
  
  useEffect(() => {
    fetch(`http://localhost:3000/creategame/${id}`, {
      method: 'POST'
    });
  }, []);
  
  useEffect(() => {      
    fetch(`http://localhost:3000/creategame/${id}/dicenum`, {
      method: 'PUT',
      body: {
        diceNum: numOfDice
      }
    });
  }, [numOfDice]);
  
  return (
    <>
      <InviteUrl />
      {renderSettings}
      <Chat id={id} />
      <Players id={id} />
      <StartGameForm />
    </>
  )
}