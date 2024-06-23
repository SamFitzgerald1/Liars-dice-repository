import { useState } from "react"

export function useTurnSpeedInput() {

  const [turnSpeed, setTurnSpeed] = useState(-1);
  
  return {

    turnSpeed,
    
    renderTurnSpeedInput:
      <>
        <label>
          <input
            type="radio"
            name="turnSpeed"
            checked={turnSpeed === 30}
            onChange={() => setTurnSpeed(30)}
          />
          30 sec.
        </label>
        <label>
          <input
            type="radio"
            name="turnSpeed"
            checked={turnSpeed === 45}
            onChange={() => setTurnSpeed(45)}
          />
          45 sec.
        </label>
        <label>
          <input
            type="radio"
            name="turnSpeed"
            checked={turnSpeed === 60}
            onChange={() => setTurnSpeed(60)}
          />
          1 min.
        </label>
        <label>
          <input
            type="radio"
            name="turnSpeed"
            checked={turnSpeed === -1}
            onChange={() => setTurnSpeed(-1)}
          />
          Unlimited
        </label>
      </>
  }
}