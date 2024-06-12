import { useState, useRef } from "react";

export function DiceSlider() {

    const defaultNumOfDice = 5;

    const diceNumInput = useRef(defaultNumOfDice);
    const [numOfDice, setNumOfDice] = useState(defaultNumOfDice)
    
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