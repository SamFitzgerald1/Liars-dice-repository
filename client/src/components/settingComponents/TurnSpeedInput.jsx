export function TurnSpeedInput() {
  return (
    <>
      <label>
        <input type="radio" name="turnSpeed" />
        30 sec.
      </label>
      <label>
        <input type="radio" name="turnSpeed" />
        45 sec.
      </label>
      <label>
        <input type="radio" name="turnSpeed" />
        1 min.
      </label>
      <label>
        <input type="radio" name="turnSpeed" />
        Unlimited
      </label>
    </>
  )
}