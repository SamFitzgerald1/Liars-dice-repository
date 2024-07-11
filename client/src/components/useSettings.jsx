import { useDiceSlider } from "./settingComponents/useDiceSlider"
import { useTurnSpeedInput } from "./settingComponents/useTurnSpeedInput"

export function useSettings() {

  const {renderDiceSlider, numOfDice} = useDiceSlider();
  const {renderTurnSpeedInput, turnSpeed} = useTurnSpeedInput();
    
  return {

    numOfDice,
    turnSpeed,

    renderSettings: (
      <>
        {renderDiceSlider}
        {renderTurnSpeedInput}
      </>
    )
  }
}