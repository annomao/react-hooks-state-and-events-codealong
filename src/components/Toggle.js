import React ,{ useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false)

  function toggleButton(){
    setIsOn(()=> isOn = !isOn)
  }

  const color = isOn ? "red" : "white";

  return <button onClick={toggleButton} style={{backgroundColor:color}}>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
