import { useDiceSlider } from "./settingComponents/DiceSlider"
import { TurnSpeedInput } from "./settingComponents/TurnSpeedInput"

export function useSettings() {

  const {renderDiceSlider, numOfDice} = useDiceSlider();
    
  return {

    numOfDice,

    renderSettings: (
      <>
        {renderDiceSlider}
        <TurnSpeedInput />
      </>
    )
  }
}