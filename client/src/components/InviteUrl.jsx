import { useRef } from "react";

export function InviteUrl() {

    const inputRef = useRef();
    
    return (
      <>
        <input ref={inputRef} value="GameIdURL" type="text" readOnly />
        <button onClick={() => navigator.clipboard.writeText(inputRef.current.value)}>Copy</button>
      </>
    )
}