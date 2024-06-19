import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

export function DiceSlider() {

    const defaultNumOfDice = 5;

    const diceNumInput = useRef(defaultNumOfDice);
    const [numOfDice, setNumOfDice] = useState(defaultNumOfDice);

    const {id} = useParams();

    // useEffect(() => {      
    //   fetch(`http://localhost:3000/creategame/${id}/dicenum`, {
    //     method: 'PUT',
    //     body: {
    //       diceNum: numOfDice
    //     }
    //   });
    // }, [numOfDice]);
    
    return (
      <>
        <label htmlFor="diceNum">{numOfDice}</label>
        <input
          type="range"
          id="diceNum"
          ref={diceNumInput}
          onChange={e => setNumOfDice(e.target.value)}
          min="2"
          max="7"
          defaultValue="5"
        />
      </>
    )
}