import React ,{ useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false)

  function toggleButton(){
    setIsOn(()=> isOn = !isOn)
  }
  return <button onClick={toggleButton}>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
